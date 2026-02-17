/**
 * Disease Database
 * Contains comprehensive information about crop diseases, symptoms, and treatments
 */

const diseasesDatabase = {
  tomato: [
    {
      id: 'tomato_01',
      crop_name: 'Tomato',
      disease_name: 'Early Blight',
      scientific_name: 'Alternaria solani',
      symptoms: [
        'Brown spots with concentric rings on lower leaves',
        'Spots start small and enlarge over time',
        'Yellow halo around spots',
        'Leaves eventually drop from plant',
        'Affects fruit stems and petioles'
      ],
      severity_level: 'high',
      chemical_treatment: [
        'Mancozeb 75% WP (@2.5kg/ha)',
        'Chlorothalonil 75% WP (@2kg/ha)',
        'Copper Oxychloride 50% WP (@2.5kg/ha)',
        'Spray every 10-14 days starting when spots appear'
      ],
      organic_treatment: [
        'Bordeaux mixture (1%) spray',
        'Baking soda solution (1 tbsp per gallon water)',
        'Neem oil (3% emulsion)',
        'Bacillus subtilis bioagent',
        'Remove affected leaves manually'
      ],
      preventive_measures: [
        'Use disease-resistant varieties',
        'Maintain proper spacing for air circulation',
        'Water at soil level, avoid foliar wetting',
        'Remove lower leaves (30cm from ground)',
        'Practice crop rotation (3 years)',
        'Sanitize tools with 10% bleach'
      ],
      fertilizer_suggestions: [
        'Increase Potassium (K) - improves disease resistance',
        'Calcium: 1-2 tons gypsum/hectare',
        'Apply Zinc Sulphate 5kg/ha',
        'Micronutrients: Boron, Magnesium'
      ],
      treatment_duration: '14-21 days',
      affected_area_percentage: 0
    },
    {
      id: 'tomato_02',
      crop_name: 'Tomato',
      disease_name: 'Late Blight',
      scientific_name: 'Phytophthora infestans',
      symptoms: [
        'Water-soaked spots on leaves (initially light green)',
        'Spots become brownish with white fungal growth underneath',
        'Stems turn dark and girdle',
        'Fruits develop hard spots with concentric rings',
        'Rapid defoliation in wet conditions'
      ],
      severity_level: 'critical',
      chemical_treatment: [
        'Metalaxyl-M 4% + Mancozeb 64% (@2.5kg/ha)',
        'Cymoxanil 8% + Mancozeb 64%',
        'Propamite 50% EC',
        'Spray every 7-10 days in humid conditions'
      ],
      organic_treatment: [
        'Bordeaux mixture (1%) + sticker',
        'Copper Oxychloride + sulfur',
        'Trichoderma harzianum',
        'Bacillus subtilis',
        'Remove infected plant parts'
      ],
      preventive_measures: [
        'Use resistant varieties (where available)',
        'Avoid overhead irrigation',
        'Improve soil drainage',
        'Ensure proper ventilation',
        'Destroy infected plant debris',
        'Monitor weather - high risk in cool, wet conditions'
      ],
      fertilizer_suggestions: [
        'Balanced NPK (10:26:26)',
        'High Potassium ratio',
        'Calcium spray (0.5%) weekly',
        'Avoid excessive nitrogen'
      ],
      treatment_duration: '21-28 days',
      affected_area_percentage: 0
    },
    {
      id: 'tomato_03',
      crop_name: 'Tomato',
      disease_name: 'Powdery Mildew',
      scientific_name: 'Oidiopsis sicula',
      symptoms: [
        'White powdery coating on leaf surfaces',
        'Affects both upper and lower leaf surfaces',
        'Leaves may curl and shrivel',
        'Fruit may develop white coating',
        'Progresses from lower leaves upward'
      ],
      severity_level: 'medium',
      chemical_treatment: [
        'Sulfur 80% WP (@2kg/ha)',
        'Wettable sulfur dust',
        'Karathane (Dinocap) 48% EC',
        'Spray every 10-14 days'
      ],
      organic_treatment: [
        'Sulfur dusting (50kg/ha)',
        'Potassium bicarbonate (1%)',
        'Neem oil (3%)',
        'Milk spray (1 part milk: 9 parts water)'
      ],
      preventive_measures: [
        'Maintain proper plant spacing',
        'Avoid excessive nitrogen fertilizer',
        'Reduce humidity through ventilation',
        'Prune lower leaves for better air flow',
        'Remove infected leaves immediately'
      ],
      fertilizer_suggestions: [
        'Reduce Nitrogen slightly',
        'Increase Phosphorus and Potassium',
        'Spray Sulfur as fungicide + nutrient'
      ],
      treatment_duration: '10-14 days',
      affected_area_percentage: 0
    }
  ],
  potato: [
    {
      id: 'potato_01',
      crop_name: 'Potato',
      disease_name: 'Late Blight',
      scientific_name: 'Phytophthora infestans',
      symptoms: [
        'Water-soaked spots on leaves (light green initially)',
        'White fungal growth on leaf undersides',
        'Brown spots on stems',
        'Tubers develop brown rot',
        'Rapid spread in cool, humid weather'
      ],
      severity_level: 'critical',
      chemical_treatment: [
        'Metalaxyl-M 4% + Mancozeb 64% (@2-2.5 kg/ha)',
        'Cymoxanil 8% + Mancozeb 64%',
        'Spray every 7-10 days'
      ],
      organic_treatment: [
        'Bordeaux mixture (1%)',
        'Copper Oxychloride',
        'Trichoderma species',
        'Remove infected foliage'
      ],
      preventive_measures: [
        'Use certified disease-free seed potatoes',
        'Ensure good soil drainage',
        'Provide proper ventilation',
        'Avoid overhead irrigation',
        'Destroy infected plant material immediately',
        'Rotate crops for minimum 3 years'
      ],
      fertilizer_suggestions: [
        'Balanced NPK',
        'High Potassium',
        'Calcium: 1-2 tons/ha',
        'Minimize nitrogen near flowering'
      ],
      treatment_duration: '21-28 days',
      affected_area_percentage: 0
    },
    {
      id: 'potato_02',
      crop_name: 'Potato',
      disease_name: 'Early Blight',
      scientific_name: 'Alternaria solani',
      symptoms: [
        'Brown circular spots with concentric rings',
        'Spots appear on lower leaves first',
        'Yellow halo around affected areas',
        'Leaf yellowing and premature defoliation',
        'Tubers may show surface blemishes'
      ],
      severity_level: 'high',
      chemical_treatment: [
        'Mancozeb 75% WP (@2.5kg/ha)',
        'Chlorothalonil 75% WP (@2kg/ha)',
        'Spray every 10-14 days'
      ],
      organic_treatment: [
        'Bordeaux mixture (1%)',
        'Sulfur dusting',
        'Bacillus subtilis bioagent',
        'Manual removal of affected leaves'
      ],
      preventive_measures: [
        'Use resistant varieties',
        'Water at soil level only',
        'Remove lower 30cm of leaves periodically',
        'Maintain good air circulation',
        'Sanitize field equipment'
      ],
      fertilizer_suggestions: [
        'Adequate Nitrogen at planting',
        'High Potassium (150kg K/ha)',
        'Calcium and Magnesium spray'
      ],
      treatment_duration: '14-21 days',
      affected_area_percentage: 0
    }
  ],
  rice: [
    {
      id: 'rice_01',
      crop_name: 'Rice',
      disease_name: 'Blast Disease',
      scientific_name: 'Magnaporthe oryzae',
      symptoms: [
        'Spindle-shaped or diamond-shaped lesions on leaves',
        'Gray centers with brown/reddish margins',
        'Lesions on leaf sheaths and culms',
        'Panicle blast causes premature ripening',
        'White or sterile grains in infected panicles'
      ],
      severity_level: 'critical',
      chemical_treatment: [
        'Tricyclazole 75% WP (@0.6kg/ha)',
        'Propiconazole 25% EC (@0.5 L/ha)',
        'Azoxystrobin 11% + Tebuconazole 18.3%',
        'Spray at boot and heading stage'
      ],
      organic_treatment: [
        'Trichoderma viride bioagent',
        'Bacillus subtilis',
        'Bordeaux mixture (1%)',
        'Rice straw ash application'
      ],
      preventive_measures: [
        'Use blast-resistant rice varieties',
        'Avoid excess nitrogen fertilizer',
        'Optimize water management',
        'Proper field sanitation',
        'Crop rotation with non-host crops',
        'Burn or bury infected crop residue'
      ],
      fertilizer_suggestions: [
        'Balanced NPK initially',
        'Reduce nitrogen after boot stage',
        'Apply Silica fertilizer (600kg/ha)',
        'Silicon improves blast resistance significantly'
      ],
      treatment_duration: '14-21 days',
      affected_area_percentage: 0
    },
    {
      id: 'rice_02',
      crop_name: 'Rice',
      disease_name: 'Brown Spot',
      scientific_name: 'Drechslera oryzae',
      symptoms: [
        'Small dark brown spots on leaves',
        'Brown halo around spots',
        'Lesions may merge on severe infection',
        'Discoloration of glumes and hulls',
        'Premature ripening of affected areas'
      ],
      severity_level: 'medium',
      chemical_treatment: [
        'Carbendazim 12% + Mancozeb 63%',
        'Propiconazole 25% EC',
        'Spray at 4-5 leaf stage and again at boot stage'
      ],
      organic_treatment: [
        'Trichoderma virens',
        'Pseudomonas fluorescens',
        'Neem oil 3%',
        'Sulfur 80% WP'
      ],
      preventive_measures: [
        'Use disease-free seeds',
        'Treat seeds with carbendazim',
        'Maintain soil nutrients (especially N, P, K)',
        'Ensure proper water management',
        'Proper spacing of plants',
        'Harvest at right time'
      ],
      fertilizer_suggestions: [
        'Adequate Nitrogen (50-60 kg/ha)',
        'Phosphorus: 25-30 kg/ha',
        'Potassium: 40-50 kg/ha',
        'Zinc Sulphate: 5-10 kg/ha'
      ],
      treatment_duration: '10-14 days',
      affected_area_percentage: 0
    }
  ],
  wheat: [
    {
      id: 'wheat_01',
      crop_name: 'Wheat',
      disease_name: 'Rust (Leaf Rust)',
      scientific_name: 'Puccinia triticina',
      symptoms: [
        'Red-brown pustules on leaf surfaces',
        'Pustules have reddish-brown color',
        'Affects primarily upper leaf surface',
        'May see dark telia in late season',
        'Severe infection causes leaf drying'
      ],
      severity_level: 'high',
      chemical_treatment: [
        'Propiconazole 25% EC (@0.5 L/ha)',
        'Tebuconazole 25% EC',
        'Azoxystrobin 11% + Tebuconazole 18%',
        'Spray at first sign of disease'
      ],
      organic_treatment: [
        'Sulfur dusting (80% WP)',
        'Copper fungicide',
        'Biological agents: Bacillus subtilis',
        'Neem oil application'
      ],
      preventive_measures: [
        'Use rust-resistant varieties',
        'Avoid delayed sowing',
        'Maintain proper plant spacing',
        'Remove alternate hosts (barberry)',
        'Timely harvest to prevent spread',
        'Remove infected crop residue'
      ],
      fertilizer_suggestions: [
        'Balanced NPK ratio',
        'Potassium promotes resistance',
        'Calcium spray (0.5%)',
        'Zinc: 2-3 kg/ha if deficient'
      ],
      treatment_duration: '10-14 days',
      affected_area_percentage: 0
    }
  ],
  maize: [
    {
      id: 'maize_01',
      crop_name: 'Maize',
      disease_name: 'Leaf Spot (Gray Leaf Spot)',
      scientific_name: 'Cercospora zeae-maydis',
      symptoms: [
        'Rectangular spots on leaves with gray center',
        'Dark brown/red margins around spots',
        'Spots aligned with leaf veins',
        'Multiple spots coalesce on severe infection',
        'Premature leaf death and senescence'
      ],
      severity_level: 'high',
      chemical_treatment: [
        'Azoxystrobin 11% + Tebuconazole 18%',
        'Propiconazole 25% EC',
        'Mancozeb 75% WP',
        'Spray every 10-14 days'
      ],
      organic_treatment: [
        'Bordeaux mixture (1%)',
        'Copper Oxychloride',
        'Bacillus subtilis bioagent',
        'Neem oil spray'
      ],
      preventive_measures: [
        'Use disease-resistant hybrids',
        'Crop rotation (break cycle)',
        'Bury or remove crop residue',
        'Proper plant spacing for air circulation',
        'Avoid excessive nitrogen',
        'Manage irrigation to reduce leaf wetness'
      ],
      fertilizer_suggestions: [
        'Avoid excess nitrogen',
        'Balanced NPK at planting',
        'Silicon fertilizer application',
        'Potassium increases resistance'
      ],
      treatment_duration: '14-21 days',
      affected_area_percentage: 0
    }
  ]
};

module.exports = diseasesDatabase;
