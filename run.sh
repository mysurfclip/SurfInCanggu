#!/bin/bash

# Quick run script - auto-loads Node 20 and starts dev server

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node 20
nvm use

# Run dev server
npm run dev
