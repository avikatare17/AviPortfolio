#!/bin/bash

# Setup script for Portfolio Application

echo "🚀 Setting up Portfolio Application..."

# Setup backend
echo "📦 Setting up Python backend..."
cd backend
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
cd ..

# Setup frontend
echo "📦 Setting up React frontend..."
cd frontend
npm install
cd ..

echo "✅ Setup complete!"
echo ""
echo "To start the backend:"
echo "  cd backend && source venv/bin/activate && python main.py"
echo ""
echo "To start the frontend:"
echo "  cd frontend && npm start"

