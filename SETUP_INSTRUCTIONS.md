# Setup Instructions

## Step 1: Install Node.js

Node.js is required to run this React project. It includes `npm` (Node Package Manager).

### Download and Install Node.js:

1. **Visit the official Node.js website:**
   - Go to: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version for Windows
   - Choose the Windows Installer (.msi) - 64-bit version

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - **Important:** Make sure to check the box that says "Automatically install the necessary tools" (this includes npm)
   - Click "Next" through all steps and finish the installation

3. **Verify Installation:**
   - Close and reopen your PowerShell/Command Prompt
   - Run these commands to verify:
     ```powershell
     node --version
     npm --version
     ```
   - You should see version numbers (e.g., v20.x.x and 10.x.x)

## Step 2: Install Project Dependencies

Once Node.js is installed, navigate to your project folder and run:

```powershell
npm install
```

This will install all the required packages for the React project.

## Step 3: Start Development Server

After installation completes, start the development server:

```powershell
npm run dev
```

The site will be available at `http://localhost:5173`

## Step 4: Build for Production

When you're ready to deploy:

```powershell
npm run build
```

The production files will be in the `dist` folder.

---

## Troubleshooting

### If npm is still not recognized after installing Node.js:

1. **Restart your computer** - This ensures environment variables are updated
2. **Check PATH environment variable:**
   - Open System Properties → Environment Variables
   - Ensure Node.js installation path is in your PATH
   - Default path: `C:\Program Files\nodejs\`

### Alternative: Use Node Version Manager (nvm-windows)

If you prefer managing multiple Node.js versions:
1. Download nvm-windows from: https://github.com/coreybutler/nvm-windows/releases
2. Install nvm-windows
3. Run: `nvm install lts` then `nvm use lts`


