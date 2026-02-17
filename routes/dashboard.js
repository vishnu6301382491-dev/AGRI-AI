const express = require('express');
const router = express.Router();
const agricultureData = require('../data/crops');
const treatments = require('../data/treatments');
const https = require('https');

// Initialize user analytics data (in production, use database)
const userAnalytics = {};

// Helper to get user analytics
function getUserAnalytics(userId) {
  if (!userAnalytics[userId]) {
    userAnalytics[userId] = {
      userId: userId,
      predictions: [],
      total_predictions: 0,
      total_diseases_detected: {},
      severity_distribution: {
        low: 0,
        medium: 0,
        high: 0,
        critical: 0
      },
      confidence_average: 0,
      crops_analyzed: new Set(),
      last_prediction: null,
      joined_date: new Date()
    };
  }
  return userAnalytics[userId];
}

// Main dashboard route with analytics
router.get('/', (req, res) => {
  const analytics = getUserAnalytics(req.session.userId);
  
  // Calculate summary statistics
  const summary = {
    total_predictions: analytics.total_predictions,
    unique_crops: analytics.crops_analyzed.size,
    unique_diseases: Object.keys(analytics.total_diseases_detected).length,
    avg_confidence: analytics.predictions.length > 0 
      ? (analytics.predictions.reduce((sum, p) => sum + p.confidence, 0) / analytics.predictions.length * 100).toFixed(2)
      : 0,
    severity_distribution: analytics.severity_distribution,
    last_prediction_date: analytics.last_prediction ? new Date(analytics.last_prediction).toLocaleDateString() : 'No predictions yet'
  };

  res.render('dashboard', {
    title: 'Dashboard',
    userName: req.session.userName,
    userEmail: req.session.userEmail,
    user_id: req.session.userId,
    summary: summary,
    analytics: analytics
  });
});

// Analytics API endpoint
router.get('/api/analytics', (req, res) => {
  const analytics = getUserAnalytics(req.session.userId);
  
  res.json({
    success: true,
    analytics: {
      total_predictions: analytics.total_predictions,
      unique_crops: analytics.crops_analyzed.size,
      unique_diseases: Object.keys(analytics.total_diseases_detected).length,
      severity_distribution: analytics.severity_distribution,
      top_diseases: Object.entries(analytics.total_diseases_detected)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([disease, count]) => ({ disease, count })),
      predictions_trend: analytics.predictions.slice(-7).map(p => ({
        date: new Date(p.timestamp).toLocaleDateString(),
        count: 1
      })),
      average_confidence: analytics.predictions.length > 0 
        ? (analytics.predictions.reduce((sum, p) => sum + p.confidence, 0) / analytics.predictions.length * 100).toFixed(2)
        : 0
    }
  });
});

// Prediction History
router.get('/predictions', (req, res) => {
  const analytics = getUserAnalytics(req.session.userId);
  
  res.render('prediction-history', {
    title: 'Prediction History',
    userName: req.session.userName,
    predictions: analytics.predictions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)),
    total_predictions: analytics.total_predictions
  });
});

// Prediction History API
router.get('/api/predictions', (req, res) => {
  const analytics = getUserAnalytics(req.session.userId);
  
  res.json({
    success: true,
    total: analytics.total_predictions,
    predictions: analytics.predictions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  });
});

// Disease Detection with full tracking
router.get('/disease-detection', (req, res) => {
  res.render('disease-detection', {
    title: 'AI Disease Detection',
    userName: req.session.userName,
    userId: req.session.userId
  });
});

// API endpoint to save prediction
router.post('/api/save-prediction', (req, res) => {
  const { crop, disease, confidence, severity, affected_area, image_url, symptoms } = req.body;
  const analytics = getUserAnalytics(req.session.userId);

  const prediction = {
    id: `pred_${Date.now()}`,
    crop: crop,
    disease: disease,
    confidence: confidence,
    severity: severity,
    affected_area: affected_area,
    image_url: image_url,
    symptoms: symptoms,
    timestamp: new Date(),
    status: 'completed'
  };

  analytics.predictions.push(prediction);
  analytics.total_predictions++;
  analytics.last_prediction = new Date();
  analytics.crops_analyzed.add(crop);

  // Update disease count
  if (!analytics.total_diseases_detected[disease]) {
    analytics.total_diseases_detected[disease] = 0;
  }
  analytics.total_diseases_detected[disease]++;

  // Update severity distribution
  analytics.severity_distribution[severity]++;

  res.json({
    success: true,
    message: 'Prediction saved successfully',
    prediction_id: prediction.id
  });
});

