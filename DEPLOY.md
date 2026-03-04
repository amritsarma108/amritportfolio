te_path>
c:/Users/user/Desktop/amrits/DEPLOY.md</absolute_path>
<parameter name="content">

# Deployment Instructions for Amrit Sharma Portfolio

## Step 1: Open a NEW Terminal (Command Prompt - NOT PowerShell)

Press `Win + R`, type `cmd`, press Enter.

## Step 2: Navigate to the project folder

```
cd C:\Users\user\Desktop\amrits
```

## Step 3: Initialize Git (run these commands one by one)

```
git init
git add .
git commit -m "Initial commit - Portfolio project"
git branch -M main
```

## Step 4: Install GitHub CLI & Authenticate

If you don't have GitHub CLI installed, download from:
https://github.com/cli/cli/releases/latest

Then run:
```
gh auth login
```
- Select: GitHub.com
- Select: HTTPS
- Select: Login with a web browser
- Copy the one-time code shown

## Step 5: Create GitHub Repository & Push

```
gh repo create amrits-portfolio --public --source=. --push
```

Or if you want to create it manually:
1. Go to https://github.com/new
2. Create a new repository named "amrits-portfolio"
3. Run:
```
git remote add origin https://github.com/YOUR_USERNAME/amrits-portfolio.git
git push -u origin main
```

## Step 6: Deploy to GitHub Pages

Go to your repository on GitHub.com:
1. Settings → Pages
2. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
   - Folder: /
3. Click Save
4. Wait 2-3 minutes for deployment

Your site will be live at: https://YOUR_USERNAME.github.io/amrits-portfolio/

---

## Quick Alternative: Vercel Deployment

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy"

Your site will be live in about 30 seconds!

---

## Project Already Built Successfully! ✅

The `dist/` folder contains the production build and is ready for deployment.
