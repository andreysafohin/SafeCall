# How to Share SafeCall Project with Teammates

## Option 1: GitHub (Recommended)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `SafeCall` (or your preferred name)
3. Set to **Private** (for student project) or **Public**
4. **DO NOT** check "Initialize with README" (we already have files)
5. Click "Create repository"

### Step 2: Push Your Code
Run these commands in the SafeCall directory:

```bash
cd /Users/antiphish/Documents/Project/SafeCall

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/SafeCall.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Share with Teammates
- Send them the repository URL: `https://github.com/YOUR_USERNAME/SafeCall`
- They can clone it with: `git clone https://github.com/YOUR_USERNAME/SafeCall.git`
- Then run `npm install` and `npm run dev`

---

## Option 2: Create a Zip File

### Create Zip (excluding node_modules):
```bash
cd /Users/antiphish/Documents/Project
zip -r SafeCall.zip SafeCall -x "SafeCall/node_modules/*" "SafeCall/.next/*" "SafeCall/.git/*"
```

Then share the `SafeCall.zip` file via:
- Email
- Google Drive / Dropbox
- Shared folder
- Messaging app

**Note:** Teammates will need to:
1. Extract the zip
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start

---

## Option 3: Deploy to Vercel (Free Hosting)

### Quick Deploy:
1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository (after pushing to GitHub)
5. Vercel will auto-detect Next.js and deploy
6. Share the public URL with teammates

**Benefits:**
- Free hosting
- Automatic deployments
- Public URL everyone can access
- No need to run locally

---

## Option 4: Google Drive / Dropbox

1. Create a zip file (see Option 2)
2. Upload to Google Drive or Dropbox
3. Share the link with teammates
4. They download, extract, and run `npm install`

---

## Recommended Workflow for Team

1. **One person** creates GitHub repo and pushes initial code
2. **All teammates** clone the repository
3. **Everyone** can make changes and push updates
4. Use GitHub Issues for task tracking
5. Use Pull Requests for code review (optional)

---

## Quick Setup for Teammates

After cloning/downloading, teammates should run:

```bash
cd SafeCall
npm install
npm run dev
```

Then open http://localhost:3000

---

## Files Already Excluded (in .gitignore)

- `node_modules/` - Dependencies (reinstalled with `npm install`)
- `.next/` - Build files (regenerated)
- `.env*.local` - Local environment variables
- `*.log` - Log files

These don't need to be shared!

