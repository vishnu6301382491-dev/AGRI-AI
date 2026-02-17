// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.redirect('/auth/login');
  }
};

// Middleware to prevent authenticated users from accessing login page
const isNotAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    res.redirect('/dashboard');
  } else {
    next();
  }
};

// Role-based access control middleware
const requireRole = (...roles) => {
  return (req, res, next) => {
    if (!req.session || !req.session.userId) {
      return res.redirect('/auth/login');
    }
    
    const userRole = req.session.userRole || 'farmer';
    
    if (roles.includes(userRole)) {
      next();
    } else {
      res.status(403).render('error', {
        title: 'Access Denied',
        message: 'You do not have permission to access this resource',
        error: { status: 403 }
      });
    }
  };
};

// Admin-only middleware
const requireAdmin = (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return res.redirect('/auth/login');
  }
  
  const userRole = req.session.userRole || 'farmer';
  if (userRole === 'admin') {
    next();
  } else {
    res.status(403).render('error', {
      title: 'Admin Access Required',
      message: 'Only administrators can access this resource',
      error: { status: 403 }
    });
  }
};

// Expert-only middleware
const requireExpert = (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return res.redirect('/auth/login');
  }
  
  const userRole = req.session.userRole || 'farmer';
  if (userRole === 'expert' || userRole === 'admin') {
    next();
  } else {
    res.status(403).render('error', {
      title: 'Expert Access Required',
      message: 'Only experts can access this resource',
      error: { status: 403 }
    });
  }
};

module.exports = {
  isAuthenticated,
  isNotAuthenticated,
  requireRole,
  requireAdmin,
  requireExpert
};
