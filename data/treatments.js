/**
 * Complete Treatment Recommendations Database
 * Includes chemical, organic, preventive measures, and fertilizer suggestions
 */

const treatments = {
  tomato: {
    "Early Blight": {
      severity: "high",
      symptoms: "Brown spots with concentric rings on leaves, starting from bottom leaves",
      incubation_period: "5-7 days",
      spreading: "Rapidly in warm, humid conditions",
      chemical_treatment: [
        {
          name: "Chlorothalonil",
          dose: "2.5-3 ml/L of water",
          interval: "10-14 days",
          pre_harvest_interval: "7 days"
        },
        {
          name: "Mancozeb",
          dose: "2.5-3 g/L of water",
          interval: "10-14 days",
          pre_harvest_interval: "7 days"
        },
        {
          name: "Azoxystrobin",
          dose: "1 ml/L of water",
          interval: "14-21 days",
          pre_harvest_interval: "1 day"
        }
      ],
      organic_treatment: [
        {
          name: "Neem oil",
          concentration: "3-5%",
          interval: "10-12 days",
          application: "Spray on both leaf surfaces"
        },
        {
          name: "Copper sulfate",
          dose: "1%",
          interval: "10-14 days",
          application: "Mix with lime water"
        },
        {
          name: "Bacillus subtilis",
          dose: "1 ml/L",
          interval: "7-10 days",
          application: "Spray early morning"
        }
      ],
      preventive_measures: [
        "Space plants properly for air circulation",
        "Remove infected leaves immediately",
        "Use drip irrigation to avoid wet foliage",
        "Mulch soil to prevent spore splash",
        "Rotate crops with non-solanaceous plants",
        "Sanitize tools between plants"
      ],
      fertilizer_suggestions: {
        type: "NPK 10:52:10",
        additional: ["Boron @ 2 kg/acre", "Calcium @ 5 kg/acre"],
        application: "Once confirmed disease, apply weekly soft spray",
        timing: "Apply 2-3 weeks after transplanting and again at flowering"
      },
      safety_instructions: [
        "Wear gloves and mask during spraying",
        "Spray in late evening or early morning",
        "Avoid spraying on flowers",
        "Keep livestock and pets away from treated area",
        "Store chemicals in cool, dry place",
        "Follow label instructions strictly"
      ],
      estimated_recovery: "3-4 weeks with proper management",
      impact_on_yield: "50-70% loss if untreated"
    },
    "Late Blight": {
      severity: "critical",
      symptoms: "Water-soaked spots on leaves, white fungal growth on undersides, rapid spread",
      incubation_period: "2-3 days",
      spreading: "Very rapid in cool, wet conditions",
      chemical_treatment: [
        {
          name: "Ridomil",
          dose: "2.5 ml/L",
          interval: "10-14 days",
          pre_harvest_interval: "3 days"
        },
        {
          name: "Metalaxyl",
          dose: "1.5 g/L",
          interval: "10-12 days",
          pre_harvest_interval: "5 days"
        },
        {
          name: "Phosphorous acid",
          dose: "2.5 ml/L",
          interval: "7-10 days",
          pre_harvest_interval: "1 day"
        }
      ],
      organic_treatment: [
        {
          name: "Hydrogen peroxide (3%)",
          dilution: "1:10 with water",
          interval: "7-10 days",
          application: "Spray entire plant"
        },
        {
          name: "Potassium bicarbonate",
          dose: "1-1.5%",
          interval: "7-10 days",
          application: "Early morning spray"
        },
        {
          name: "Trichoderma",
          dose: "15 ml/L",
          interval: "10-14 days",
          application: "Spray thoroughly"
        }
      ],
      preventive_measures: [
        "Remove infected plants immediately - burn them",
        "Improve air circulation around plants",
        "Reduce humidity through proper irrigation",
        "Avoid overhead irrigation",
        "Prune lower leaves for ventilation",
        "Use disease-resistant varieties",
        "Monitor weather and spray preventively before rain"
      ],
      fertilizer_suggestions: {
        type: "Phosphorous-rich 0:52:34",
        additional: ["Calcium nitrate @ 2 kg/acre", "Magnesium sulfate @ 1 kg/acre"],
        application: "Weekly after disease confirmation",
        timing: "Start from flowering stage"
      },
      safety_instructions: [
        "Apply in cool hours only",
        "Avoid rain within 2-3 hours of spraying",
        "Use full protective equipment",
        "Wash hands after handling",
        "Properly dispose of infected plant material",
        "Do not allow spray drift to other crops"
      ],
      estimated_recovery: "5-6 weeks for partial recovery",
      impact_on_yield: "80-100% loss if untreated, severe damage even with treatment"
    },
    "Powdery Mildew": {
      severity: "medium",
      symptoms: "White powdery coating on leaves, stems and flowers",
      incubation_period: "7-10 days",
      spreading: "Moderate, favors dry warm conditions",
      chemical_treatment: [
        {
          name: "Wettable sulfur",
          dose: "2.5-3 g/L",
          interval: "10-14 days",
          pre_harvest_interval: "5 days"
        },
        {
          name: "Triadimefon",
          dose: "1 ml/L",
          interval: "10-14 days",
          pre_harvest_interval: "7 days"
        },
        {
          name: "Sulfur dust",
          dose: "Apply as dust",
          interval: "7-10 days",
          pre_harvest_interval: "5 days"
        }
      ],
      organic_treatment: [
        {
          name: "Neem oil",
          concentration: "1-2%",
          interval: "7-10 days",
          application: "Spray thoroughly"
        },
        {
          name: "Baking soda spray",
          formula: "1 tbsp baking soda + 1 tbsp oil + 1 tbsp dish soap per gallon water",
          interval: "7 days",
          application: "Spray both sides of leaves"
        },
        {
          name: "Sulfur dust",
          dose: "10-15 g/m²",
          interval: "7-10 days",
          application: "Apply in morning when dew is present"
        }
      ],
      preventive_measures: [
        "Ensure good ventilation and air circulation",
        "Avoid overhead watering",
        "Remove infected leaves at first sign",
        "Maintain proper plant spacing",
        "Reduce nitrogen fertilizer",
        "Maintain humidity below 70%"
      ],
      fertilizer_suggestions: {
        type: "Potassium nitrate",
        additional: ["Sulfur @ 2 kg/acre", "Zinc sulfate @ 0.5 kg/acre"],
        application: "As preventive measure",
        timing: "During flower bud formation"
      },
      safety_instructions: [
        "Do not apply sulfur within 14 days of oil spray",
        "Avoid spraying in extreme heat",
        "Wear mask when applying sulfur dust",
        "Ensure proper water pressure when spraying oil",
        "Don't spray open flowers"
      ],
      estimated_recovery: "2-3 weeks",
      impact_on_yield: "20-30% loss if untreated"
    }
  },
  potato: {
    "Late Blight": {
      severity: "critical",
      symptoms: "Reddish-brown spots on leaves and stems, tubers with dry rot and brown lesions",
      incubation_period: "2-3 days",
      spreading: "Very rapid in cool, wet weather",
      chemical_treatment: [
        {
          name: "Ridomil",
          dose: "2.5 ml/L",
          interval: "10-14 days",
          pre_harvest_interval: "5 days"
        },
        {
          name: "Cymoxanil",
          dose: "1.5 g/L",
          interval: "10-12 days",
          pre_harvest_interval: "3 days"
        },
        {
          name: "Mancozeb",
          dose: "2.5 g/L",
          interval: "10-14 days",
          pre_harvest_interval: "7 days"
        }
      ],
      organic_treatment: [
        {
          name: "Copper fungicide",
          dose: "2-3 g/L",
          interval: "10-14 days",
          application: "Spray thoroughly"
        },
        {
          name: "Bacillus subtilis",
          dose: "10^8 cfu/ml",
          interval: "10-14 days",
          application: "Spray early morning"
        },
        {
          name: "Trichoderma",
          dose: "15 ml/L",
          interval: "14-21 days",
          application: "Soil drench or spray"
        }
      ],
      preventive_measures: [
        "Use resistant potato varieties",
        "Avoid planting in waterlogged soil",
        "Improve soil drainage",
        "Remove infected plants immediately",
        "Destroy infected tubers (do not store)",
        "Avoid overhead irrigation",
        "Monitor weather and spray preventively"
      ],
      fertilizer_suggestions: {
        type: "Balanced NPK 10:52:10",
        additional: ["Extra Phosphorous @ 3 kg/acre", "Potassium @ 5 kg/acre"],
        application: "Every 2 weeks during growing season",
        timing: "Start from tuber initiation stage"
      },
      safety_instructions: [
        "Spray preventively, not curatively when disease appears",
        "Wear protective equipment mandatory",
        "Avoid harvesting wet potatoes",
        "Sanitize storage facilities",
        "Do not store infected tubers",
        "Burn all infected plant debris"
      ],
      estimated_recovery: "Cannot be cured, only prevented",
      impact_on_yield: "100% loss if untreated, 50-70% with management"
    },
    "Early Blight": {
      severity: "high",
      symptoms: "Brown concentric spots starting on lower leaves, progresses upward",
      incubation_period: "5-7 days",
      spreading: "Moderate, spreads via spores",
      chemical_treatment: [
        {
          name: "Chlorothalonil",
          dose: "2.5-3 ml/L",
          interval: "10-14 days",
          pre_harvest_interval: "7 days"
        },
        {
          name: "Azoxystrobin",
          dose: "1 ml/L",
          interval: "14-21 days",
          pre_harvest_interval: "3 days"
        },
        {
          name: "Pyraclostrobin",
          dose: "0.75 ml/L",
          interval: "14-21 days",
          pre_harvest_interval: "1 day"
        }
      ],
      organic_treatment: [
        {
          name: "Neem oil",
          concentration: "3-5%",
          interval: "10-12 days",
          application: "Spray both leaf surfaces"
        },
        {
          name: "Copper sulfate",
          dose: "1%",
          interval: "10-14 days",
          application: "Mix with lime"
        },
        {
          name: "Sulfur",
          dose: "2.5-3 g/L",
          interval: "10-14 days",
          application: "Wettable sulfur spray"
        }
      ],
      preventive_measures: [
        "Remove leaves showing symptoms",
        "Maintain good air circulation",
        "Proper spacing between plants",
        "Rotate with non-solanaceous crops",
        "Avoid overhead irrigation",
        "Mulch to prevent spore splash"
      ],
      fertilizer_suggestions: {
        type: "NPK 10:52:10",
        additional: ["Boron @ 2 kg/acre", "Zinc @ 0.5 kg/acre"],
        application: "Every 2 weeks",
        timing: "From emergence stage"
      },
      safety_instructions: [
        "Wear protective equipment",
        "Spray in cool hours",
        "Avoid spraying flowers",
        "Allow drying before rain",
        "Remove and destroy lower infected leaves"
      ],
      estimated_recovery: "3-4 weeks",
      impact_on_yield: "40-60% if untreated"
    }
  },
  rice: {
    "Blast Disease": {
      severity: "critical",
      symptoms: "Diamond-shaped spots on leaves, stem rot, panicle blast leads to total crop loss",
      incubation_period: "4-7 days",
      spreading: "Very rapid in cool, humid conditions",
      chemical_treatment: [
        {
          name: "Tricyclazole",
          dose: "1 g/L",
          interval: "10-14 days",
          pre_harvest_interval: "14 days"
        },
        {
          name: "Azoxystrobin",
          dose: "1 ml/L",
          interval: "14-21 days",
          pre_harvest_interval: "1 day"
        },
        {
          name: "Propiconazole",
          dose: "1 ml/L",
          interval: "14-21 days",
          pre_harvest_interval: "7 days"
        }
      ],
      organic_treatment: [
        {
          name: "Trichoderma harzianum",
          dose: "10^8 cfu/ml",
          interval: "14-21 days",
          application: "Spray or soil drench"
        },
        {
          name: "Silicon spray",
          dose: "1%",
          interval: "10-14 days",
          application: "Strengthens plant immunity"
        },
        {
          name: "Bacillus subtilis",
          dose: "1 ml/L",
          interval: "10-14 days",
          application: "Spray early morning"
        }
      ],
      preventive_measures: [
        "Use resistant rice varieties",
        "Proper spacing for air circulation",
        "Balance fertilizer (avoid excess nitrogen)",
        "Apply silicon regularly",
        "Spray preventively at booting stage",
        "Maintain field water management",
        "Burn infected plant debris"
      ],
      fertilizer_suggestions: {
        type: "Silicon-rich @ 40 kg/acre",
        additional: ["Balanced NPK 10:52:10", "Potassium @ 10 kg/acre"],
        application: "Preventively during growing season",
        timing: "At panicle initiation and heading"
      },
      safety_instructions: [
        "Apply at booting stage preventively",
        "Wear protective equipment",
        "Avoid continuous flooding if disease present",
        "Sanitize all equipment",
        "Proper disposal of infected material",
        "Avoid drift to neighboring fields"
      ],
      estimated_recovery: "Cannot be cured if already spread to panicles",
      impact_on_yield: "80-100% loss if panicle blast occurs"
    },
    "Brown Spot": {
      severity: "medium",
      symptoms: "Brown oval spots with yellow halo on leaves, reduces photosynthesis",
      incubation_period: "7-10 days",
      spreading: "Moderate, favored by high humidity",
      chemical_treatment: [
        {
          name: "Carbendazim",
          dose: "0.5 g/L",
          interval: "14-21 days",
          pre_harvest_interval: "7 days"
        },
        {
          name: "Mancozeb",
          dose: "2.5 g/L",
          interval: "10-14 days",
          pre_harvest_interval: "7 days"
        },
        {
          name: "Thiram",
          dose: "2.5-3 g/L",
          interval: "10-14 days",
          pre_harvest_interval: "7 days"
        }
      ],
      organic_treatment: [
        {
          name: "Copper oxychloride",
          dose: "2-3 g/L",
          interval: "10-14 days",
          application: "Thorough spray coverage"
        },
        {
          name: "Bacillus subtilis",
          dose: "1 ml/L",
          interval: "14-21 days",
          application: "Spray at boot stage"
        },
        {
          name: "Azospirillum",
          dose: "10^8 cfu/ml",
          interval: "14-21 days",
          application: "Soil inoculation"
        }
      ],
      preventive_measures: [
        "Crop rotation with non-rice crops",
        "Seed treatment before sowing",
        "Remove and burn crop residue",
        "Avoid waterlogging",
        "Use resistant varieties",
        "Maintain proper plant spacing"
      ],
      fertilizer_suggestions: {
        type: "Zinc sulfate @ 25 kg/acre",
        additional: ["Balanced NPK 10:52:10", "Copper @ 5 kg/acre"],
        application: "As part of preventive management",
        timing: "At vegetative stage"
      },
      safety_instructions: [
        "Ensure good water management",
        "Spray at early boot stage",
        "Use certified seeds",
        "Proper storage of seeds",
        "Avoid seed contamination"
      ],
      estimated_recovery: "2-3 weeks",
      impact_on_yield: "15-20% loss if untreated"
    }
  },
  wheat: {
    "Rust": {
      severity: "high",
      symptoms: "Orange/brown pustules on leaves turning black, severe stem rust causes total crop failure",
      incubation_period: "7-10 days",
      spreading: "Rapid with wind, favored by cool, wet weather",
      chemical_treatment: [
        {
          name: "Propiconazole",
          dose: "1 ml/L",
          interval: "14-21 days",
          pre_harvest_interval: "7 days"
        },
        {
          name: "Tebuconazole",
          dose: "1 ml/L",
          interval: "14-21 days",
          pre_harvest_interval: "14 days"
        },
        {
          name: "Hexaconazole",
          dose: "1 ml/L",
          interval: "14-21 days",
          pre_harvest_interval: "7 days"
        }
      ],
      organic_treatment: [
        {
          name: "Sulfur dust",
          dose: "Apply as dust",
          interval: "10-14 days",
          application: "During cooler hours"
        },
        {
          name: "Neem oil",
          concentration: "1-2%",
          interval: "10-14 days",
          application: "Spray thoroughly"
        },
        {
          name: "Bacillus subtilis",
          dose: "1 ml/L",
          interval: "14-21 days",
          application: "Spray at boot stage"
        }
      ],
      preventive_measures: [
        "Use resistant wheat varieties",
        "Timely sowing (avoid late sowing)",
        "Proper spacing between plants",
        "Monitor rust warnings from IMD",
        "Spray preventively at flag leaf stage",
        "Remove alternative hosts",
        "Avoid excess nitrogen"
      ],
      fertilizer_suggestions: {
        type: "NPK 10:52:10",
        additional: ["Zinc sulfate @ 2 kg/acre", "Copper @ 0.5 kg/acre"],
        application: "Every 3 weeks during growing season",
        timing: "At boot and flag leaf stage"
      },
      safety_instructions: [
        "Apply at flag leaf stage preventively",
        "Wear protective equipment",
        "Spray in cool hours",
        "Allow 7 days before harvest",
        "Avoid drift to other crops",
        "Proper chemical storage"
      ],
      estimated_recovery: "3-4 weeks with treatment",
      impact_on_yield: "50-70% if untreated, complete loss in severe stem rust"
    }
  },
  maize: {
    "Leaf Spot": {
      severity: "medium",
      symptoms: "Gray spots with red/purple halos on leaves, reduces photosynthesis area",
      incubation_period: "7-10 days",
      spreading: "Moderate, spreads via spores",
      chemical_treatment: [
        {
          name: "Mancozeb",
          dose: "2.5-3 g/L",
          interval: "10-14 days",
          pre_harvest_interval: "7 days"
        },
        {
          name: "Chlorothalonil",
          dose: "2.5-3 ml/L",
          interval: "10-14 days",
          pre_harvest_interval: "7 days"
        },
        {
          name: "Azoxystrobin",
          dose: "1 ml/L",
          interval: "14-21 days",
          pre_harvest_interval: "7 days"
        }
      ],
      organic_treatment: [
        {
          name: "Copper sulfate",
          dose: "1%",
          interval: "10-14 days",
          application: "Mix with lime water"
        },
        {
          name: "Bacillus subtilis",
          dose: "1 ml/L",
          interval: "14-21 days",
          application: "Spray early morning"
        },
        {
          name: "Neem oil",
          concentration: "2-3%",
          interval: "10-12 days",
          application: "Thorough spray"
        }
      ],
      preventive_measures: [
        "Remove infected leaves",
        "Proper plant spacing",
        "Crop rotation (2-3 years)",
        "Avoid overhead irrigation",
        "Destroy residue after harvest",
        "Use disease-resistant hybrids",
        "Balance fertilization"
      ],
      fertilizer_suggestions: {
        type: "NPK 17:17:17",
        additional: ["Boron @ 2 kg/acre", "Zinc sulfate @ 2.5 kg/acre"],
        application: "Every 3 weeks during growing season",
        timing: "From V4 to tasseling stage"
      },
      safety_instructions: [
        "Avoid spraying during hot hours",
        "Wear protective gear",
        "Spray before flowering",
        "Allow drying before rain",
        "Proper chemical disposal",
        "Keep children and pets away"
      ],
      estimated_recovery: "2-3 weeks",
      impact_on_yield: "20-35% if untreated"
    }
  }
};

module.exports = treatments;
