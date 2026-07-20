# Study Well Public School — Portal

A school portal with an admin (Principal-only) dashboard and a read-only
student view, backed by a real, permanent database (Firebase Firestore) so
**no data is ever lost on refresh** — no matter which device or browser
someone uses.

---

## ⚠️ Before you do anything else: set up Firebase (free, ~10 minutes)

This app needs its own Firebase project to store data. Without this step,
the app will run but **nothing will save**.

### Step 1 — Create the Firebase project
1. Go to https://console.firebase.google.com/
2. Click **Add project** → give it any name (e.g. `study-well-school`) → follow the prompts (Google Analytics is optional, you can turn it off) → **Create project**.

### Step 2 — Create the database (Firestore)
1. In the left sidebar, click **Build → Firestore Database**.
2. Click **Create database**.
3. Choose **Start in production mode** → pick a location close to you (e.g. `asia-south1` for India) → **Enable**.
4. Go to the **Rules** tab and replace the contents with:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /school/{doc} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```
   This means: **anyone can view** the notices/students (so students don't need to log in), but **only a signed-in admin can change anything**.
5. Click **Publish**.

### Step 3 — Turn on Admin Login (Firebase Authentication)
1. In the left sidebar, click **Build → Authentication**.
2. Click **Get started**.
3. Click **Email/Password** → enable the first toggle → **Save**.
4. Go to the **Users** tab → **Add user**.
5. Enter the Principal's email and a password (this is the real login for the admin dashboard — write it down safely). You can add more than one admin user later the same way.

### Step 4 — Get your config keys
1. Click the ⚙️ gear icon (top left, next to "Project Overview") → **Project settings**.
2. Scroll down to **Your apps** → click the **`</>`** (Web) icon.
3. Give the app a nickname (e.g. `school-portal`) → **Register app**.
4. You'll see a code block with `const firebaseConfig = { ... }`. Copy those values.
5. Open `src/App.jsx` in this project, find this block near the top, and paste your real values in:
   ```js
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID",
   };
   ```

### Step 5 — Allow your domains
1. Still in **Authentication**, go to the **Settings** tab → **Authorized domains**.
2. Add your GitHub Pages domain, e.g. `yourusername.github.io` (add this after you know your Pages URL from the deployment step below).

That's it — Firebase is ready. Data now lives in Firestore, not in the browser, so it survives refreshes, browser changes, and even a different device entirely.

---

## Run it locally (to test before deploying)

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

---

## Deploy to GitHub Pages

1. Create a new GitHub repository and push this project to it.
2. In `vite.config.js`, set `base` to match your repo name exactly, e.g. if your repo is `github.com/yourname/study-well-portal`, keep `base: "/study-well-portal/"`.
3. Install the deploy helper and publish:
   ```bash
   npm install
   npm run build
   npm run deploy
   ```
4. In your GitHub repo → **Settings → Pages**, set the source branch to `gh-pages` (created automatically by the command above).
5. Your site will be live at `https://yourusername.github.io/study-well-portal/`.
6. Go back to Firebase → Authentication → Settings → Authorized domains, and add `yourusername.github.io` if you haven't already.

---

## Logging in

- **Students**: no login needed for browsing public info; for the student dashboard, use the Roll Number + Date of Birth you (the admin) set for them.
- **Principal / Admin**: use the email + password you created in Firebase Authentication → Users (Step 3 above). This is a real, secure login — the password is never stored in the app or the database, Firebase manages it.

## Changing the admin password later

Settings → Change Password (inside the app, while logged in), or directly in Firebase Console → Authentication → Users.

## Adding more admins

Firebase Console → Authentication → Users → Add user. Any of them can log in as Principal.

## If something looks wrong

Log in as admin → **Settings → Data & Storage Status** → click **"Check what's actually saved on the server"**. It will show you exactly what Firestore has right now, and the real error message if something is broken (usually a wrong config value or a Firestore rule typo).
