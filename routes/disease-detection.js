const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { isAuthenticated } = require('../middleware/auth');
const diseasesDatabase = require('../data/diseases');
const treatments = require('../data/treatments');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

// Mock AI prediction service (will be replaced with real FastAPI later)
const mockAIPrediction = async (imagePath) => {
  // Simulate AI model predictions
  // In production, this will call the Python FastAPI service
  
  const predictions = [
    {
      crop: 'tomato',
      disease: 'Early Blight',
      confidence: 0.92,
      severity: 'high',
      affected_area: 35
    },
    {
      crop: 'tomato',
      disease: 'Late Blight',
      confidence: 0.78,
      severity: 'critical',
      affected_area: 45
    },
    {
      crop: 'potato',
      disease: 'Early Blight',
      confidence: 0.85,
      severity: 'high',
      affected_area: 28
    },
    {
      crop: 'rice',
      disease: 'Blast Disease',
      confidence: 0.88,
      severity: 'critical',
      affected_area: 52
    },
    {
      crop: 'wheat',
      disease: 'Rust',
      confidence: 0.91,
      severity: 'high',
      affected_area: 40
    }
  ];
  
  // Return a random prediction
  return predictions[Math.floor(Math.random() * predictions.length)];
};

// Image upload and disease detection
router.post('/predict', isAuthenticated, upload.single('cropImage'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No image file provided'
      });
    }

    // Validate file size and type
    if (req.file.size > 10 * 1024 * 1024) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({
        success: false,
        message: 'Image file too large. Maximum size is 10MB'
      });
    }

    const imagePath = `/uploads/${req.file.filename}`;
    const fullPath = req.file.path;

    // Image optimization skipped for Phase 1 (can add Sharp in Phase 2)

    // Call AI prediction service (mock for now)
    const prediction = await mockAIPrediction(fullPath);

    // Get disease details from database
    const cropDiseases = diseasesDatabase[prediction.crop] || [];
    const diseaseInfo = cropDiseases.find(d => 
      d.disease_name.toLowerCase() === prediction.disease.toLowerCase()
    ) || {};

    // Prepare response with comprehensive information
    const result = {
      success: true,
      prediction: {
        image_url: imagePath,
        crop: prediction.crop,
        disease_name: prediction.disease,
        confidence_score: (prediction.confidence * 100).toFixed(2) + '%',
        severity_level: prediction.severity,
        affected_area_percentage: prediction.affected_area,
        timestamp: new Date()
      },
      disease_details: {
        scientific_name: diseaseInfo.scientific_name || 'Unknown',
        symptoms: diseaseInfo.symptoms || [],
        chemical_treatment: diseaseInfo.chemical_treatment || [],
        organic_treatment: diseaseInfo.organic_treatment || [],
        preventive_measures: diseaseInfo.preventive_measures || [],
        fertilizer_suggestions: diseaseInfo.fertilizer_suggestions || [],
        treatment_duration: diseaseInfo.treatment_duration || 'Consult expert'
      }
    };

    // Save to prediction history (in session for now)
    if (!req.session.predictions) {
      req.session.predictions = [];
    }
    req.session.predictions.push(result.prediction);

    res.json(result);

  } catch (error) {
    console.error('Prediction error:', error);
    
    // Clean up uploaded file on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({
      success: false,
      message: 'Error processing image. Please try again.',
      error: error.message
    });
  }
});

// Get prediction history
router.get('/history', isAuthenticated, (req, res) => {
  const history = req.session.predictions || [];
  res.json({
    success: true,
    history: history
  });
});

// Get disease information for a specific crop
router.get('/crop/:crop', (req, res) => {
  const crop = req.params.crop.toLowerCase();
  const diseases = diseasesDatabase[crop] || [];

  if (diseases.length === 0) {
    return res.status(404).json({
      success: false,
      message: `No disease information found for crop: ${crop}`,
      available_crops: Object.keys(diseasesDatabase)
    });
  }

  res.json({
    success: true,
    crop: crop,
    diseases: diseases.map(d => ({
      disease_name: d.disease_name,
      scientific_name: d.scientific_name,
      severity_level: d.severity_level,
      symptoms_count: d.symptoms.length,
      treatment_options: {
        chemical: d.chemical_treatment.length,
        organic: d.organic_treatment.length
      }
    }))
  });
});

