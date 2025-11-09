# Development Guide

## Local Development Setup

### Prerequisites

- **Python 3.11+**: [Download Python](https://www.python.org/downloads/)
- **Node.js 18+**: [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js
- **Git**: [Download Git](https://git-scm.com/)

### Quick Setup

#### Using Setup Scripts

**Unix/Mac:**
```bash
./setup.sh
```

**Windows:**
```bash
setup.bat
```

#### Manual Setup

**1. Backend Setup**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**2. Frontend Setup**
```bash
cd frontend
npm install
```

## Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate  # On Windows: venv\Scripts\activate
python main.py
```
Backend will run on `http://localhost:8080`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
Frontend will run on `http://localhost:3000`

### Production Build

**Build Frontend:**
```bash
cd frontend
npm run build
```

**Run Production Build:**
```bash
cd backend
# Make sure frontend/build is copied to backend/../static
python main.py
```

## Project Structure

### Backend Structure
```
backend/
├── main.py              # FastAPI application
├── requirements.txt     # Python dependencies
└── Dockerfile          # Backend Dockerfile (optional)
```

### Frontend Structure
```
frontend/
├── public/
│   └── index.html      # HTML template
├── src/
│   ├── App.js          # Main React component
│   ├── App.css         # Component styles
│   ├── index.js        # React entry point
│   └── index.css       # Global styles
└── package.json        # Node dependencies
```

## Code Organization

### React Components

The main App component (`frontend/src/App.js`) contains:
- Navigation bar
- Landing page (Home section)
- Education section
- Projects section
- Skills section
- Contact section
- Footer

### Styling

- **App.css**: Component-specific styles
- **index.css**: Global styles
- Responsive design using CSS media queries
- Mobile-first approach

### Backend API

- **Health Check**: `GET /api/health`
- **Static File Serving**: Serves React build in production
- **CORS**: Configured for frontend communication

## Development Workflow

### 1. Making Changes

**Frontend Changes:**
1. Edit files in `frontend/src/`
2. Changes automatically reload (hot reload)
3. Test in browser at `http://localhost:3000`

**Backend Changes:**
1. Edit files in `backend/`
2. Restart the server
3. Test API endpoints

### 2. Testing

**Frontend Testing:**
```bash
cd frontend
npm test
```

**Manual Testing:**
- Test all navigation links
- Test responsive design on different screen sizes
- Test form submissions
- Test smooth scrolling

### 3. Building for Production

```bash
# Build React app
cd frontend
npm run build

# Test production build locally
cd ../backend
python main.py
# Visit http://localhost:8080
```

## Customization

### Updating Portfolio Content

**1. Landing Page (Home Section)**
- Edit `hero-title` in `App.js`
- Update `hero-subtitle` and `hero-description`
- Modify button text and actions

**2. Education Section**
- Update education cards in `App.js`
- Add/remove education entries
- Modify education data structure

**3. Projects Section**
- Update project cards in `App.js`
- Add project links (GitHub, live demo)
- Modify technology tags

**4. Skills Section**
- Update skills categories in `App.js`
- Add/remove skills
- Modify skill items

**5. Contact Section**
- Update contact information
- Modify contact form
- Add social media links

### Styling Customization

**Colors:**
- Primary gradient: `#667eea` to `#764ba2`
- Update in `App.css` throughout

**Fonts:**
- Default: System fonts
- Can be changed in `index.css`

**Layout:**
- Modify grid layouts in `App.css`
- Adjust responsive breakpoints

## Best Practices

### Code Quality

1. **Consistent Formatting**: Use consistent code style
2. **Comments**: Add comments for complex logic
3. **Component Structure**: Keep components organized
4. **CSS Organization**: Use meaningful class names

### Performance

1. **Image Optimization**: Optimize images before adding
2. **Code Splitting**: Consider code splitting for large apps
3. **Lazy Loading**: Implement lazy loading for images
4. **Caching**: Leverage browser caching

### Security

1. **Environment Variables**: Use env variables for secrets
2. **Input Validation**: Validate form inputs
3. **CORS**: Restrict CORS in production
4. **HTTPS**: Always use HTTPS in production

## Troubleshooting

### Common Issues

**1. Port Already in Use**
```bash
# Kill process on port 8080
lsof -ti:8080 | xargs kill -9

# Or use a different port
PORT=8081 python main.py
```

**2. Module Not Found**
```bash
# Reinstall dependencies
pip install -r requirements.txt
npm install
```

**3. Build Errors**
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

**4. CORS Errors**
- Check CORS settings in `backend/main.py`
- Verify frontend URL in CORS configuration

## Git Workflow

### Branching Strategy
- `main`: Production-ready code
- `develop`: Development branch (optional)
- `feature/*`: Feature branches

### Commit Messages
- Use descriptive commit messages
- Follow conventional commits format
- Reference issue numbers if applicable

### Before Committing
1. Test locally
2. Run linter (if configured)
3. Check for console errors
4. Verify responsive design

## Resources

### Documentation
- [React Documentation](https://react.dev/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Google Cloud Run Documentation](https://cloud.google.com/run/docs)

### Tools
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Postman](https://www.postman.com/) (for API testing)

## Next Steps

1. Add unit tests
2. Set up ESLint and Prettier
3. Add error boundaries
4. Implement loading states
5. Add analytics
6. Set up CI/CD for testing

