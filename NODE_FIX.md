# 🚨 NODE VERSION FIX

## Problem
You're running Node.js 18.20.2, but Next.js 16 requires Node.js 20.9.0+

## ✅ Solution (Choose One)

### Option 1: Use the Start Script (Easiest)
```bash
cd /Users/ginakomsary/Code/surfing-canggu
./start.sh
```

This script will:
- Automatically switch to Node 20
- Install dependencies
- Start the dev server

### Option 2: Manual nvm Commands
```bash
cd /Users/ginakomsary/Code/surfing-canggu

# Switch to Node 20
nvm use 20

# If not installed, install it first
nvm install 20
nvm use 20

# Then run dev server
npm run dev
```

### Option 3: Set Node 20 as Default
```bash
nvm alias default 20
nvm use default
cd /Users/ginakomsary/Code/surfing-canggu
npm run dev
```

### Option 4: Use .nvmrc (Automatic)
We'll create an .nvmrc file so nvm automatically uses Node 20:

```bash
cd /Users/ginakomsary/Code/surfing-canggu
nvm use
npm run dev
```

---

## Why This Happened

- Node 18 is currently active in your terminal
- Next.js 16 requires Node 20.9.0+
- nvm (Node Version Manager) is installed and has Node 20
- You just need to switch to Node 20

---

## Quick Fix (Copy & Paste)

```bash
cd /Users/ginakomsary/Code/surfing-canggu && nvm use 20 && npm run dev
```

Or use the start script:

```bash
cd /Users/ginakomsary/Code/surfing-canggu && ./start.sh
```

---

## For Future Terminal Sessions

Add this to your `~/.zshrc` or `~/.bash_profile`:

```bash
# Auto-load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Auto-use .nvmrc if present
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

Then run: `source ~/.zshrc`

---

## Verify It's Working

After switching to Node 20:

```bash
node --version
# Should show: v20.x.x

npm run dev
# Should start successfully!
```

---

## 🎯 Summary

**The issue**: Node 18 active, need Node 20
**The fix**: Run `./start.sh` or `nvm use 20 && npm run dev`
**Time to fix**: 5 seconds

Your site is ready to run, just need to switch Node versions! 🚀