// Get stats for a specific crop
router.get('/api/crop-stats/:crop', (req, res) => {
  const crop = req.params.crop.toLowerCase();
  const analytics = getUserAnalytics(req.session.userId);
  
  const cropPredictions = analytics.predictions.filter(p => p.crop === crop);
  const avgConfidence = cropPredictions.length > 0
    ? (cropPredictions.reduce((sum, p) => sum + p.confidence, 0) / cropPredictions.length * 100).toFixed(2)
    : 0;

  const diseases = [...new Set(cropPredictions.map(p => p.disease))];

  res.json({
    success: true,
    crop: crop,
    total_predictions: cropPredictions.length,
    diseases_detected: diseases,
    average_confidence: avgConfidence,
    severity_breakdown: {
      low: cropPredictions.filter(p => p.severity === 'low').length,
      medium: cropPredictions.filter(p => p.severity === 'medium').length,
      high: cropPredictions.filter(p => p.severity === 'high').length,
      critical: cropPredictions.filter(p => p.severity === 'critical').length
    }
  });
});

// Crop Diseases route
router.get('/crop-diseases', (req, res) => {
  res.render('crop-diseases', {
    title: 'Crop Diseases',
    diseases: agricultureData.cropDiseases,
    userName: req.session.userName,
    treatments: treatments
  });
});

// Food Crops route
router.get('/food-crops', (req, res) => {
  res.render('food-crops', {
    title: 'Food Crops',
    crops: agricultureData.foodCrops,
    userName: req.session.userName
  });
});

// Crop Prices route
router.get('/crop-prices', (req, res) => {
  res.render('crop-prices', {
    title: 'Crop Prices',
    prices: agricultureData.cropPrices,
    userName: req.session.userName
  });
});

// Agricultural Seasons route
router.get('/agricultural-seasons', (req, res) => {
  res.render('agricultural-seasons', {
    title: 'Agricultural Seasons',
    seasons: agricultureData.agriculturalSeasons,
    userName: req.session.userName
  });
});

// AI Tools route
router.get('/ai-tools', (req, res) => {
  res.render('ai-tools', {
    title: 'Agriculture AI Tools',
    tools: agricultureData.aiTools,
    userName: req.session.userName
  });
});

// Research Topics route
router.get('/research-topics', (req, res) => {
  res.render('research-topics', {
    title: 'AI Research Topics',
    topics: agricultureData.researchTopics,
    userName: req.session.userName
  });
});

// Crop Search route with automatic Google search
router.get('/crop-search', async (req, res) => {
  const searchQuery = req.query.q;
  let localResults = [];
  let googleResults = [];

  if (searchQuery) {
    // Search in local data
    const query = searchQuery.toLowerCase();
    localResults = agricultureData.cropPrices.filter(item =>
      item.crop.toLowerCase().includes(query)
    );

    // If no local results, fetch from Google
    if (localResults.length === 0) {
      try {
        googleResults = await searchGoogle(searchQuery + ' crop price in India');
      } catch (error) {
        console.error('Google search error:', error);
      }
    }
  }

  res.render('crop-search', {
    title: 'Crop Price Search',
    userName: req.session.userName,
    userEmail: req.session.userEmail,
    searchQuery: searchQuery || '',
    localResults: localResults,
    googleResults: googleResults
  });
});

// Helper function to search Google using Custom Search API
async function searchGoogle(query) {
  return new Promise((resolve, reject) => {
    // Using Google Custom Search JSON API
    const apiKey = process.env.GOOGLE_API_KEY || 'AIzaSyBqQvNzj0YcJQVPSQYd4fSF3tMZzg2FcY4';
    const cx = process.env.GOOGLE_CX || '017576662512468239146:omuauf_lfve';
    
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}`;

    https.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.items) {
            const formattedResults = result.items.slice(0, 5).map(item => ({
              title: item.title,
              snippet: item.snippet,
              link: item.link,
              displayLink: item.displayLink
            }));
            resolve(formattedResults);
          } else {
            resolve([]);
          }
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

module.exports = router;
