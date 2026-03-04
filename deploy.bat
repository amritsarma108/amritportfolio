@echo off
git init
git add .
git commit -m "Initial commit - Portfolio project"
git branch -M main
echo.
echo Git repository initialized!
echo.
echo Please run: gh auth login
echo Then provide your repo URL when asked
pause
