# Script to fix npm execution policy issue
# Run this script in PowerShell: .\fix-npm.ps1

Write-Host "Checking execution policy..." -ForegroundColor Yellow
Get-ExecutionPolicy -List

Write-Host "`nAttempting to set execution policy for CurrentUser..." -ForegroundColor Yellow
try {
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
    Write-Host "Execution policy updated successfully!" -ForegroundColor Green
} catch {
    Write-Host "Could not change execution policy automatically." -ForegroundColor Red
    Write-Host "Please run this command manually in PowerShell (as Administrator if needed):" -ForegroundColor Yellow
    Write-Host "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser" -ForegroundColor Cyan
}

Write-Host "`nChecking if npm is available..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "npm is working! Version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "npm is not accessible. Trying alternative method..." -ForegroundColor Yellow
    
    # Try using cmd.exe to run npm
    Write-Host "`nYou can also try running npm commands using cmd:" -ForegroundColor Yellow
    Write-Host "cmd /c npm --version" -ForegroundColor Cyan
    Write-Host "cmd /c npm install" -ForegroundColor Cyan
}

Write-Host "`nDone!" -ForegroundColor Green