// Get detailed disease information
router.get('/disease/:crop/:disease', (req, res) => {
  const crop = req.params.crop.toLowerCase();
  const diseaseName = req.params.disease.toLowerCase();

  const cropDiseases = diseasesDatabase[crop] || [];
  const diseaseInfo = cropDiseases.find(d => 
    d.disease_name.toLowerCase() === diseaseName
  );

  if (!diseaseInfo) {
    return res.status(404).json({
      success: false,
      message: `Disease not found: ${diseaseName} in crop: ${crop}`
    });
  }

  res.json({
    success: true,
    disease: diseaseInfo
  });
});

// Get list of available crops
router.get('/crops', (req, res) => {
  const crops = Object.keys(diseasesDatabase).map(cropName => ({
    name: cropName,
    diseases_count: diseasesDatabase[cropName].length
  }));

  res.json({
    success: true,
    crops: crops,
    total_crops: crops.length
  });
});

// ==================== TREATMENT RECOMMENDATIONS ENDPOINTS ====================

// Get treatment for a specific disease
router.get('/treatment/:crop/:disease', (req, res) => {
  const crop = req.params.crop.toLowerCase();
  const disease = req.params.disease.replace(/-/g, ' ').toLowerCase();

  if (!treatments[crop]) {
    return res.status(404).json({
      success: false,
      message: `Crop not found: ${crop}`,
      available_crops: Object.keys(treatments)
    });
  }

  // Find disease (case-insensitive)
  const diseaseKey = Object.keys(treatments[crop]).find(d => 
    d.toLowerCase() === disease
  );

  if (!diseaseKey) {
    return res.status(404).json({
      success: false,
      message: `Disease not found: ${disease}`,
      available_diseases: Object.keys(treatments[crop])
    });
  }

  res.json({
    success: true,
    crop: crop,
    disease: diseaseKey,
    treatment: treatments[crop][diseaseKey],
    timestamp: new Date()
  });
});

// Get all treatments for a crop
router.get('/treatments/:crop', (req, res) => {
  const crop = req.params.crop.toLowerCase();

  if (!treatments[crop]) {
    return res.status(404).json({
      success: false,
      message: `Crop not found: ${crop}`,
      available_crops: Object.keys(treatments)
    });
  }

  const cropTreatments = treatments[crop];
  const summary = Object.keys(cropTreatments).map(disease => ({
    disease: disease,
    severity: cropTreatments[disease].severity,
    estimated_recovery: cropTreatments[disease].estimated_recovery,
    yield_impact: cropTreatments[disease].impact_on_yield
  }));

  res.json({
    success: true,
    crop: crop,
    total_diseases: Object.keys(cropTreatments).length,
    diseases: summary,
    timestamp: new Date()
  });
});

// Get all available crops and their diseases for quick reference
router.get('/all-treatments', (req, res) => {
  const allCrops = Object.keys(treatments).map(crop => ({
    crop: crop,
    diseases: Object.keys(treatments[crop]).length,
    disease_list: Object.keys(treatments[crop])
  }));

  res.json({
    success: true,
    total_crops: allCrops.length,
    crops: allCrops,
    total_diseases: allCrops.reduce((sum, c) => sum + c.diseases, 0),
    timestamp: new Date()
  });
});

// Search treatments by keyword
router.get('/search/treatment/:keyword', (req, res) => {
  const keyword = req.params.keyword.toLowerCase();
  const results = [];

  for (const crop in treatments) {
    for (const disease in treatments[crop]) {
      if (disease.toLowerCase().includes(keyword) || 
          crop.toLowerCase().includes(keyword)) {
        results.push({
          crop: crop,
          disease: disease,
          severity: treatments[crop][disease].severity,
          symptoms: treatments[crop][disease].symptoms.substring(0, 100) + '...'
        });
      }
    }
  }

  res.json({
    success: true,
    keyword: keyword,
    results_found: results.length,
    results: results,
    timestamp: new Date()
  });
});

module.exports = router;
