# 🔐 Authentication System - Setup & Configuration Guide

## ✅ Changes Made

### **Removed:**
- ❌ All demo credentials (farmer1, farmer2, admin accounts)
- ❌ Demo credentials table from login page
- ❌ Username-based authentication

### **Added:**
- ✅ **Sign Up** page with full account creation
- ✅ **Sign In** page with email/password authentication
- ✅ **Google OAuth** integration (Sign in with Google)
- ✅ **Password hashing** with bcryptjs
- ✅ Password validation and confirmation
- ✅ Email validation and duplicate checking
- ✅ Modern, responsive authentication UI

---

## 🚀 New Authentication Features

### 1. **Sign Up (`/auth/signup`)**
Users can create a new account with:
- Full Name
- Email Address
- Password (minimum 6 characters)
- Password confirmation

**Security Features:**
- Passwords are hashed using bcryptjs (10 salt rounds)
- Email uniqueness validation
- Password length validation
- Password confirmation matching

### 2. **Sign In (`/auth/login`)**
Users can sign in with:
- Email Address
- Password

**Features:**
- Secure password comparison with bcrypt
- Account existence validation
- Clear error messages

### 3. **Google Sign In**
Users can sign in using Google OAuth 2.0:
- One-click authentication
- Automatic account creation
- No password required

---

## 🔑 Setup Google OAuth (Required for Sign with Google)

### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown and select "New Project"
3. Enter project name: `AGRI AI`
4. Click "Create"

### Step 2: Enable OAuth 2.0
1. In the left sidebar, go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **OAuth client ID**
3. If prompted, configure the OAuth consent screen first:
   - Choose User Type: **External**
   - Add required scopes: `email`, `profile`, `openid`
   - Add your email as a test user

### Step 3: Get OAuth Credentials
1. OAuth client ID type: **Web application**
2. Add Authorized redirect URIs:
   ```
   http://localhost:3000/auth/google/callback
   http://localhost:3000/auth/login
   ```
3. Copy your **Client ID** and **Client Secret**

### Step 4: Update .env File
Create or update `.env` file in project root:

```env
# Google OAuth
GOOGLE_CLIENT_ID=your-client-id-from-google-console
GOOGLE_CLIENT_SECRET=your-client-secret-from-google-console
```

Restart the server:
```bash
npm start
```

---

## 📁 Files Changed

### Created:
- ✅ `views/signup.ejs` - Sign-up form page

### Updated:
- ✅ `routes/auth.js` - Completely rewritten with new auth logic
- ✅ `views/login.ejs` - Redesigned with Google Sign In button
- ✅ `data/users.js` - Changed from demo data to empty array
- ✅ `package.json` - Added bcryptjs, passport, passport-google-oauth20
- ✅ `.env.example` - Added Google OAuth configuration

---

## 🔐 New Dependencies

```json
{
  "bcryptjs": "^2.4.3",      // Password hashing
  "passport": "^0.7.0",       // Authentication middleware
  "passport-google-oauth20": "^2.0.0",  // Google OAuth strategy
  "passport-local": "^1.0.0"  // Email/password strategy
}
```

Install with:
```bash
npm install
```

---

## 📊 User Model Structure

Each user now has this structure:
```javascript
{
  id: "uuid-unique-id",
  fullname: "John Farmer",
  email: "farmer@example.com",
  password: "bcrypt-hashed-password",  // null for OAuth users
  googleId: "google123...",            // null for email/password users
  created_at: Date,
  provider: "local" | "google" | "both"
}
```

---

## 🌐 API Endpoints

### Authentication Routes

#### Sign Up
- **GET** `/auth/signup` - Display sign-up form
- **POST** `/auth/signup` - Create new account

#### Sign In
- **GET** `/auth/login` - Display login form
- **POST** `/auth/login` - Email/password authentication

#### Google OAuth
- **POST** `/auth/google-signin` - Handle Google sign-in callback

#### Logout
- **GET** `/auth/logout` - Destroy session and logout

