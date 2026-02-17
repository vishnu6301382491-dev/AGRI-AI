// Database schema and initialization queries

const schema = {
  users: `
    CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      name VARCHAR(100) NOT NULL,
      role ENUM('farmer', 'expert', 'admin') DEFAULT 'farmer',
      location VARCHAR(100),
      phone VARCHAR(20),
      profile_picture VARCHAR(255),
      bio TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_email (email),
      INDEX idx_role (role)
    )
  `,

  crops: `
    CREATE TABLE IF NOT EXISTS crops (
      id INT PRIMARY KEY AUTO_INCREMENT,
      crop_name VARCHAR(100) NOT NULL,
      scientific_name VARCHAR(100),
      family VARCHAR(100),
      description TEXT,
      common_names TEXT,
      growing_season VARCHAR(100),
      optimal_temperature VARCHAR(100),
      water_requirements VARCHAR(100),
      soil_type VARCHAR(100),
      image_url VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_crop_name (crop_name)
    )
  `,

  diseases: `
    CREATE TABLE IF NOT EXISTS diseases (
      id INT PRIMARY KEY AUTO_INCREMENT,
      crop_id INT NOT NULL,
      disease_name VARCHAR(100) NOT NULL,
      scientific_name VARCHAR(100),
      symptoms TEXT NOT NULL,
      causes TEXT,
      severity_level ENUM('low', 'medium', 'high', 'critical') DEFAULT 'medium',
      chemical_treatment TEXT,
      organic_treatment TEXT,
      preventive_measures TEXT,
      fertilizer_suggestions TEXT,
      treatment_duration VARCHAR(100),
      affected_area_percentage INT DEFAULT 0,
      disease_image_url VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (crop_id) REFERENCES crops(id),
      INDEX idx_crop_id (crop_id),
      INDEX idx_disease_name (disease_name)
    )
  `,

  predictions: `
    CREATE TABLE IF NOT EXISTS predictions (
      id INT PRIMARY KEY AUTO_INCREMENT,
      user_id INT NOT NULL,
      image_path VARCHAR(255) NOT NULL,
      crop_id INT,
      disease_id INT,
      disease_name VARCHAR(100),
      confidence_score FLOAT,
      severity_level ENUM('low', 'medium', 'high', 'critical'),
      ai_recommendation TEXT,
      gps_latitude FLOAT,
      gps_longitude FLOAT,
      location VARCHAR(100),
      infection_percentage INT,
      model_version VARCHAR(50),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (crop_id) REFERENCES crops(id),
      FOREIGN KEY (disease_id) REFERENCES diseases(id),
      INDEX idx_user_id (user_id),
      INDEX idx_created_at (created_at),
      INDEX idx_disease_id (disease_id)
    )
  `,

  forum_posts: `
    CREATE TABLE IF NOT EXISTS forum_posts (
      id INT PRIMARY KEY AUTO_INCREMENT,
      user_id INT NOT NULL,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      image_url VARCHAR(255),
      problem_category VARCHAR(100),
      solution_count INT DEFAULT 0,
      is_solved BOOLEAN DEFAULT FALSE,
      expert_verification BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      INDEX idx_user_id (user_id),
      INDEX idx_is_solved (is_solved),
      INDEX idx_created_at (created_at)
    )
  `,

  forum_replies: `
    CREATE TABLE IF NOT EXISTS forum_replies (
      id INT PRIMARY KEY AUTO_INCREMENT,
      post_id INT NOT NULL,
      user_id INT NOT NULL,
      content TEXT NOT NULL,
      is_helpful INT DEFAULT 0,
      is_marked_solution BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (post_id) REFERENCES forum_posts(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id),
      INDEX idx_post_id (post_id),
      INDEX idx_user_id (user_id)
    )
  `,

  weather_data: `
    CREATE TABLE IF NOT EXISTS weather_data (
      id INT PRIMARY KEY AUTO_INCREMENT,
      location VARCHAR(100) NOT NULL,
      latitude FLOAT,
      longitude FLOAT,
      temperature FLOAT,
      humidity INT,
      rainfall FLOAT,
      wind_speed FLOAT,
      disease_risk_level ENUM('low', 'medium', 'high') DEFAULT 'low',
      weather_condition VARCHAR(100),
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_location (location),
      INDEX idx_timestamp (timestamp)
    )
  `,

  disease_outbreak_alerts: `
    CREATE TABLE IF NOT EXISTS disease_outbreak_alerts (
      id INT PRIMARY KEY AUTO_INCREMENT,
      location VARCHAR(100) NOT NULL,
      crop_id INT NOT NULL,
      disease_id INT NOT NULL,
      severity_level ENUM('low', 'medium', 'high', 'critical') DEFAULT 'medium',
      reported_cases INT DEFAULT 0,
      description TEXT,
      prevention_measures TEXT,
      is_active BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (crop_id) REFERENCES crops(id),
      FOREIGN KEY (disease_id) REFERENCES diseases(id),
      INDEX idx_location (location),
      INDEX idx_is_active (is_active)
    )
  `,

  model_performance: `
    CREATE TABLE IF NOT EXISTS model_performance (
      id INT PRIMARY KEY AUTO_INCREMENT,
      model_version VARCHAR(50),
      accuracy FLOAT,
      precision FLOAT,
      recall FLOAT,
      f1_score FLOAT,
      total_predictions INT,
      correct_predictions INT,
      deployment_date TIMESTAMP,
      notes TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `
};

module.exports = schema;
