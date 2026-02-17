# 🚀 Quick Start Guide - AGRI AI Phase 1

**Get up and running in 5 minutes!**

---

## ⚡ 5-Minute Quick Start

### Step 1: Install Dependencies (2 min)
```bash
cd d:/Agri AI
npm install
```

### Step 2: Create Environment File (1 min)
```bash
copy .env.example .env
```

### Step 3: Start Server (1 min)
```bash
npm start
```

### Step 4: Access Application (1 min)
```
👤 Login:        http://localhost:3000/auth/login
🌾 Disease Detection: http://localhost:3000/dashboard/disease-detection
📊 API Docs:     http://localhost:3000/api/disease/crops
```

**Default Credentials:**
- Username: `farmer1`
- Password: `password123`

---

## 🎯 First-Time User Flow

```
1. Navigate to Login Page
   ↓
2. Enter credentials (farmer1 / password123)
   ↓
3. Click "Login"
   ↓
4. You're in Dashboard
   ↓
5. Click "Disease Detection" from menu
   ↓
6. Upload a crop image (any plant image works)
   ↓
7. View AI prediction results
   ↓
8. Check treatment recommendations
   ↓
9. See detection history
```

---

## 📖 Key Features to Try

### 1. Upload & Predict
- Go to: `/dashboard/disease-detection`
- Drag and drop an image OR click to select
- See AI prediction with:
  - Disease name
  - Confidence score
  - Severity level
  - Affected area percentage

### 2. Treatment Info
- Click on disease result
- View comprehensive treatment options:
  - ✅ Chemical treatments
  - ✅ Organic alternatives
  - ✅ Prevention strategies
  - ✅ Fertilizer recommendations

### 3. Explore API
```bash
# Get all available crops
curl http://localhost:3000/api/disease/crops

# Get tomato diseases  
curl http://localhost:3000/api/disease/crop/tomato

# Get specific disease details
curl http://localhost:3000/api/disease/disease/tomato/early-blight

# Upload image for prediction
curl -X POST -F "cropImage=@photo.jpg" \
  http://localhost:3000/api/disease/predict
```

---

## 🎨 UI Navigation

### From Dashboard
```
Dashboard Home
├── 🌾 Disease Detection
│   ├── Upload Image
│   ├── View Results
│   └── Check History
├── 🚪 Logout
└── More (coming in Phase 2)
```

### Disease Detection Page
```
Upload Section          Results Section
├── Drag-Drop Area     ├── Disease Card
├── File Preview       ├── Confidence Badge
├── Crop Selector      ├── Severity Badge
├── Detect Button      ├── Symptoms List
└── Clear Button       ├── Treatments
                       │   ├── Chemical
                       │   ├── Organic
                       │   ├── Prevention
                       │   └── Fertilizer
                       └── History Table
```

---

## 📤 File Upload How-To

### Option 1: Drag & Drop
1. Go to disease detection page
2. Find upload area
3. Drag image file and drop

### Option 2: Click to Select
1. Click anywhere in upload area
2. Browse and select image
3. Confirm selection

### Supported Formats
- ✅ JPEG (.jpg, .jpeg)
- ✅ PNG (.png)
- ✅ GIF (.gif)
- ✅ WebP (.webp)
- ❌ Other formats not supported

### Size Limits
- Maximum: 10 MB
- Recommended: < 5 MB

---

## 🔐 User Roles

### Farmer (Default)
```
Can:
✅ Upload images
✅ Get predictions
✅ View history
✅ See treatments

Cannot:
❌ Access admin features
❌ Manage disease database
❌ View analytics
```

### Expert (Phase 2)
```
Can:
✅ Everything a Farmer can
✅ Verify predictions
✅ Mark solutions in forum
✅ Help other farmers

Coming Phase 2:
⏳ Expert badge
⏳ Answer forum questions
```

### Admin (Phase 3)
```
Can:
✅ Everything users can
✅ Manage users
✅ Update disease database
✅ View analytics
✅ Track model performance

Coming Phase 3:
⏳ Admin dashboard
⏳ User management
⏳ System monitoring
```

---

## 🌾 Supported Crops & Diseases

### Tomato (3 diseases)
- ✅ Early Blight
- ✅ Late Blight
- ✅ Powdery Mildew

### Potato (2 diseases)
- ✅ Late Blight
- ✅ Early Blight

### Rice (2 diseases)
- ✅ Blast Disease
- ✅ Brown Spot

### Wheat (1 disease)
- ✅ Rust (Leaf Rust)

### Maize (1 disease)
- ✅ Leaf Spot (Gray Leaf Spot)

**More coming in Phase 2!**

---

## 🔧 Troubleshooting

### Server won't start
```
Error: Port 3000 already in use

Solution:
npm start -- --port 3001
```

### File upload fails
```
Error: LIMIT_FILE_SIZE exceeded

Solution: Use file < 10MB

Error: Only image files allowed

Solution: Use JPEG, PNG, GIF, or WebP format
```

### Login issues
```
Error: Invalid username or password

Solution: Use default credentials
Username: farmer1
Password: password123
```

### Prediction not showing
```
1. Check if file is valid image
2. Check if file size < 10MB
3. Wait 5-10 seconds for processing
4. Try different image
```

---

## 🎓 Understanding the Results

