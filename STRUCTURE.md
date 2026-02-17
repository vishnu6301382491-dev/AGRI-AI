# Project Structure & File Guide 📁

## Complete Project Structure

```
Agri AI/
│
├── 📄 server.js                         # Main application entry point
├── 📄 package.json                      # Project dependencies and scripts
├── 📄 config.js                         # Configuration settings
├── 📄 .gitignore                        # Git ignore file
├── 📄 .env.example                      # Environment variables example
│
├── 📘 README.md                         # Full project documentation
├── 📘 INSTALLATION.md                   # Installation guide
├── 📘 QUICK_START.md                    # Quick start guide
├── 📘 STRUCTURE.md                      # This file
│
├── 📁 middleware/                       # Authentication middleware
│   └── 📄 auth.js                       # Authentication logic
│
├── 📁 routes/                           # API routes
│   ├── 📄 auth.js                       # Login & logout routes
│   └── 📄 dashboard.js                  # Dashboard routes
│
├── 📁 views/                            # EJS Templates
│   ├── 📄 login.ejs                     # Login page
│   ├── 📄 dashboard.ejs                 # Main dashboard
│   ├── 📄 crop-diseases.ejs             # Crop diseases page
│   ├── 📄 food-crops.ejs                # Food crops page
│   ├── 📄 crop-prices.ejs               # Market prices page
│   ├── 📄 agricultural-seasons.ejs      # Seasons information
│   ├── 📄 ai-tools.ejs                  # AI tools page
│   ├── 📄 research-topics.ejs           # Research topics page
│   ├── 📄 layout.ejs                    # Base layout template
│   ├── 📄 404.ejs                       # 404 error page
│   └── 📄 error.ejs                     # Error page
│
├── 📁 public/                           # Static files
│   └── 📁 css/
│       └── 📄 style.css                 # All CSS styling (1000+ lines)
│
└── 📁 data/                             # Data files
    ├── 📄 users.js                      # Sample users database
    └── 📄 crops.js                      # Agriculture data

Total Files: 25
Total Size: ~150KB (without node_modules)
```

---

## File Descriptions

### Core Files

#### 🔧 server.js
**Purpose**: Main application file
**Size**: ~80 lines
**Key Features**:
- Express app initialization
- View engine setup (EJS)
- Middleware configuration
- Session setup
- Route registration
- Server startup

