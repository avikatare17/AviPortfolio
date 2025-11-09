from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles
import uvicorn
import os

app = FastAPI(title="Portfolio API", version="1.0.0")

# Configure CORS to allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Routes
@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

# Check if static files exist (production build)
# In Docker, static files are copied to /app/static
# In local development, they would be at ../static relative to backend/
static_dir = os.path.join(os.path.dirname(__file__), "static")
if not os.path.exists(static_dir):
    static_dir = os.path.join(os.path.dirname(__file__), "..", "static")
has_static_files = os.path.exists(static_dir)

# Serve static files if they exist (production)
if has_static_files:
    # Mount static assets (JS, CSS, etc.) - React build puts them in a "static" subdirectory
    static_assets_dir = os.path.join(static_dir, "static")
    if os.path.exists(static_assets_dir):
        app.mount("/static", StaticFiles(directory=static_assets_dir), name="static_assets")
    
    # Serve React app for root and all non-API routes (React Router support)
    @app.get("/")
    async def serve_root():
        index_path = os.path.join(static_dir, "index.html")
        if os.path.exists(index_path):
            return FileResponse(index_path)
        return JSONResponse(status_code=404, content={"detail": "Not found"})
    
    # Catch-all route for React Router (must be last)
    @app.get("/{full_path:path}")
    async def serve_react_app(full_path: str):
        # Skip API routes and static assets (already handled)
        if full_path.startswith("api/") or full_path.startswith("static/"):
            return JSONResponse(status_code=404, content={"detail": "Not found"})
        
        # Try to serve the file if it exists (for assets in root of build)
        file_path = os.path.join(static_dir, full_path)
        if os.path.exists(file_path) and os.path.isfile(file_path):
            return FileResponse(file_path)
        
        # Otherwise serve index.html for React Router
        index_path = os.path.join(static_dir, "index.html")
        if os.path.exists(index_path):
            return FileResponse(index_path)
        return JSONResponse(status_code=404, content={"detail": "Not found"})
else:
    # Development mode - just return API info
    @app.get("/")
    async def root():
        return {"message": "Welcome to Portfolio API", "mode": "development"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run(app, host="0.0.0.0", port=port)
