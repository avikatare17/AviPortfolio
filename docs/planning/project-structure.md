# Project Structure

## Directory Tree

```
Avi Portfolio/
├── .github/                          # GitHub configuration
│   └── workflows/                    # GitHub Actions workflows
│       └── deploy-cloud-run.yml      # Deployment workflow
├── backend/                          # Python FastAPI backend
│   ├── main.py                       # Main application file
│   ├── requirements.txt              # Python dependencies
│   └── Dockerfile                    # Backend Dockerfile (optional)
├── docs/                             # Documentation
│   ├── planning/                     # Planning documents
│   │   ├── project-architecture.md   # Architecture documentation
│   │   ├── deployment-guide.md       # Deployment instructions
│   │   ├── development-guide.md      # Development guide
│   │   └── project-structure.md      # This file
│   └── prompt-log.md                 # Prompt log
├── frontend/                         # React frontend
│   ├── public/                       # Public assets
│   │   └── index.html                # HTML template
│   ├── src/                          # React source code
│   │   ├── App.js                    # Main React component
│   │   ├── App.css                   # Component styles
│   │   ├── index.js                  # React entry point
│   │   └── index.css                 # Global styles
│   └── package.json                  # Node dependencies
├── .dockerignore                     # Docker ignore rules
├── .gcloudignore                     # GCloud ignore rules
├── .gitignore                        # Git ignore rules
├── cloudbuild.yaml                   # Cloud Build configuration
├── Dockerfile                        # Main Dockerfile (multi-stage)
├── README.md                         # Project documentation
├── setup.sh                          # Setup script (Unix)
└── setup.bat                         # Setup script (Windows)
```

## File Descriptions

### Root Level Files

#### `Dockerfile`
- Multi-stage Docker build
- Builds React frontend
- Combines frontend and backend
- Production-ready container

#### `cloudbuild.yaml`
- Google Cloud Build configuration
- Alternative deployment method
- Builds and deploys to Cloud Run

#### `.gitignore`
- Git ignore rules
- Excludes node_modules, venv, etc.
- Prevents committing sensitive files

#### `.dockerignore`
- Docker ignore rules
- Reduces Docker build context
- Excludes unnecessary files

#### `.gcloudignore`
- Google Cloud ignore rules
- Excludes files from Cloud deployment
- Similar to .gitignore

#### `README.md`
- Project documentation
- Setup instructions
- Deployment guide
- Usage examples

#### `setup.sh` / `setup.bat`
- Setup scripts for local development
- Installs dependencies
- Sets up virtual environment
- Platform-specific (Unix/Windows)

### Backend Files

#### `backend/main.py`
- FastAPI application
- API routes
- Static file serving
- CORS configuration
- Health check endpoint

#### `backend/requirements.txt`
- Python dependencies
- FastAPI and Uvicorn
- Pydantic for validation
- aiofiles for static files

#### `backend/Dockerfile`
- Backend-specific Dockerfile
- Optional for separate backend deployment
- Not used in main deployment

### Frontend Files

#### `frontend/package.json`
- Node.js dependencies
- React and React DOM
- React Scripts for building
- Scripts for development and build

#### `frontend/public/index.html`
- HTML template
- Root element for React
- Meta tags
- Title and description

#### `frontend/src/App.js`
- Main React component
- Portfolio structure
- Navigation logic
- Section components
- Smooth scrolling

#### `frontend/src/App.css`
- Component styles
- Responsive design
- Navigation styles
- Section layouts
- Mobile styles

#### `frontend/src/index.js`
- React entry point
- Renders App component
- React DOM root

#### `frontend/src/index.css`
- Global styles
- CSS reset
- Base typography
- Root styles

### GitHub Workflow

#### `.github/workflows/deploy-cloud-run.yml`
- GitHub Actions workflow
- Automated deployment
- Builds Docker image
- Pushes to Container Registry
- Deploys to Cloud Run

### Documentation

#### `docs/prompt-log.md`
- Log of all prompts
- Development history
- Feature implementations
- Session notes

#### `docs/planning/project-architecture.md`
- Architecture documentation
- Technology stack
- System design
- Data flow
- Security considerations

#### `docs/planning/deployment-guide.md`
- Deployment instructions
- GCP setup
- GitHub configuration
- Manual deployment
- Troubleshooting

#### `docs/planning/development-guide.md`
- Development setup
- Local development
- Code organization
- Customization guide
- Best practices

#### `docs/planning/project-structure.md`
- This file
- Directory structure
- File descriptions
- Organization guide

## Build Artifacts

### Development
- `frontend/node_modules/` - Node dependencies
- `backend/venv/` - Python virtual environment
- `frontend/build/` - React build output (when built)

### Production
- Docker image in Google Container Registry
- Deployed service on Cloud Run
- Static files served by FastAPI

## Ignored Files

### Git Ignored
- `node_modules/` - Node dependencies
- `venv/` - Python virtual environment
- `.env` - Environment variables
- `build/` - Build output
- `*.log` - Log files
- `.DS_Store` - macOS files

### Docker Ignored
- `.git/` - Git repository
- `node_modules/` - Node dependencies
- `venv/` - Python virtual environment
- `.env` - Environment variables
- Documentation files

## Configuration Files

### Python
- `requirements.txt` - Python dependencies
- `venv/` - Virtual environment (created locally)

### Node.js
- `package.json` - Node dependencies and scripts
- `node_modules/` - Installed dependencies (created locally)

### Docker
- `Dockerfile` - Docker image definition
- `.dockerignore` - Docker ignore rules

### Google Cloud
- `cloudbuild.yaml` - Cloud Build configuration
- `.gcloudignore` - GCloud ignore rules

### GitHub
- `.github/workflows/` - GitHub Actions workflows
- `.gitignore` - Git ignore rules

## Deployment Files

### Required for Deployment
- `Dockerfile` - Container definition
- `.github/workflows/deploy-cloud-run.yml` - CI/CD pipeline
- `backend/main.py` - Backend application
- `frontend/src/` - Frontend source code
- `backend/requirements.txt` - Python dependencies
- `frontend/package.json` - Node dependencies

### Optional for Deployment
- `cloudbuild.yaml` - Alternative deployment method
- `setup.sh` / `setup.bat` - Local development only
- `docs/` - Documentation (not needed for deployment)

## File Sizes

### Expected Sizes
- Source code: ~50-100 KB
- Dependencies: ~200-300 MB (node_modules + venv)
- Docker image: ~500 MB - 1 GB
- Built frontend: ~1-5 MB

### Optimization
- Use .dockerignore to reduce image size
- Minimize dependencies
- Optimize images
- Use production builds

## Maintenance

### Regular Updates
- Update dependencies regularly
- Check for security vulnerabilities
- Update documentation
- Review and optimize code

### File Organization
- Keep files organized by purpose
- Use consistent naming conventions
- Document complex code
- Maintain clean directory structure

