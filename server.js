// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

// Import routes and middleware
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const diseaseDetectionRoutes = require('./routes/disease-detection');
const { optionalAuth } = require('./middleware/auth');

// Initialize Express app
const app = express();

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/auth', authRoutes);
app.use('/dashboard', optionalAuth, dashboardRoutes);
app.use('/api/disease', diseaseDetectionRoutes);

// Home route - go to dashboard (no auth required)
app.get('/', (req, res) => {
  res.redirect('/dashboard');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 404 handler
app.get('*', (req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('[ERROR]', err);
  
  // Handle multer errors
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      success: false,
      message: 'File too large. Maximum size is 10MB'
    });
  }
  
  if (err.code === 'LIMIT_UNEXPECTED_FILE') {
    return res.status(400).json({
      success: false,
      message: 'Unexpected file in upload'
    });
  }
  
  res.status(500).render('error', { 
    title: 'Server Error', 
    error: { status: 500, message: err.message }
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n✓ AGRI AI - Agriculture Information Website`);
  console.log(`✓ Running on http://localhost:${PORT}`);
  console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('\nPhase 1 Status:');
  console.log('  ✓ Authentication System');
  console.log('  ✓ Image Upload API');
  console.log('  ✓ Disease Detection API');
  console.log('  ✓ Disease Database');
  console.log('\nPress Ctrl+C to stop the server\n');
});
