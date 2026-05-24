# 🚀 QUICK GOOGLE SIGN-IN SETUP (5 Minutes)

## Step 1: Go to Google Cloud Console
👉 **https://console.cloud.google.com/**

- Sign in with your Google account (create one if needed)
- Click **"Select a Project"** → **"New Project"**
- Name: `AGRI AI`
- Click **"Create"**

---

## Step 2: Enable Google+ API

1. In the left menu, click **"APIs & Services"**
2. Click **"Enable APIs and Services"** (blue button)
3. Search: `Google Plus API`
4. Click the result
5. Click **"Enable"**

---

## Step 3: Create OAuth Credentials

1. Go to **"Credentials"** (left menu)
2. Click **"Create Credentials"** → **"OAuth 2.0 Client ID"**
3. If you see "Configure OAuth consent screen first":
   - User Type: **External**
   - Click **"Create"**
   - Fill in app name: `AGRI AI`
   - Add your email twice (user support + developer contact)
   - Click **"Save and Continue"** 2-3 times
   - Click **"Back to Dashboard"**

4. Now click **"Create Credentials"** → **"OAuth 2.0 Client ID"** again

5. Choose: **Web application**

6. Fill in:
   - **Name**: `AGRI AI - Local`
   - **Authorized redirect URIs**: Click **"Add URI"**
   - Add: `http://localhost:3000/auth/google/callback`
   - Click **"Create"**

---

## Step 4: Copy Your Credentials

A dialog pops up showing:
```
Client ID: xxxxx.apps.googleusercontent.com
Client Secret: GOCSPX-xxxxx
```

**COPY BOTH!** 📋

---

## Step 5: Add to `.env` File

1. Open `.env` file in project (root folder)

2. Find:
```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

3. Replace with your credentials:
```
GOOGLE_CLIENT_ID=123456789-abcdefg.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-yoursecrethere
```

4. **Save** (Ctrl+S)

---

## Step 6: Restart Server

In terminal:
```bash
# Stop server
Ctrl + C

# Start it again
npm start
```

---

## ✅ Test It!

1. Go to: **http://localhost:3000/auth/login**
2. You should see **"Sign in with Google"** button (below email field)
3. Click it
4. Select your Google account
5. **You're logged in!** ✅

---

## 📋 Troubleshooting

### Still doesn't show?
- [ ] Did you save `.env` file?
- [ ] Did you restart server? (npm start)
- [ ] Did you copy credentials correctly?
- [ ] Clear browser cache (Ctrl+Shift+Delete)

### Getting error from Google?
- [ ] Check redirect URI: `http://localhost:3000/auth/google/callback`
- [ ] Must exactly match in Google Cloud Console
- [ ] For production, add: `https://yourdomain.com/auth/google/callback`

---

## 🎉 Done!

Now your app has:
- ✅ Email/Password login
- ✅ Email/Password signup
- ✅ **Google Sign-In**
- ✅ Guest access
- ✅ Full dashboard

**All working together!** 🚀

---

**Need detailed help?** See: `GOOGLE_OAUTH_SETUP.md`
