# Complete Installation Guide 📋

## Table of Contents
1. [System Requirements](#system-requirements)
2. [Installation Steps](#installation-steps)
3. [Configuration](#configuration)
4. [Running the Application](#running-the-application)
5. [Verification](#verification)
6. [Troubleshooting](#troubleshooting)

---

## System Requirements

### Minimum Requirements
- **Operating System**: Windows, macOS, or Linux
- **Node.js**: v14.0.0 or higher
- **npm**: v6.0.0 or higher
- **RAM**: 512 MB minimum
- **Disk Space**: 500 MB for node_modules
- **Browser**: Any modern browser (Chrome, Firefox, Safari, Edge)

### Recommended Requirements
- **Node.js**: v16.0.0 or higher
- **npm**: v8.0.0 or higher
- **RAM**: 2 GB or more
- **Disk Space**: 1 GB available

---

## Installation Steps

### Step 1: Check Node.js and npm Installation

Open your terminal/command prompt and verify installations:

#### Windows (PowerShell or Command Prompt):
```bash
node --version
npm --version
```

#### macOS/Linux (Terminal):
```bash
node --version
npm --version
```

Expected output:
```
v16.13.0  (or higher)
8.1.0     (or higher)
```

### Step 2: Install Node.js (if not installed)

#### Windows
1. Visit https://nodejs.org/
2. Download the LTS version (recommended)
3. Run the installer and follow prompts
4. Accept default settings
5. Restart your computer

#### macOS
Using Homebrew:
```bash
brew install node
```

Or download from https://nodejs.org/

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install nodejs npm
```

### Step 3: Navigate to Project Directory

#### Windows (PowerShell):
```bash
cd "d:\Agri AI"
```

#### Windows (Command Prompt):
```bash
cd d:\Agri AI
```

#### macOS/Linux:
```bash
cd /path/to/Agri\ AI
```

Verify you're in the correct directory:
```bash
dir          # Windows
ls           # macOS/Linux
```

You should see:
- `package.json`
- `server.js`
- `views/`
- `routes/`
- `middleware/`
- `data/`
- `public/`

### Step 4: Install Project Dependencies

```bash
npm install
```

This command:
1. Reads package.json
2. Downloads all required packages
3. Creates node_modules/ directory
4. Generates package-lock.json

Expected duration: 2-5 minutes (depends on internet speed)

You should see output like:
```
added 150 packages in 45s
```

### Step 5: Verify Installation

Check if node_modules was created:

#### Windows:
```bash
dir node_modules
```

#### macOS/Linux:
```bash
ls node_modules
```

You should see folders like:
- `express`
- `ejs`
- `body-parser`
- `express-session`

---

## Configuration

### Step 1: Create Environment File (Optional)

Copy the example environment file:

#### Windows:
```bash
copy .env.example .env
```

#### macOS/Linux:
```bash
cp .env.example .env
```

### Step 2: Edit Environment Variables (Optional)

Edit `.env` file with your text editor:

```
PORT=3000
SESSION_SECRET=your-secure-secret-here
NODE_ENV=development
```

### Step 3: Verify Configuration

Check `server.js` for the port setting:
```javascript
const PORT = process.env.PORT || 3000;
```

---

## Running the Application

### Method 1: Development Mode (with auto-reload)

First, install nodemon globally (optional):
```bash
npm install -g nodemon
```

Then run:
```bash
npm run dev
```

Expected output:
```
✓ Agriculture Information Website running on http://localhost:3000
Press Ctrl+C to stop the server
```

### Method 2: Production Mode

```bash
npm start
```

Expected output:
```
✓ Agriculture Information Website running on http://localhost:3000
Press Ctrl+C to stop the server
```

### Method 3: Direct Node Command

```bash
node server.js
```

---

## Verification

### Step 1: Check Server is Running

If you see this message, the server is running successfully:
```
✓ Agriculture Information Website running on http://localhost:3000
```

### Step 2: Open Application in Browser

1. Open your web browser (Chrome, Firefox, etc.)
2. Go to: **http://localhost:3000**
3. You should see the login page

### Step 3: Test Login

1. Enter credentials:
   - Username: `farmer1`
   - Password: `password123`
2. Click "Login"
3. You should see the Dashboard

### Step 4: Test Navigation

Try clicking on different menu items:
- 📊 Dashboard
- 🦠 Crop Diseases
- 🌱 Food Crops
- 💰 Crop Prices
- 📅 Agricultural Seasons
- 🤖 AI Tools
- 📚 Research Topics

All should load without errors.

### Step 5: Test Logout

1. Click "Logout" button in top-right
2. You should be redirected to login page

---

## Troubleshooting

### Issue 1: `npm: command not found`

**Cause**: Node.js or npm is not installed or not in PATH

**Solution**:
1. Install Node.js from https://nodejs.org/
2. Restart terminal/command prompt
3. Verify: `npm --version`

### Issue 2: `Cannot find module 'express'`

**Cause**: Dependencies not installed

**Solution**:
```bash
npm install
```

### Issue 3: Port 3000 Already in Use

**Cause**: Another application is using port 3000

**Solutions**:

Option A - Use different port (Windows):
```bash
$env:PORT=3001; npm start
```

Option B - Use different port (macOS/Linux):
```bash
PORT=3001 npm start
```

Option C - Find and close process using port 3000

#### Windows:
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### macOS/Linux:
```bash
lsof -i :3000
kill -9 <PID>
```

### Issue 4: EACCES Permission Error (macOS/Linux)

**Cause**: Permission issues

**Solution**:
```bash
sudo npm install
```

Or use a Node version manager (nvm):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
npm install
```

### Issue 5: Database/Connection Errors

**Cause**: Trying to connect to external database

**Solution**: 
- The demo uses in-memory data
- No database connection needed
- Check server.js for any connection code

### Issue 6: Page Shows Blank or 404

**Cause**: Session or routing issue

**Solution**:
1. Clear browser cookies
2. Hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. Try incognito/private window
4. Restart your server

### Issue 7: Styling Not Loading

**Cause**: CSS file not found

**Solution**:
1. Check `public/css/style.css` exists
2. Verify path in HTML: `/css/style.css`
3. Clear browser cache
4. Restart server

### Issue 8: Error in Console

**Cause**: Various issues

**Solution**:
1. Check browser console (F12 > Console)
2. Check terminal output
3. Look for specific error message
4. Check file paths and permissions

---

## Advanced Configuration

### Change Session Secret

In `server.js`, change:
```javascript
secret: 'your-secret-key-change-in-production'
```

To a secure string (production):
```javascript
secret: 'aK9$mL2@xP1#nQ8%jF5&hG3!vZ7^cR4'
```

### Increase Session Timeout

In `server.js`, change:
```javascript
maxAge: 24 * 60 * 60 * 1000 // 24 hours
```

To:
```javascript
maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
```

### Enable HTTPS

```javascript
cookie: {
    secure: true, // Enable for production
    httpOnly: true,
    sameSite: 'strict'
}
```

---

## Next Steps

After successful installation:

1. **Customize Data**: Edit files in `data/` folder
2. **Modify Styling**: Edit `public/css/style.css`
3. **Add Features**: Create new routes in `routes/`
4. **Add Users**: Edit `data/users.js`
5. **Deploy**: See README.md for deployment options

---

## Getting Help

### Common Questions

**Q: Can I change the port?**
A: Yes, set `PORT` environment variable or edit server.js

**Q: How do I add more users?**
A: Edit `data/users.js` and add new user objects

**Q: Is the database local or remote?**
A: Currently uses in-memory data (can be modified)

**Q: Can I use this in production?**
A: Add authentication, use a real database, secure cookies

### Resources

- **Node.js Documentation**: https://nodejs.org/docs/
- **Express Documentation**: https://expressjs.com/
- **EJS Documentation**: https://ejs.co/
- **npm Documentation**: https://docs.npmjs.com/

---

## Installation Checklist

- ✅ Node.js installed (v14+)
- ✅ npm installed (v6+)
- ✅ Navigated to project directory
- ✅ Dependencies installed (`npm install`)
- ✅ Environment configured (optional)
- ✅ Server started (`npm start` or `npm run dev`)
- ✅ Application accessible (`http://localhost:3000`)
- ✅ Login successful
- ✅ Dashboard loads
- ✅ All pages accessible

---

**Installation Complete! 🎉**

Your Agriculture Information Website is ready to use!

Start the server with: `npm start` or `npm run dev`

Access at: http://localhost:3000
