@echo off
REM Setup script for Portfolio Application (Windows)

echo 🚀 Setting up Portfolio Application...

REM Setup backend
echo 📦 Setting up Python backend...
cd backend
python -m venv venv
call venv\Scripts\activate.bat
pip install --upgrade pip
pip install -r requirements.txt
cd ..

REM Setup frontend
echo 📦 Setting up React frontend...
cd frontend
call npm install
cd ..

echo ✅ Setup complete!
echo.
echo To start the backend:
echo   cd backend ^&^& venv\Scripts\activate ^&^& python main.py
echo.
echo To start the frontend:
echo   cd frontend ^&^& npm start

