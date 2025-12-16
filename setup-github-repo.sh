#!/bin/bash

# GitHub Repository Creation Script
# Author: JonSvitna
# Date: $(date +%Y-%m-%d)
# Description: Automates the setup of a GitHub repository and scaffolds a project.

echo "🚀 Starting GitHub repository and project setup..."

# Step 1: Name Your Repository
echo "Enter the name of your new GitHub repository:"
read REPO_NAME

# Step 2: Add Repository Description
echo "Enter a description for your repository:"
read REPO_DESC

# Step 3: Public or Private
echo "Do you want this repository to be Public or Private? (public/private):"
read REPO_VISIBILITY

# Step 4: Create GitHub Repository via GitHub CLI
echo "Creating repository $REPO_NAME on GitHub..."
gh repo create $REPO_NAME --desc "$REPO_DESC" --$REPO_VISIBILITY --confirm

# Step 5: Clone the New Repository Locally
echo "Cloning the repository to the local machine..."
git clone https://github.com/$(gh auth status --json username -q .username)/$REPO_NAME.git
cd $REPO_NAME

# Step 6: Initialize the Project Structure
echo "Initializing the project structure..."
mkdir -p assets/css assets/js assets/images components
touch index.html README.md .gitignore

# Step 7: Add .gitignore
echo "Adding default .gitignore for a web project..."
cat << 'EOF' > .gitignore
node_modules
dist
.env
*.log
.DS_Store
EOF

# Step 8: Add Boilerplate "README.md"
echo "Adding a default README.md..."
cat << EOF > README.md
# $REPO_NAME

## Description
$REPO_DESC

## Repository Information
- **Author:** JonSvitna
- **Date Created:** $(date)

## Features
- Black, white, and gold color scheme for a modern photography website.
- Includes portfolio and contact pages.

## Getting Started
### Project Setup
1. Clone the repository:
    \`\`\`bash
    git clone https://github.com/\$(gh auth status --json username -q .username)/$REPO_NAME.git
    cd $REPO_NAME
    \`\`\`
2. Install dependencies (if applicable, e.g., for TailwindCSS or Node.js):
    \`\`\`bash
    npm install
    \`\`\`

### Deployment
For demoing the site, Vercel is recommended:
\`\`\`bash
vercel --prod
\`\`\`
EOF

# Step 9: Add Boilerplate "index.html"
echo "Adding boilerplate HTML..."
cat << EOF > index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Photography Co. | Capturing intimate and unforgettable moments.">
    <title>Photography Co. | DMV Wedding Photography</title>
    <link rel="stylesheet" href="./assets/css/styles.css">
</head>
<body class="bg-black text-white">
    <header>
        <!-- Navigation Menu -->
        <nav class="flex justify-between items-center p-4 bg-black">
            <a href="index.html" class="text-gold text-3xl font-serif">Photography Co.</a>
            <ul class="flex space-x-6">
                <li><a href="portfolio.html" class="text-white hover:text-gold">Portfolio</a></li>
                <li><a href="services.html" class="text-white hover:text-gold">Services</a></li>
                <li><a href="about.html" class="text-white hover:text-gold">About</a></li>
                <li><a href="contact.html" class="text-white hover:text-gold">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1 class="text-center text-gold text-5xl font-serif m-8">Welcome to Photography Co.</h1>
        <p class="text-center text-xl text-white font-sans">Capturing your intimate and unforgettable moments with style and artistry.</p>
        <div class="text-center mt-8">
            <a href="contact.html" class="bg-gold text-black font-serif p-4 rounded-full hover:opacity-90">Book Now</a>
        </div>
    </main>
    <footer class="bg-white text-black text-center p-4">
        <p>&copy; $(date +%Y) Photography Co. | All Rights Reserved</p>
    </footer>
</body>
</html>
EOF

# Step 10: Initialize TailwindCSS (Optional)
if command -v npm &> /dev/null
then
    echo "Setting up TailwindCSS..."
    npm init -y
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
    mkdir -p assets/css
    echo "@tailwind base;" > assets/css/tailwind.css
    echo "@tailwind components;" >> assets/css/tailwind.css
    echo "@tailwind utilities;" >> assets/css/tailwind.css
fi

# Step 11: Stage and Commit
echo "Staging and committing all files..."
git add .
git commit -m "Initial commit: Setup project structure and files"

# Step 12: Push to GitHub
echo "Pushing to GitHub..."
git push origin main

# Step 13: Deploy to Vercel (Optional)
if command -v vercel &> /dev/null
then
    echo "Deploying to Vercel..."
    vercel --prod
    echo "🎉 Your project is live on Vercel!"
else
    echo "Vercel CLI not found. Skipping deployment."
    echo "You can manually deploy by running:"
    echo "vercel --prod"
fi

echo "✅ GitHub repository and project setup complete!"