### Confidence Score
```
92.34% means:
- AI is 92.34% sure it's this disease
- Higher = more reliable

What to do:
- 85%+: High confidence, likely correct
- 70-85%: Medium confidence, verify manually
- <70%: Low confidence, consult expert
```

### Severity Levels
```
🟢 Low
├─ Minimal crop damage
├─ Early stage of infection
└─ Preventive measures recommended

🟡 Medium
├─ Visible damage on 20-50% of crop
├─ Early treatment needed
└─ Act within 1-2 weeks

🔴 High
├─ Severe damage (50-80%)
├─ Immediate treatment required
└─ Act within 1-3 days

🔴⚫ Critical (URGENT)
├─ Severe outbreak (80%+)
├─ Immediate intervention needed
└─ Act immediately
```

### Affected Area
```
Percentage of crop with visible disease signs

Example:
- 35% affected
- Means 35 out of 100 leaves show symptoms
- Still time to treat, but act quickly
```

---

## 📱 Mobile Access

The app works on mobile browsers!

### On Phone:
1. Open Chrome or Safari
2. Go to: `http://[your-computer-ip]:3000`
3. Use same login credentials
4. Full mobile access to all features

---

## 🔄 Workflow Examples

### Example 1: Detect & Treat
```
1. Farmer notices sick tomato plant
2. Takes photo with phone
3. Uploads to app
4. Gets result: "Early Blight"
5. Reads treatment recommendations
6. Follows chemical OR organic treatment
7. Monitors crop over 2-3 weeks
8. Re-tests if needed
```

### Example 2: Prevention
```
1. Farmer checks available crops
2. Reads about tomato diseases
3. Learn about prevention measures
4. Implement best practices:
   - Proper spacing
   - Soil-level watering
   - Remove lower leaves
5. Monitor regularly
6. Upload photos monthly for check
```

### Example 3: Compare Options
```
1. Get prediction: "Late Blight"
2. Review chemical treatment options
3. Review organic alternatives
4. Check fertilizer suggestions
5. Decide based on:
   - Cost
   - Availability
   - Preferences
   - Environmental concerns
6. Implement chosen option
```

---

## 📊 API Quick Reference

### Base URL
```
http://localhost:3000/api/disease
```

### Endpoints Summary
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | /predict | Upload image → Get prediction |
| GET | /history | Get past predictions |
| GET | /crops | List available crops |
| GET | /crop/:crop | Get diseases for crop |
| GET | /disease/:crop/:disease | Detailed disease info |

### Example Requests

**Get All Crops:**
```bash
curl http://localhost:3000/api/disease/crops
```

**Get Tomato Diseases:**
```bash
curl http://localhost:3000/api/disease/crop/tomato
```

**Get Disease Details:**
```bash
curl http://localhost:3000/api/disease/disease/tomato/early-blight
```

**Upload Image (Prediction):**
```bash
curl -X POST -F "cropImage=@crop.jpg" \
  http://localhost:3000/api/disease/predict
```

---

## ⚙️ Configuration

### Change Server Port
Edit `.env`:
```
PORT=3001
```
Then restart: `npm start`

### Change Session Duration
Edit `.env` or `server.js`:
```javascript
maxAge: 12 * 60 * 60 * 1000 // 12 hours
```

### Disable Image Optimization
Edit `routes/disease-detection.js`:
```javascript
// Comment out optimization code
```

---

## 🎁 Tips & Tricks

### Get Better Results
1. Use clear, well-lit photos
2. Focus on affected leaves
3. Include multiple angles if possible
4. Ensure leaves fill most of frame
5. Avoid shadows and glare

### Organize Your Images
```
Create folders:
├── diseased-leaves/
├── healthy-plants/
├── history/
└── comparisons/
```

### Keep Records
1. Save predictions
2. Note treatments used
3. Track results
4. Compare over time
5. Learn what works best

### Share Results
Coming Phase 2:
- ⏳ Export reports
- ⏳ Share with experts
- ⏳ Community discussions
- ⏳ Collaborative learning

---

## 🆘 Need Help?

### Resources
- 📖 Read: [PHASE1_GUIDE.md](PHASE1_GUIDE.md)
- 🗺️ See: [DEVELOPMENT_ROADMAP.md](DEVELOPMENT_ROADMAP.md)
- 📊 Check: [PHASE1_SUMMARY.md](PHASE1_SUMMARY.md)

### Common Questions

**Q: Why does prediction take time?**
A: AI needs to process and analyze image. Usually 2-5 seconds.

**Q: What if prediction is wrong?**
A: Take another photo from different angle and try again.

**Q: Can I edit my uploaded images?**
A: No, uploading new one is best option.

**Q: Are my images stored?**
A: Yes, stored in `/public/uploads/` for your reference.

**Q: Can I delete my prediction history?**
A: Phase 2 will add account settings to delete.

---

## 🚀 Ready to Go!

You now have:
✅ Working application  
✅ Disease detection running  
✅ Complete API access  
✅ Beautiful UI  
✅ Full documentation  

**Next Steps:**
1. Explore the application
2. Try uploading images
3. Check treatment recommendations
4. Read detailed documentation
5. Get ready for Phase 2!

---

**Version:** 1.0  
**Phase:** 1 - Complete  
**Status:** ✅ Ready to Use  
**Last Updated:** February 16, 2026  

🌟 Enjoy using AGRI AI!
