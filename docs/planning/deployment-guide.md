# Deployment Guide

## Overview

This guide covers the deployment of the portfolio application to Google Cloud Run using GitHub Actions.

## Prerequisites

1. **Google Cloud Platform Account**
   - Active GCP account
   - Billing enabled
   - Project created

2. **GitHub Account**
   - GitHub repository created
   - Access to repository settings

3. **Local Tools** (for manual deployment)
   - Google Cloud SDK installed
   - Docker installed
   - Git installed

## Setup Steps

### 1. Google Cloud Platform Setup

#### Create a GCP Project
```bash
gcloud projects create YOUR_PROJECT_ID --name="Portfolio Project"
gcloud config set project YOUR_PROJECT_ID
```

#### Enable Required APIs
```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

#### Create Service Account
```bash
gcloud iam service-accounts create github-actions \
  --display-name="GitHub Actions Service Account"
```

#### Grant Permissions
```bash
# Cloud Run Admin
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/run.admin"

# Storage Admin (for Container Registry)
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/storage.admin"

# Service Account User
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
  --member="serviceAccount:github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"
```

#### Create and Download Service Account Key
```bash
gcloud iam service-accounts keys create key.json \
  --iam-account=github-actions@YOUR_PROJECT_ID.iam.gserviceaccount.com
```

### 2. GitHub Setup

#### Add GitHub Secrets
1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret**
4. Add the following secrets:

   - **GCP_PROJECT_ID**: Your Google Cloud Project ID
   - **GCP_SA_KEY**: Contents of the `key.json` file (copy the entire JSON)

#### Connect Repository
```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Deployment Configuration

The deployment is automated via GitHub Actions. The workflow file (`.github/workflows/deploy-cloud-run.yml`) is already configured.

#### Workflow Triggers
- Push to `main` branch
- Manual workflow dispatch

#### Deployment Process
1. Checkout code
2. Set up Google Cloud SDK
3. Build Docker image
4. Push to Container Registry
5. Deploy to Cloud Run

### 4. Manual Deployment (Optional)

If you prefer to deploy manually:

#### Build Docker Image
```bash
docker build -t gcr.io/YOUR_PROJECT_ID/portfolio-api .
```

#### Push to Container Registry
```bash
docker push gcr.io/YOUR_PROJECT_ID/portfolio-api
```

#### Deploy to Cloud Run
```bash
gcloud run deploy portfolio-api \
  --image gcr.io/YOUR_PROJECT_ID/portfolio-api \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10
```

## Cloud Run Configuration

### Current Settings
- **Platform**: Managed
- **Region**: us-central1
- **Port**: 8080
- **Memory**: 512Mi
- **CPU**: 1
- **Min Instances**: 0
- **Max Instances**: 10
- **Authentication**: Unauthenticated (public access)

### Custom Domain (Optional)
```bash
gcloud run domain-mappings create \
  --service portfolio-api \
  --domain your-domain.com \
  --region us-central1
```

## Environment Variables

To set environment variables in Cloud Run:

```bash
gcloud run services update portfolio-api \
  --set-env-vars KEY=VALUE \
  --region us-central1
```

## Monitoring

### View Logs
```bash
gcloud run services logs read portfolio-api --region us-central1
```

### View Service Details
```bash
gcloud run services describe portfolio-api --region us-central1
```

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Dockerfile syntax
   - Verify all files are present
   - Check GitHub Actions logs

2. **Deployment Fails**
   - Verify service account permissions
   - Check GCP project ID
   - Verify API services are enabled

3. **Application Not Loading**
   - Check Cloud Run logs
   - Verify port configuration
   - Check static file paths

4. **CORS Issues**
   - Update CORS settings in `backend/main.py`
   - Verify allowed origins

## Rollback

### Rollback to Previous Revision
```bash
gcloud run services update-traffic portfolio-api \
  --to-revisions REVISION_NAME=100 \
  --region us-central1
```

## Cost Estimation

- **Cloud Run**: Pay per request and compute time
- **Container Registry**: Storage costs for images
- **Networking**: Data transfer costs

Estimated cost for low-traffic portfolio: **$0-5/month**

## Security Best Practices

1. **Restrict CORS**: Update CORS origins in production
2. **Use Environment Variables**: Store secrets in Cloud Run environment variables
3. **Enable Authentication**: Consider adding authentication for admin features
4. **Regular Updates**: Keep dependencies updated
5. **Monitor Logs**: Regularly check for security issues

## Next Steps

1. Set up custom domain
2. Configure CDN for better performance
3. Set up monitoring and alerts
4. Implement backup strategy
5. Set up staging environment

