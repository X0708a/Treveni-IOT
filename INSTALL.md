# 🚀 Digital Farm Management Portal - Installation Guide

## Prerequisites
- Node.js 16.0 or higher
- npm 8.0 or higher
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

## Quick Installation

### Option 1: Automatic Setup
```bash
chmod +x setup.sh
./setup.sh
```

### Option 2: Manual Installation
```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Available Scripts

### Development
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

### Production Deployment
```bash
# Build for production
npm run build

# Serve with static server
npm install -g serve
serve -s build -l 3000
```

## Docker Deployment
```bash
# Build Docker image
docker build -t farm-portal .

# Run container
docker run -p 80:80 farm-portal
```

## Application Structure

### Main Applications:
1. **Landing Page** (`/`) - Portal homepage with application selector
2. **Director Dashboard** (`/director`) - State-level management
3. **District Dashboard** (`/district`) - District operations
4. **Vet Mobile App** (`/vet`) - Mobile veterinarian interface
5. **Farmer Assistant** (`/farmer`) - Voice-enabled farmer app

### Key Features:
- ✅ React 18 + TypeScript
- ✅ Tailwind CSS + ShadCN UI
- ✅ Three.js 3D backgrounds
- ✅ Framer Motion animations
- ✅ Progressive Web App (PWA)
- ✅ Responsive design
- ✅ Voice commands (Hindi/English)
- ✅ Real-time dashboards
- ✅ Export capabilities

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Troubleshooting

### Common Issues:
1. **Node version error**: Ensure Node.js 16+ is installed
2. **Port 3000 in use**: Use `npm start -- --port 3001`
3. **Build errors**: Clear cache with `npm start -- --reset-cache`

### Performance Optimization:
- Enable gzip compression on your server
- Use CDN for static assets
- Enable service worker for caching

## Smart India Hackathon 2024
This solution addresses digital farm management and biosecurity challenges with modern web technologies.

**Built with ❤️ by FarmGuard Team**