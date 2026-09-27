-- Idempotent seed for the portfolio database.
INSERT INTO site_stats (metric, value) VALUES ('profile_views', 0)
ON CONFLICT (metric) DO NOTHING;

TRUNCATE TABLE projects RESTART IDENTITY;

INSERT INTO projects (title, slug, description, image, category, status, tags, live_url, github_url, sort_order, published)
VALUES
  (
    'Crop Disease & Pest Detection',
    'crop-disease-detection',
    'A farmer photographs a leaf; the model diagnoses the disease or pest, returns a confidence score, and recommends the next treatment steps. Inspired by PlantVillage Nuru, adapted for the crops of Uzbekistan.',
    '/images/project-crop.jpg',
    'ml',
    'in-progress',
    '["PyTorch", "Computer Vision", "AgriTech", "Uzbekistan"]'::jsonb,
    '#', '#', 1, true
  ),
  (
    'Air Quality Dashboard',
    'air-quality-dashboard',
    'Environmental forecasting platform combining weather, air-quality, and satellite data. Visualizes CO and SO2 AQI trends and predicts pollution levels with LSTM and Random Forest models.',
    '/images/project-air-quality.jpg',
    'data',
    'completed',
    '["Python", "LSTM", "Random Forest", "Satellite Data"]'::jsonb,
    '#', '#', 2, true
  ),
  (
    'AI Interview Identity Verification',
    'ai-interview-verification',
    'Security system for remote interviews that detects deepfakes, voice cloning, and AI-assisted responses — verifying a candidate''s identity in real time.',
    '/images/project-deepfake.jpg',
    'ml',
    'completed',
    '["PyTorch", "Deepfake Detection", "Voice ML", "Security"]'::jsonb,
    '#', '#', 3, true
  ),
  (
    'Emergency Gas & Fire Detection',
    'gas-fire-detection',
    'Early-warning system that detects gas leaks and fire outbreaks, triggering instant alerts to prevent emergencies before they escalate.',
    '/images/project-gas-fire.jpg',
    'ml',
    'completed',
    '["Python", "Anomaly Detection", "Safety", "Real-time"]'::jsonb,
    '#', '#', 4, true
  ),
  (
    'SATJade — SAT Prep Platform',
    'satjade-sat-prep',
    'SAT preparation platform built with Algorithm Education Center. Co-Founder & Product Developer — designed practice flows, score analytics, and the overall product experience.',
    '/images/project-satjade.jpg',
    'product',
    'completed',
    '["EdTech", "Product", "Co-Founder", "Web"]'::jsonb,
    '#', '#', 5, true
  );
