from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List, Optional
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

# Pydantic models
class Message(BaseModel):
    message: str

class Item(BaseModel):
    id: Optional[int] = None
    title: str
    description: str

# In-memory storage (replace with database in production)
items_db = []
next_id = 1

# Check if static files exist (production build)
static_dir = os.path.join(os.path.dirname(__file__), "..", "static")
has_static_files = os.path.exists(static_dir)

# API Routes
@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

@app.get("/api/items", response_model=List[Item])
async def get_items():
    return items_db

@app.post("/api/items", response_model=Item)
async def create_item(item: Item):
    global next_id
    item.id = next_id
    next_id += 1
    items_db.append(item)
    return item

@app.get("/api/items/{item_id}", response_model=Item)
async def get_item(item_id: int):
    for item in items_db:
        if item.id == item_id:
            return item
    return JSONResponse(status_code=404, content={"detail": "Item not found"})

@app.delete("/api/items/{item_id}")
async def delete_item(item_id: int):
    global items_db
    items_db = [item for item in items_db if item.id != item_id]
    return {"message": "Item deleted"}

# Serve static files if they exist (production)
if has_static_files:
    # Mount static assets (JS, CSS, etc.)
    static_assets_dir = os.path.join(static_dir, "static")
    if os.path.exists(static_assets_dir):
        app.mount("/static", StaticFiles(directory=static_assets_dir), name="static")
    
    # Serve React app for all non-API routes
    @app.get("/{full_path:path}")
    async def serve_react_app(full_path: str):
        # Check if it's a request for a static file
        if full_path.startswith("static/"):
            return JSONResponse(status_code=404, content={"detail": "Not found"})
        
        # Serve index.html for React Router
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
