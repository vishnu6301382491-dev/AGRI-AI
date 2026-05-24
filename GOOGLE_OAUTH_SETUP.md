# 🔐 Google OAuth Setup Guide - AGRI AI

## ✅ What's Fixed

The "Error 400: invalid_request" has been resolved by:
- Creating `.env` file with proper configuration
- Updated login page to show configuration message when credentials are empty
- No more error popups when Google Sign-In isn't set up

Now you can either:
1. **Skip Google** - Use email/password login only (currently working ✅)
2. **Add Google** - Follow the steps below to enable Google Sign-In

---

## 🚀 How to Enable Google Sign-In

### Step 1: Create a Google Cloud Project

1. Go to **[Google Cloud Console](https://console.cloud.google.com/)**
2. If you don't have an account, create one at **[Google Account](https://accounts.google.com/signup)**
3. Click **"Select a Project"** → **"New Project"**
4. Name it: `AGRI AI` 
5. Click **"Create"**
6. Wait for the project to be created (1-2 minutes)

### Step 2: Enable Google+ API

1. In Google Cloud Console, go to **APIs & Services**
2. Click **"Enable APIs and Services"** button
3. Search for: `Google Plus API` or `Identity`
4. Click on **"Google+ API"** result
5. Click **"Enable"**

### Step 3: Create OAuth Credentials

1. Go to **Credentials** (left menu)
2. Click **"Create Credentials"** → **"OAuth 2.0 Client ID"**
3. If prompted, configure OAuth consent screen first:
   - User Type: **External** (faster for testing)
   - Click **"Create"**
4. Fill in OAuth Consent Form:
   - App name: `AGRI AI`
   - User support email: *(your email)*
   - Developer contact: *(your email)*
   - Click **"Save and Continue"**
5. Scopes page: Click **"Save and Continue"** (defaults are fine)
6. Review and click **"Back to Dashboard"**

### Step 4: Create OAuth Client

1. Go back to **Credentials**
2. Click **"Create Credentials"** → **"OAuth 2.0 Client ID"**
3. Choose: **Web application**
4. Name: `AGRI AI - Local Dev`
5. Under **"Authorized redirect URIs"**, click **"Add URI"**
   - For **Local Development**: `http://localhost:3000/auth/google/callback`
   - For **Production**: `https://yourdomain.com/auth/google/callback`
6. Click **"Create"**
7. A dialog shows your credentials - **COPY THESE!**

### Step 5: Add Credentials to AGRI AI

1. Open `.env` file in project root
2. Find these lines:
   ```
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   ```
3. Paste your credentials:
   ```
   GOOGLE_CLIENT_ID=your-client-id-here.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=your-secret-here
   ```
4. **Save the file**

### Step 6: Restart Server

1. Stop the server: **Ctrl+C** in terminal
2. Start it again:
   ```bash
   npm start
   ```
3. Visit: http://localhost:3000/auth/login
4. Now you should see the **"Sign in with Google"** button! ✅

---

## ✅ How to Test

### Test Email/Password (Works Now!)
```
1. Go to http://localhost:3000/auth/signup
2. Sign up with any email/password
3. You're automatically logged in
4. Go to dashboard
```

### Test Google Sign-In (After Setup)
```
1. Go to http://localhost:3000/auth/login
2. Click "Sign in with Google"
3. Select your Google account
4. You should be logged in!
```

---

## 🐛 Troubleshooting

### Issue: Still seeing "Error 400: invalid_request"
**Solution:**
- [ ] Did you add credentials to `.env` file?
- [ ] Did you restart the server? (npm start)
- [ ] Is the Client ID empty in `.env`?
- [ ] Try clearing browser cache (Ctrl+Shift+Delete)

### Issue: "Redirect URI mismatch" error
**Solution:**
- Got a different error from Google? 
- In Google Cloud Console → Credentials
- Edit the OAuth client
- Add missing redirect URI:
  - `http://localhost:3000/auth/google/callback` (for local)
  - `https://yourdomain.com/auth/google/callback` (for production)

### Issue: "The resource doesn't exist" in Cloud Console
**Solution:**
- You might have deleted the project
- Create a new one and repeat the steps above

### Issue: Google button not showing
**Solution:**
- Check that `.env` file has:
  ```
  GOOGLE_CLIENT_ID=abc123... (NOT empty)
  GOOGLE_CLIENT_SECRET=xyz789...
  ```
- Server must be restarted after editing `.env`
- Check browser console (F12 → Console) for JavaScript errors

---

## 🔒 Security Notes

### Local Development
- ✅ Use `http://localhost:3000` URL
- ✅ Fine to commit `.env` with placeholders to git
- ❌ Never commit actual Client Secret!

### Production Deployment
- ✅ Use HTTPS URL (https://yourdomain.com)
- ✅ Add production domain to Google OAuth URIs
- ✅ Update `.env` with production credentials
- ✅ Set `NODE_ENV=production` in `.env`
- ✅ Never expose `.env` file publicly
- ✅ Use environment variables on your hosting platform

### .gitignore
Already has:
```
.env          ← Prevents accidental upload
.env.local    ← Local overrides
```

---

## 📱 How Users Sign In

### Email/Password (Already Working ✅)
```
1. Visit http://localhost:3000/auth/login
2. Enter email and password
3. Click "Sign In"
4. Dashboard loads
```

### Google (After Setup)
```
1. Visit http://localhost:3000/auth/login
2. Click "Sign in with Google"
3. Select your Google account (or log in)
4. Authorize AGRI AI app
5. Dashboard loads with your info
```

---

## 📚 Common Configurations

### Development (Local)
```env
NODE_ENV=development
GOOGLE_CLIENT_ID=123456789.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abc123...
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
```

### Production (Heroku/Vercel)
```env
NODE_ENV=production
GOOGLE_CLIENT_ID=987654321.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-xyz789...
GOOGLE_CALLBACK_URL=https://agri-ai.herokuapp.com/auth/google/callback
```

---

## 🎯 What Works Now

| Feature | Status | Notes |
|---------|--------|-------|
| Email/Password Sign Up | ✅ Working | go to `/auth/signup` |
| Email/Password Login | ✅ Working | go to `/auth/login` |
| Google Sign-In (Disabled) | 🔧 Setup Needed | Follow this guide |
| Dashboard Access | ✅ Working | Login or use as guest |
| Predictions Tracking | ✅ Working | Guests and users |
| Analytics | ✅ Working | Real-time stats |

---

## ❓ Need Help?

### Check These Files
- `.env` - Your credentials go here
- `routes/auth.js` - Authentication logic
- `views/login.ejs` - Login page
- `views/signup.ejs` - Sign up page

### Debug Mode
```bash
# See all requests/errors
NODE_ENV=development npm start
```

---

## 🎉 You're All Set!

Once you complete the setup:
- ✅ Users can sign up with email/password
- ✅ Users can sign in with email/password  
- ✅ Users can sign in with Google
- ✅ Or guests can use the app without logging in
- ✅ Predictions are tracked for everyone

**Happy farming! 🌾**

---

*Last Updated: February 2025*  
*AGRI AI v2.0*
