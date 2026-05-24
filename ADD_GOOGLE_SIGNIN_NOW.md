# ✅ STEP-BY-STEP: Add Google Sign-In (5 Minutes)

## 🎯 Your Goal
Get the "Sign in with Google" button to appear on the login page, just like the email login.

---

## Step 1️⃣: Open Google Cloud Console

**Click this link:** https://console.cloud.google.com/

- Sign in with your Google account
- If you don't have one, create it for free

---

## Step 2️⃣: Create a Project

1. At the top of the page, click the **project dropdown**
2. Click **"New Project"**
3. Enter name: `AGRI AI`
4. Click **"Create"**
5. Wait 1-2 minutes for it to appear

---

## Step 3️⃣: Enable Google+ API

1. In left menu, click **"APIs & Services"**
2. Click blue **"Enable APIs and Services"** button
3. Search for: `Google Plus API`
4. Click the first result
5. Click **"Enable"**
6. Wait for it to finish

---

## Step 4️⃣: Create OAuth Credentials

1. In left menu, click **"Credentials"**
2. Click **"Create Credentials"** (blue button)
3. Choose: **"OAuth 2.0 Client ID"**

If you see "Configure OAuth consent screen first":
   - Click **"Configure Consent Screen"**
   - Choose **"External"**
   - Click **"Create"**
   - Fill in: App name = `AGRI AI`
   - Add your email in two fields
   - Click **"Save and Continue"** multiple times
   - Click **"Back to Dashboard"**

4. Now try **"Create Credentials"** → **"OAuth 2.0 Client ID"** again

---

## Step 5️⃣: Configure OAuth Client

1. Choose: **"Web application"**
2. Name: `AGRI AI - Local`
3. Scroll to **"Authorized redirect URIs"**
4. Click **"Add URI"**
5. Enter exactly: `http://localhost:3000/auth/google/callback`
6. Click **"Create"**

---

## Step 6️⃣: Copy Your Credentials

A dialog box appears showing:

```
Client ID: 123456789-abcdefg.apps.googleusercontent.com
Client Secret: GOCSPX-xxxxx
```

**👉 Copy both of these!** 📋

---

## Step 7️⃣: Add to .env File

1. Open `.env` file (in project root)
2. Find these lines:
```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

3. Paste YOUR credentials (no quotes!):
```
GOOGLE_CLIENT_ID=123456789-abcdefg.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-xxxxx
```

4. **Save** (Ctrl+S)

---

## Step 8️⃣: Restart Server

In your terminal:
```
Ctrl+C  (stop current server)
npm start  (start it again)
```

---

## Step 9️⃣: Test It!

1. Go to: http://localhost:3000/auth/login
2. You should now see: **"Sign in with Google"** button
3. Click it
4. Select your Google account
5. **You're logged in!** ✅

---

## ✅ Done!

Now you have:
- ✅ Email/Password login
- ✅ **Google Sign-In**
- ✅ Guest access
- ✅ Full dashboard

**All working together!** 🚀

---

**Stuck?** See: GOOGLE_OAUTH_SETUP.md for detailed troubleshooting
