te_path>
c:/Users/user/Desktop/amrits/setup-git.ps1</absolute_path>
<parameter name="content"># GitHub Deployment Script for Amrit Portfolio
# Run this in PowerShell

Write-Host "=== Git Setup for Amrit Portfolio ===" -ForegroundColor Green

# Check if git is available
$gitPath = Get-Command git -ErrorAction SilentlyContinue
if ($gitPath) {
    Write-Host "Git found: $($gitPath.Source)" -ForegroundColor Green
    
    # Initialize git
    Write-Host "`nInitializing git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit - Portfolio project"
    git branch -M main
    
    Write-Host "`nGit repository initialized!" -ForegroundColor Green
    Write-Host "`nNext steps:" -ForegroundColor Cyan
    Write-Host "1. Install GitHub CLI: https://github.com/cli/cli/releases"
    Write-Host "2. Run: gh auth login"
    Write-Host "3. Run: gh repo create amrit-portfolio --public --source=. --push"
} else {
    Write-Host "Git is not installed. Please install Git first." -ForegroundColor Red
    Write-Host "Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
}

Write-Host "`n=== Done ===" -ForegroundColor Green