---

## 🔄 User Registration Flow

### Email/Password Sign Up
```
1. User visits /auth/signup
2. Fills in Full Name, Email, Password, Confirm Password
3. Form validates on server
4. Password is hashed with bcryptjs
5. User is created and stored
6. Session is created
7. User is redirected to /dashboard
```

### Email/Password Sign In
```
1. User visits /auth/login
2. Enters Email and Password
3. Email is looked up in user database
4. Password is compared with hash using bcrypt
5. Session is created on match
6. User is redirected to /dashboard
```

### Google Sign In
```
1. User clicks "Sign in with Google"
2. Google OAuth flow completes
3. User info is sent to /auth/google-signin
4. User is created if doesn't exist
5. Session is created
6. User is redirected to /dashboard
```

---

## 🛡️ Security Features

- ✅ **Password Hashing**: bcryptjs with 10 salt rounds
- ✅ **Session Management**: Express sessions with secure cookies
- ✅ **Validation**: Email and password validation
- ✅ **OAuth**: Google OAuth 2.0 for social login
- ✅ **HTTPS Ready**: Secure flag on cookies for production
- ✅ **No Plain Passwords**: All passwords are hashed

---

## 🧪 Testing the System

### Test Sign Up
```bash
# Visit the form
http://localhost:3000/auth/signup

# Try creating an account with:
- Full Name: Test User
- Email: test@example.com
- Password: TestPassword123
- Confirm: TestPassword123
```

### Test Sign In
```bash
# Visit the form
http://localhost:3000/auth/login

# Sign in with the account just created
- Email: test@example.com
- Password: TestPassword123
```

### Test Google Sign In
```bash
# Visit login page
http://localhost:3000/auth/login

# Only works if GOOGLE_CLIENT_ID is set in .env
# Click "Sign in with Google" button
```

---

## ⚙️ Configuration in Production

Before deploying to production:

1. **Update Session Secret**: Change `SESSION_SECRET` in `.env`
   ```env
   SESSION_SECRET=your-very-secure-random-string-here
   ```

2. **Enable HTTPS**: Set cookies to secure
   ```javascript
   cookie: { 
     secure: true,  // Only send over HTTPS
     httpOnly: true,
     sameSite: 'strict'
   }
   ```

3. **Use Real Database**: Replace in-memory users with MongoDB/PostgreSQL
   ```javascript
   // Current: const users = [];
   // Production: Connect to database
   ```

4. **Update Google OAuth Redirect URLs**: Add production URLs
   ```
   https://yourdomain.com/auth/google/callback
   https://yourdomain.com/auth/login
   ```

5. **Environment Variables**: Create `.env` file (from `.env.example`)

---

## 🔑 Environment Variables

Required for full functionality:

```env
# Required
PORT=3000
SESSION_SECRET=your-secret-key

# Optional - For Google Sign In
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Other
NODE_ENV=development
APP_NAME=AGRI AI
APP_URL=http://localhost:3000
```

---

## 🆘 Troubleshooting

### "Google sign-in not working"
- **Solution**: Add `GOOGLE_CLIENT_ID` to `.env` file and restart server

### "Sign up returns password mismatch"
- **Solution**: Make sure both password fields are identical

### "Email already registered error"
- **Solution**: Use a different email address or log in if already registered

### "Cannot find module 'bcryptjs'"
- **Solution**: Run `npm install` to install dependencies

---

## 📚 Next Steps

1. ✅ Set up Google OAuth credentials
2. ✅ Test all authentication flows
3. ✅ Deploy to production environment
4. ✅ Integrate with real database (MongoDB/PostgreSQL)
5. ✅ Add email verification
6. ✅ Add password reset functionality
7. ✅ Add two-factor authentication

---

**Status**: ✅ New authentication system is now live and ready for testing!

Start the server and visit:
- Sign Up: http://localhost:3000/auth/signup
- Sign In: http://localhost:3000/auth/login