**Key Code**:
```javascript
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

#### 📦 package.json
**Purpose**: Project metadata and dependencies
**Size**: ~25 lines
**Contains**:
- Project name and version
- Scripts (start, dev)
- Dependencies (express, ejs, body-parser, express-session)
- DevDependencies (nodemon)

**Scripts**:
- `npm start` - Run production server
- `npm run dev` - Run development server with auto-reload

#### ⚙️ config.js
**Purpose**: Configuration management
**Size**: ~35 lines
**Contains**:
- Port configuration
- Session settings
- Database configuration (future use)
- Application settings

#### 📝 .env.example
**Purpose**: Environment variables template
**Usage**: Copy to `.env` and customize

#### 🚫 .gitignore
**Purpose**: Specify files to exclude from git
**Ignores**:
- node_modules/
- .env
- Log files
- IDE files

---

### Middleware

#### 🔐 middleware/auth.js
**Purpose**: Authentication middleware
**Size**: ~20 lines
**Functions**:
- `isAuthenticated()` - Check if user is logged in
- `isNotAuthenticated()` - Prevent logged-in users from accessing login page

**Usage**:
```javascript
router.get('/protected', isAuthenticated, (req, res) => {
  // Only logged-in users can access
});
```

---

### Routes

#### 🔑 routes/auth.js
**Purpose**: Authentication routes
**Size**: ~60 lines
**Routes**:
- `GET /auth/login` - Display login page
- `POST /auth/login` - Handle login submission
- `GET /auth/logout` - Logout user

**Session Management**:
- Creates session on successful login
- Stores user info in session
- Destroys session on logout

#### 📊 routes/dashboard.js
**Purpose**: Dashboard and information routes
**Size**: ~40 lines
**Routes**:
- `GET /dashboard` - Main dashboard
- `GET /dashboard/crop-diseases` - Disease information
- `GET /dashboard/food-crops` - Food crops list
- `GET /dashboard/crop-prices` - Market prices
- `GET /dashboard/agricultural-seasons` - Seasonal info
- `GET /dashboard/ai-tools` - AI tools
- `GET /dashboard/research-topics` - Research initiatives

**All routes are protected** (require login)

---

### Views (EJS Templates)

#### 🔐 views/login.ejs
**Purpose**: User login interface
**Size**: ~60 lines
**Components**:
- Header with title
- Login form (username, password)
- Error messages
- Demo credentials table

**Features**:
- Responsive design
- Form validation
- User-friendly error display

#### 📈 views/dashboard.ejs
**Purpose**: Main dashboard page
**Size**: ~95 lines
**Components**:
- Navigation bar
- Sidebar menu
- Dashboard header
- 6 feature cards
- Quick statistics

**Cards Link To**:
- Crop Diseases
- Food Crops
- Crop Prices
- Agricultural Seasons
- AI Tools
- Research Topics

#### 🦠 views/crop-diseases.ejs
**Purpose**: Display crop diseases
**Size**: ~55 lines
**Layout**: Card-based grid
**Shows for Each Disease**:
- Disease name
- Affected crop
- Symptoms
- Treatment
- Prevention

#### 🌱 views/food-crops.ejs
**Purpose**: Display food crops information
**Size**: ~65 lines
**Layout**: Table format
**Columns**:
- Crop Name
- Season
- Water Required
- Yield per Hectare

#### 💰 views/crop-prices.ejs
**Purpose**: Display market prices
**Size**: ~70 lines
**Layout**: Table format
**Columns**:
- Crop name
- Price
- Market type (International/Local)
- Last updated date

#### 📅 views/agricultural-seasons.ejs
**Purpose**: Display farming seasons
**Size**: ~75 lines
**Layout**: Card-based grid
**Info per Season**:
- Season name and months
- Characteristics
- Temperature range
- Suitable crops

#### 🤖 views/ai-tools.ejs
**Purpose**: Showcase AI tools
**Size**: ~70 lines
**Layout**: Card-based grid
**Shows for Each Tool**:
- Tool name
- Description
- Accuracy rate
- Usage area

#### 📚 views/research-topics.ejs
**Purpose**: Display research initiatives
**Size**: ~75 lines
**Layout**: Card-based grid
**Shows for Each Topic**:
- Research title
- Description
- Status (Ongoing/Active/Development)
- Research institution

#### ⚠️ views/404.ejs
**Purpose**: 404 error page
**Size**: ~25 lines
**Components**:
- Error message
- Return to dashboard button
- Logout button

#### ⚠️ views/error.ejs
**Purpose**: Generic error page
**Size**: ~25 lines
**Shows**:
- Error message
- Recovery options

#### 📐 views/layout.ejs
**Purpose**: Base layout template (unused currently)
**Size**: ~40 lines
**For Future Use**: Can be used as master layout

---

### Styling

#### 🎨 public/css/style.css
**Purpose**: All CSS styling
**Size**: ~1200 lines
**Sections**:
- General styles
- Navbar styling
- Login page
- Forms
- Buttons
- Layout
- Sidebar
- Main content
- Cards and grids
- Tables
- Responsive design

**Key Features**:
- CSS variables for color management
- Flexbox and CSS Grid layouts
- Responsive breakpoints (768px, 480px)
- Gradient backgrounds
- Smooth transitions
- Mobile-first design

---

### Data Files

#### 👥 data/users.js
**Purpose**: Sample users database
**Size**: ~25 lines
**Contains**:
- 3 demo users with credentials
- User properties: id, username, password, email, name

**Demo Users**:
```javascript
{ id: 1, username: 'farmer1', password: 'password123', ... }
{ id: 2, username: 'farmer2', password: 'password456', ... }
{ id: 3, username: 'admin', password: 'admin123', ... }
```

#### 🌾 data/crops.js
**Purpose**: Agriculture information database
**Size**: ~200 lines
**Contains**:
- Crop diseases (5 entries)
- Food crops (8 entries)
- Crop prices (8 entries)
- Agricultural seasons (3 seasons)
- AI tools (5 tools)
- Research topics (6 topics)

**Structure**:
```javascript
{
  cropDiseases: [...],
  foodCrops: [...],
  cropPrices: [...],
  agriculturalSeasons: [...],
  aiTools: [...],
  researchTopics: [...]
}
```

---

### Documentation Files

#### 📖 README.md
**Purpose**: Complete project documentation
**Contains**:
- Project overview
- Features list
- Installation instructions
- Project structure
- Configuration
- API routes
- Technologies used
- Security notes
- Future enhancements

#### 📖 INSTALLATION.md
**Purpose**: Detailed installation guide
**Contains**:
- System requirements
- Step-by-step installation
- Configuration
- Verification steps
- Troubleshooting
- Advanced configuration

#### 📖 QUICK_START.md
**Purpose**: Quick getting started guide
**Contains**:
- 3-step setup
- Login credentials
- What to expect
- Troubleshooting tips

#### 📖 STRUCTURE.md
**Purpose**: This file - project structure guide

---

## Data Flow

```
User Request
    ↓
