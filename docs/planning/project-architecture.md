# Project Architecture

## Overview

This is a full-stack portfolio application consisting of:
- **Frontend**: React single-page application
- **Backend**: Python FastAPI server
- **Deployment**: Google Cloud Run via GitHub Actions
- **Containerization**: Docker multi-stage build

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    User Browser                          │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ HTTPS
                     │
┌────────────────────▼────────────────────────────────────┐
│              Google Cloud Run                            │
│  ┌──────────────────────────────────────────────────┐   │
│  │         FastAPI Backend (Python)                 │   │
│  │  - Serves React static files                     │   │
│  │  - Health check endpoint                         │   │
│  │  - CORS middleware                               │   │
│  └──────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────┐   │
│  │      React Frontend (Static Files)               │   │
│  │  - Landing page                                  │   │
│  │  - Education section                             │   │
│  │  - Projects section                              │   │
│  │  - Skills section                                │   │
│  │  - Contact section                               │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                     │
                     │
┌────────────────────▼────────────────────────────────────┐
│            GitHub Actions CI/CD                          │
│  - Builds Docker image                                  │
│  - Pushes to Google Container Registry                  │
│  - Deploys to Cloud Run                                 │
└─────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend
- **React 18.2.0**: UI library
- **React Scripts 5.0.1**: Build tooling
- **CSS3**: Styling with responsive design
- **HTML5**: Semantic markup

### Backend
- **Python 3.11**: Programming language
- **FastAPI 0.104.1**: Web framework
- **Uvicorn**: ASGI server
- **Pydantic**: Data validation

### Deployment
- **Docker**: Containerization
- **Google Cloud Run**: Serverless container platform
- **GitHub Actions**: CI/CD pipeline
- **Google Container Registry**: Docker image storage

## Project Structure

```
.
├── backend/                 # Python FastAPI backend
│   ├── main.py             # Main application file
│   ├── requirements.txt    # Python dependencies
│   └── Dockerfile          # Backend Dockerfile (optional)
├── frontend/               # React frontend
│   ├── public/            # Public assets
│   │   └── index.html     # HTML template
│   ├── src/               # React source code
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # Component styles
│   │   ├── index.js       # React entry point
│   │   └── index.css      # Global styles
│   └── package.json       # Node dependencies
├── .github/               # GitHub configuration
│   └── workflows/         # GitHub Actions workflows
│       └── deploy-cloud-run.yml
├── docs/                  # Documentation
│   ├── planning/          # Planning documents
│   └── prompt-log.md      # Prompt log
├── Dockerfile             # Main Dockerfile (multi-stage)
├── cloudbuild.yaml        # Cloud Build configuration
├── .gitignore            # Git ignore rules
├── .dockerignore         # Docker ignore rules
├── .gcloudignore         # GCloud ignore rules
├── setup.sh              # Setup script (Unix)
├── setup.bat             # Setup script (Windows)
└── README.md             # Project documentation
```

## Data Flow

### Production Deployment
1. User visits Cloud Run URL
2. FastAPI serves React static files
3. React app loads in browser
4. User interacts with portfolio sections
5. Smooth scrolling navigation between sections

### Development Flow
1. Backend runs on `http://localhost:8080`
2. Frontend runs on `http://localhost:3000`
3. Frontend makes API calls to backend (if needed)
4. Hot reload for development

## API Endpoints

### Production
- `GET /` - Serves React app (index.html)
- `GET /static/*` - Serves static assets (JS, CSS, images)
- `GET /api/health` - Health check endpoint
- `GET /*` - Catch-all route for React Router (serves index.html)

### Development
- `GET /` - Returns API info
- `GET /api/health` - Health check endpoint

## Security Considerations

1. **CORS**: Currently allows all origins (`*`). In production, restrict to your domain.
2. **Static Files**: Served securely through FastAPI
3. **Environment Variables**: Use Cloud Run environment variables for configuration
4. **HTTPS**: Cloud Run provides SSL/TLS by default

## Scalability

- **Cloud Run**: Automatically scales based on traffic
- **Stateless**: No server-side state, easily scalable
- **CDN**: Can be enhanced with CDN for static assets
- **Caching**: Browser caching for static assets

## Future Enhancements

1. **Database Integration**: Add database for dynamic content
2. **Authentication**: Add admin panel for content management
3. **Analytics**: Add analytics tracking
4. **SEO**: Enhance SEO with meta tags and sitemap
5. **Performance**: Add image optimization and lazy loading
6. **Testing**: Add unit and integration tests
7. **CI/CD**: Enhance CI/CD with testing and staging environments

