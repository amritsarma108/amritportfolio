@echo off
echo ========================================
echo Deploying to GitHub Pages...
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm install
echo.

echo Step 2: Building and deploying...
call npm run deploy
echo.

echo ========================================
echo Deployment Complete!
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
