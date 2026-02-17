// Agriculture data
const agricultureData = {
  cropDiseases: [
    {
      id: 1,
      name: 'Rice Blast',
      affectedCrop: 'Rice',
      symptoms: 'Brown or grayish spots on leaves',
      treatment: 'Use fungicides like Tricyclazole or Mancozeb',
      prevention: 'Use disease-resistant varieties'
    },
    {
      id: 2,
      name: 'Wheat Rust',
      affectedCrop: 'Wheat',
      symptoms: 'Orange or brown powder on leaf surfaces',
      treatment: 'Apply sulfur dust or fungicides',
      prevention: 'Maintain proper crop spacing'
    },
    {
      id: 3,
      name: 'Potato Late Blight',
      affectedCrop: 'Potato',
      symptoms: 'Water-soaked lesions, white fungal growth on undersides',
      treatment: 'Use Mancozeb or Metalaxyl',
      prevention: 'Avoid overhead irrigation'
    },
    {
      id: 4,
      name: 'Corn Leaf Blight',
      affectedCrop: 'Corn',
      symptoms: 'Long, narrow lesions on leaves',
      treatment: 'Apply Propiconazole fungicide',
      prevention: 'Rotate crops yearly'
    },
    {
      id: 5,
      name: 'Cotton Wilt',
      affectedCrop: 'Cotton',
      symptoms: 'Yellowing of leaves and wilting',
      treatment: 'Remove affected plants, soil treatment',
      prevention: 'Use certified seeds'
    }
  ],
  
  foodCrops: [
    { id: 1, name: 'Rice', season: 'Monsoon/Winter', waterRequired: '1200mm', yieldPerHectare: '4-6 tons' },
    { id: 2, name: 'Wheat', season: 'Winter', waterRequired: '400-500mm', yieldPerHectare: '4-5 tons' },
    { id: 3, name: 'Corn', season: 'Summer', waterRequired: '500-800mm', yieldPerHectare: '5-7 tons' },
    { id: 4, name: 'Potato', season: 'Winter', waterRequired: '300-500mm', yieldPerHectare: '20-25 tons' },
    { id: 5, name: 'Pulses (Lentils)', season: 'Winter', waterRequired: '300-400mm', yieldPerHectare: '2-3 tons' },
    { id: 6, name: 'Soybeans', season: 'Summer', waterRequired: '400-600mm', yieldPerHectare: '2-3 tons' },
    { id: 7, name: 'Chickpeas', season: 'Winter', waterRequired: '300-400mm', yieldPerHectare: '1.5-2.5 tons' },
    { id: 8, name: 'Sugarcane', season: 'Year-round', waterRequired: '1500mm', yieldPerHectare: '60-80 tons' }
  ],
  
  cropPrices: [
    { id: 1, crop: 'Rice', price: '$350/ton', market: 'International', lastUpdated: '2026-02-10' },
    { id: 2, crop: 'Wheat', price: '$300/ton', market: 'International', lastUpdated: '2026-02-10' },
    { id: 3, crop: 'Corn', price: '$280/ton', market: 'International', lastUpdated: '2026-02-10' },
    { id: 4, crop: 'Potato', price: '$400/ton', market: 'Local', lastUpdated: '2026-02-10' },
    { id: 5, crop: 'Soybeans', price: '$600/ton', market: 'International', lastUpdated: '2026-02-10' },
    { id: 6, crop: 'Cotton', price: '$2500/ton', market: 'International', lastUpdated: '2026-02-10' },
    { id: 7, crop: 'Sugarcane', price: '$100/ton', market: 'Local', lastUpdated: '2026-02-10' },
    { id: 8, crop: 'Lentils', price: '$700/ton', market: 'International', lastUpdated: '2026-02-10' }
  ],
  
  agriculturalSeasons: [
    {
      name: 'Summer (Kharif)',
      months: 'June - September',
      characteristics: 'High rainfall, suitable for water-loving crops',
      crops: ['Rice', 'Cotton', 'Corn', 'Soybeans'],
      temperature: '25-30°C'
    },
    {
      name: 'Winter (Rabi)',
      months: 'October - March',
      characteristics: 'Low rainfall, cool weather, suitable for winter crops',
      crops: ['Wheat', 'Potato', 'Pulses', 'Chickpeas'],
      temperature: '10-20°C'
    },
    {
      name: 'Spring (Zaid)',
      months: 'March - June',
      characteristics: 'Transitional season, irrigation-dependent',
      crops: ['Vegetables', 'Fruits', 'Melons'],
      temperature: '20-28°C'
    }
  ],
  
  aiTools: [
    {
      name: 'Crop Disease Detector',
      description: 'AI-powered image recognition to identify crop diseases',
      accuracy: '95%',
      usageArea: 'Field disease management'
    },
    {
      name: 'Weather Prediction Model',
      description: 'Machine learning model for accurate weather forecasting',
      accuracy: '92%',
      usageArea: 'Season planning and crop scheduling'
    },
    {
      name: 'Soil Health Analyzer',
      description: 'AI system to analyze soil composition and nutrient levels',
      accuracy: '98%',
      usageArea: 'Soil management and fertilizer recommendation'
    },
    {
      name: 'Yield Predictor',
      description: 'Deep learning model to predict crop yield',
      accuracy: '94%',
      usageArea: 'Production forecasting'
    },
    {
      name: 'Pest Detection System',
      description: 'Computer vision to detect and classify agricultural pests',
      accuracy: '93%',
      usageArea: 'IPM (Integrated Pest Management)'
    }
  ],
  
  researchTopics: [
    {
      topic: 'Climate-Smart Agriculture',
      description: 'Developing climate-resilient crop varieties and farming practices',
      status: 'Ongoing',
      institution: 'International Rice Research Institute'
    },
    {
      topic: 'Precision Farming using IoT',
      description: 'Real-time monitoring of crops using sensors and data analytics',
      status: 'Active',
      institution: 'Agricultural Technology Center'
    },
    {
      topic: 'Gene Editing for Higher Nutrition',
      description: 'CRISPR technology to enhance nutritional content of crops',
      status: 'Development',
      institution: 'International Crop Research Institute'
    },
    {
      topic: 'Sustainable Pest Management',
      description: 'Biological pest control and reduced chemical dependency',
      status: 'Ongoing',
      institution: 'National Agricultural Research Center'
    },
    {
      topic: 'Vertical Farming Innovation',
      description: 'Urban agriculture using controlled environment systems',
      status: 'Active',
      institution: 'Innovation Agriculture Lab'
    },
    {
      topic: 'Water-Efficient Irrigation',
      description: 'Smart irrigation systems using AI optimization',
      status: 'Deployment Phase',
      institution: 'Water Management Institute'
    }
  ]
};

module.exports = agricultureData;
