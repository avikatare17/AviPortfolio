# Portfolio Application

A full-stack application with a Python FastAPI backend and React frontend, designed to be deployed to Google Cloud Run.

## Project Structure

```
.
├── backend/          # Python FastAPI backend
│   ├── main.py      # Main API application
│   └── requirements.txt
├── frontend/         # React frontend
│   ├── src/         # React source code
│   ├── public/      # Public assets
│   └── package.json
├── .github/          # GitHub Actions workflows
│   └── workflows/
│       └── deploy-cloud-run.yml
├── Dockerfile        # Docker configuration for Cloud Run
└── README.md

```

## Features

- **Python FastAPI Backend**: RESTful API with CRUD operations
- **React Frontend**: Modern single-page application
- **Google Cloud Run Deployment**: Automated deployment via GitHub Actions
- **Docker**: Containerized application for easy deployment

## Local Development

### Prerequisites

- Python 3.11+
- Node.js 18+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the backend server:
   ```bash
   python main.py
   ```

   The API will be available at `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`

4. Set the API URL (optional):
   Create a `.env` file in the frontend directory:
   ```
   REACT_APP_API_URL=http://localhost:8080
   ```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/items` - Get all items
- `POST /api/items` - Create a new item
- `GET /api/items/{item_id}` - Get a specific item
- `DELETE /api/items/{item_id}` - Delete an item

## Deployment to Google Cloud Run

### Prerequisites

1. Google Cloud Project with Cloud Run API enabled
2. GitHub repository
3. Google Cloud Service Account with appropriate permissions

### Setup Instructions

1. **Create a Google Cloud Service Account**:
   ```bash
   gcloud iam service-accounts create github-actions \
     --display-name="GitHub Actions Service Account"
   ```

2. **Grant necessary permissions**:
   ```bash
   gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
     --member="serviceAccount:github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
     --role="roles/run.admin"
   
   gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
     --member="serviceAccount:github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
     --role="roles/storage.admin"
   
   gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
     --member="serviceAccount:github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
     --role="roles/iam.serviceAccountUser"
   ```

3. **Create and download service account key**:
   ```bash
   gcloud iam service-accounts keys create key.json \
     --iam-account=github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com
   ```

4. **Add GitHub Secrets**:
   - Go to your GitHub repository
   - Navigate to Settings > Secrets and variables > Actions
   - Add the following secrets:
     - `GCP_PROJECT_ID`: Your Google Cloud Project ID
     - `GCP_SA_KEY`: Contents of the `key.json` file (base64 encoded or as-is)

5. **Enable required APIs**:
   ```bash
   gcloud services enable cloudbuild.googleapis.com
   gcloud services enable run.googleapis.com
   gcloud services enable containerregistry.googleapis.com
   ```

6. **Connect to GitHub**:
   ```bash
   # Add your GitHub repository as remote
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```
   
   The workflow will automatically deploy to Cloud Run when you push to the `main` branch.

### Manual Deployment

If you prefer to deploy manually:

1. **Build the Docker image**:
   ```bash
   docker build -t gcr.io/YOUR_PROJECT_ID/portfolio-api .
   ```

2. **Push to Google Container Registry**:
   ```bash
   docker push gcr.io/YOUR_PROJECT_ID/portfolio-api
   ```

3. **Deploy to Cloud Run**:
   ```bash
   gcloud run deploy portfolio-api \
     --image gcr.io/YOUR_PROJECT_ID/portfolio-api \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --port 8080
   ```

## Environment Variables

### Backend
- `PORT`: Port number for the API (default: 8080)

### Frontend
- `REACT_APP_API_URL`: API URL (default: http://localhost:8080)

## Production Considerations

1. **CORS Configuration**: Update the CORS origins in `backend/main.py` to restrict access to your domain
2. **Database**: Replace in-memory storage with a proper database (PostgreSQL, MongoDB, etc.)
3. **Authentication**: Add authentication/authorization for production use
4. **Environment Variables**: Use Cloud Run's environment variables for configuration
5. **Logging**: Implement proper logging and monitoring
6. **SSL/TLS**: Cloud Run provides SSL/TLS by default

## License

MIT

