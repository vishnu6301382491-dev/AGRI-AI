# Quick Start Guide 🌾

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

### 3. Open in Browser
Go to: **http://localhost:3000**

---

## Login Credentials

Use these to access the application:

```
Username: farmer1
Password: password123
```

or

```
Username: farmer2
Password: password456
```

or

```
Username: admin
Password: admin123
```

---

## What to Expect

1. You'll see a login page with a welcome message
2. Enter credentials and click Login
3. You'll be redirected to the Dashboard
4. Use the sidebar to navigate between sections:
   - 📊 Dashboard
   - 🦠 Crop Diseases
   - 🌱 Food Crops
   - 💰 Crop Prices
   - 📅 Agricultural Seasons
   - 🤖 AI Tools
   - 📚 Research Topics

5. Click "Logout" in the top-right to log out

---

## File Structure

```
Agri AI/
├── server.js           # Main app
├── package.json        # Dependencies
├── middleware/auth.js  # Auth logic
├── routes/             # API routes
├── views/              # HTML templates
├── public/css/         # Styling
└── data/               # Sample data
```

---

## Troubleshooting

**Error: Cannot find module**
```bash
npm install
```

**Port 3000 already in use**
Edit server.js and change the PORT to 3001 or 3002

**Blank page**
- Check browser console for errors
- Ensure all files are in correct directories
- Restart the server

---

## Key Features

✅ Login Authentication
✅ Protected Dashboard
✅ 6 Information Sections
✅ Responsive Design
✅ Session Management
✅ Beautiful UI

---

**Enjoy exploring agriculture information! 🌾**
