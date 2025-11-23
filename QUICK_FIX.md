# Quick Fix for npm Execution Policy Issue

## Option 1: Fix Execution Policy (Recommended)

Run this command in your PowerShell window:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

When prompted, type `Y` and press Enter.

Then verify npm works:
```powershell
npm --version
```

## Option 2: Use Command Prompt Instead

If PowerShell continues to have issues, you can use Command Prompt (cmd.exe) instead:

1. Open Command Prompt (cmd.exe)
2. Navigate to your project:
   ```cmd
   cd "C:\Users\Metac\OneDrive\Desktop\Temple Site"
   ```
3. Run npm commands:
   ```cmd
   npm --version
   npm install
   npm run dev
   ```

## Option 3: Run npm via cmd from PowerShell

You can also run npm commands through cmd from PowerShell:

```powershell
cmd /c npm --version
cmd /c npm install
cmd /c npm run dev
```

## Option 4: Use the fix script

Run the provided fix script:
```powershell
.\fix-npm.ps1
```

---

**Note:** The execution policy is a Windows security feature. Setting it to `RemoteSigned` allows local scripts (like npm) to run while still requiring downloaded scripts to be signed. This is safe and commonly used for development.