Router (routes/auth.js or routes/dashboard.js)
    ↓
Middleware (middleware/auth.js) - Check authentication
    ↓
Route Handler
    ↓
Get Data (from data/crops.js or data/users.js)
    ↓
Render View (views/*.ejs)
    ↓
Apply Styling (public/css/style.css)
    ↓
Send Response to Browser
```

---

## Key Statistics

| Metric | Count |
|--------|-------|
| Total Files | 25 |
| View Templates | 11 |
| Routes | 2 |
| Middleware Functions | 2 |
| Data Collections | 6 |
| Demo Users | 3 |
| Pages | 9 (Dashboard + 6 sections + 2 error) |
| CSS Lines | ~1,200 |
| Total Code Lines | ~3,000 |

---

## Technology Stack Summary

**Frontend**:
- HTML5 (via EJS)
- CSS3
- Client-side validation

**Backend**:
- Node.js
- Express.js
- Express-session

**Templating**:
- EJS

**Data**:
- In-memory JavaScript objects
- Session storage

---

## How Data Flows Through the App

### Login Flow:
1. User fills form (login.ejs)
2. POST to `/auth/login`
3. Server checks against `data/users.js`
4. On success: Create session, redirect to dashboard
5. On failure: Show error, stay on login

### Dashboard Flow:
1. User visits `/dashboard`
2. Middleware checks authentication
3. Server renders `views/dashboard.ejs`
4. Dashboard loads with 6 card links
5. User clicks link (e.g., crop-diseases)

### Information Flow:
1. User clicks "Crop Diseases"
2. GET request to `/dashboard/crop-diseases`
3. Server loads data from `data/crops.js`
4. Server renders `views/crop-diseases.ejs` with data
5. EJS generates HTML from template
6. Browser receives HTML with styling from `public/css/style.css`
7. Page displays with all information

### Logout Flow:
1. User clicks "Logout"
2. Session is destroyed
3. User redirected to login page
4. All data cleared from session

---

## File Dependencies

```
server.js
├── routes/auth.js
│   └── data/users.js
├── routes/dashboard.js
│   └── data/crops.js
├── middleware/auth.js
└── views/*.ejs
    └── public/css/style.css
```

---

## Best Practices in This Project

✅ **Separation of Concerns**
- Routes in separate files
- Middleware in separate files
- Data in separate files
- Views in separate files

✅ **DRY Principle**
- CSS variables for colors
- Reusable components
- Template inheritance ready

✅ **Security**
- Session-based authentication
- Protected routes
- HttpOnly cookies

✅ **Scalability**
- Modular structure
- Easy to add new routes
- Easy to add new data
- Easy to modify styling

---

## Adding New Features

### Add New Route:
1. Create handler in `routes/dashboard.js`
2. Create view in `views/new-page.ejs`
3. Add link in navigation

### Add New Data:
1. Add to appropriate array in `data/crops.js`
2. Display in corresponding view
3. No frontend changes needed

### Modify Styling:
1. Edit `public/css/style.css`
2. Add to appropriate section
3. Use CSS variables for colors

---

**End of Structure Guide** 📁

For more information, see README.md, INSTALLATION.md, or QUICK_START.md
