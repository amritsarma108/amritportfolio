@echo off
echo ========================================
echo Setting up Git and Deploying to GitHub Pages
echo ========================================
echo.

echo Step 1: Initializing Git...
git init
echo.

echo Step 2: Adding remote origin...
git remote add origin https://github.com/amritsarma108/amritportfolio.git
echo.

echo Step 3: Adding all files...
git add .
echo.

echo Step 4: Committing files...
git commit -m "Configure for GitHub Pages deployment"
echo.

echo Step 5: Setting up branch...
git branch -M main
echo.

echo Step 6: Pushing to main branch...
git push -u origin main
echo.

echo Step 7: Installing dependencies...
call npm install
echo.

echo Step 8: Building and deploying to gh-pages...
call npm run deploy
echo.

echo ========================================
echo Setup and Deployment Complete!
echo ========================================
echo.
echo 1. Go to: https://github.com/amritsarma108/amritportfolio/settings/pages
echo 2. Under "Build and deployment":
echo    - Source: Select "Deploy from a branch"
echo    - Branch: Select "gh-pages" and folder "/ (root)"
echo 3. Click Save
echo.
echo Your site will be live at:
echo https://amritsarma108.github.io/amritportfolio
echo.
pause
