#!/bin/bash

# 🏄 Surfing in Canggu - Setup Script

echo "╔══════════════════════════════════════════════════════════════════════════╗"
echo "║                                                                          ║"
echo "║            🏄 SURFING IN CANGGU - SETUP & RUN SCRIPT                     ║"
echo "║                                                                          ║"
echo "╚══════════════════════════════════════════════════════════════════════════╝"
echo ""

# Check if nvm is available
if [ -s "$HOME/.nvm/nvm.sh" ]; then
    echo "✅ Loading nvm..."
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
else
    echo "❌ nvm not found. Please install nvm first:"
    echo "   https://github.com/nvm-sh/nvm#installing-and-updating"
    exit 1
fi

# Switch to Node 20
echo "🔄 Switching to Node.js 20..."
nvm use 20

if [ $? -ne 0 ]; then
    echo "❌ Failed to switch to Node 20"
    echo "📥 Installing Node 20..."
    nvm install 20
    nvm use 20
fi

# Verify Node version
NODE_VERSION=$(node --version)
echo "✅ Using Node.js $NODE_VERSION"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "╔══════════════════════════════════════════════════════════════════════════╗"
echo "║  🚀 Starting development server...                                       ║"
echo "╚══════════════════════════════════════════════════════════════════════════╝"
echo ""
echo "   Open your browser to: http://localhost:3000"
echo ""

# Start development server
npm run dev
