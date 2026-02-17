const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const users = require('../data/users');
const { v4: uuidv4 } = require('uuid');
const { isNotAuthenticated } = require('../middleware/auth');

/**
 * SIGN UP ROUTES
 */

// Sign Up GET - Display sign-up form
router.get('/signup', isNotAuthenticated, (req, res) => {
  const message = req.query.message || '';
  res.render('signup', { 
    title: 'Sign Up',
    message 
  });
});

// Sign Up POST - Create new account
router.post('/signup', isNotAuthenticated, async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;

  // Validation
  if (!fullname || !email || !password || !confirmPassword) {
    return res.render('signup', {
      title: 'Sign Up',
      message: '⚠️ All fields are required'
    });
  }

  // Check password length
  if (password.length < 6) {
    return res.render('signup', {
      title: 'Sign Up',
      message: '⚠️ Password must be at least 6 characters long'
    });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.render('signup', {
      title: 'Sign Up',
      message: '⚠️ Passwords do not match'
    });
  }

  // Check if email already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.render('signup', {
      title: 'Sign Up',
      message: '⚠️ Email already registered. Please use a different email or try logging in'
    });
  }

  try {
    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create new user
    const newUser = {
      id: uuidv4(),
      fullname: fullname,
      email: email,
      password: hashedPassword,
      googleId: null,
      created_at: new Date(),
      provider: 'local'
    };

    // Add user to database
    users.push(newUser);

    // Set session
    req.session.userId = newUser.id;
    req.session.userEmail = newUser.email;
    req.session.userName = newUser.fullname;

    // Redirect to dashboard
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Sign up error:', error);
    res.render('signup', {
      title: 'Sign Up',
      message: '❌ An error occurred during sign up. Please try again.'
    });
  }
});

/**
 * LOGIN / SIGN IN ROUTES
 */

// Login GET route
router.get('/login', isNotAuthenticated, (req, res) => {
  const message = req.query.message || '';
  res.render('login', { 
    title: 'Sign In',
    message,
    googleClientId: process.env.GOOGLE_CLIENT_ID || ''
  });
});

// Login POST route - Email/Password Sign In
router.post('/login', isNotAuthenticated, async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.render('login', {
      title: 'Sign In',
      message: '⚠️ Please enter both email and password',
      googleClientId: process.env.GOOGLE_CLIENT_ID || ''
    });
  }

  try {
    // Find user by email
    const user = users.find(u => u.email === email);

    if (!user) {
      return res.render('login', {
        title: 'Sign In',
        message: '❌ Email not found. Please sign up first.',
        googleClientId: process.env.GOOGLE_CLIENT_ID || ''
      });
    }

    // Check if user has local password (not OAuth only)
    if (!user.password) {
      return res.render('login', {
        title: 'Sign In',
        message: '❌ This account uses social login. Please use Google Sign In.',
        googleClientId: process.env.GOOGLE_CLIENT_ID || ''
      });
    }

    // Compare passwords
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return res.render('login', {
        title: 'Sign In',
        message: '❌ Invalid email or password',
        googleClientId: process.env.GOOGLE_CLIENT_ID || ''
      });
    }

    // Set session
    req.session.userId = user.id;
    req.session.userEmail = user.email;
    req.session.userName = user.fullname;

    // Redirect to dashboard
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Login error:', error);
    res.render('login', {
      title: 'Sign In',
      message: '❌ An error occurred during login. Please try again.',
      googleClientId: process.env.GOOGLE_CLIENT_ID || ''
    });
  }
});

/**
 * GOOGLE OAUTH ROUTES
 */

// Google OAuth Callback - Handle Google Sign In
router.post('/google-signin', async (req, res) => {
  try {
    const { email, name, googleId } = req.body;

    if (!email || !name || !googleId) {
      return res.json({
        success: false,
        message: 'Missing required information from Google'
      });
    }

    // Find or create user
    let user = users.find(u => u.googleId === googleId || u.email === email);

    if (!user) {
      // Create new user via Google
      user = {
        id: uuidv4(),
        fullname: name,
        email: email,
        password: null, // No password for OAuth users
        googleId: googleId,
        created_at: new Date(),
        provider: 'google'
      };
      users.push(user);
    } else if (!user.googleId) {
      // Link Google account to existing user
      user.googleId = googleId;
      user.provider = 'both';
    }

    // Set session
    req.session.userId = user.id;
    req.session.userEmail = user.email;
    req.session.userName = user.fullname;

    res.json({
      success: true,
      redirect: '/dashboard'
    });
  } catch (error) {
    console.error('Google sign-in error:', error);
    res.json({
      success: false,
      message: 'An error occurred during Google sign in'
    });
  }
});

/**
 * LOGOUT ROUTE
 */

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send('Error logging out');
    }
    res.redirect('/auth/login?message=You have been logged out successfully');
  });
});

module.exports = router;
