# How Teammates Can Push Changes

## Current Status
- Repository: **Public** (anyone can view)
- Push access: **Only collaborators** (must be added by repository owner)

## Adding Teammates as Collaborators

### Option 1: Via GitHub Web Interface (Easiest)

1. Go to: https://github.com/andreysafohin/SafeCall/settings/access
2. Click "Add people" or "Invite a collaborator"
3. Enter your teammates' GitHub usernames or email addresses
4. They will receive an email invitation
5. Once they accept, they can push changes

### Option 2: Via GitHub CLI

```bash
# Add a collaborator (replace USERNAME with teammate's GitHub username)
gh repo add-collaborator andreysafohin/SafeCall USERNAME

# Example:
# gh repo add-collaborator andreysafohin/SafeCall erikglutting
```

## For Teammates: How to Push Changes

### Step 1: Clone the Repository (First Time)
```bash
git clone https://github.com/andreysafohin/SafeCall.git
cd SafeCall
npm install
```

### Step 2: Make Changes
Edit files, add features, etc.

### Step 3: Commit and Push
```bash
# Check what changed
git status

# Add your changes
git add .

# Commit with a message
git commit -m "Add new feature: [describe what you did]"

# Push to GitHub
git push origin main
```

### Step 4: Pull Latest Changes (Before Starting Work)
Always pull latest changes before starting:
```bash
git pull origin main
```

## Workflow Best Practices

### 1. Always Pull Before Starting
```bash
git pull origin main
```

### 2. Create Feature Branches (Optional but Recommended)
```bash
# Create a new branch for your feature
git checkout -b feature/your-feature-name

# Make changes, commit
git add .
git commit -m "Add feature X"

# Push your branch
git push origin feature/your-feature-name

# Then create a Pull Request on GitHub for review
```

### Step 3: Resolve Conflicts
If someone else pushed changes while you were working:
```bash
git pull origin main
# Fix any conflicts if needed
git add .
git commit -m "Merge conflicts resolved"
git push origin main
```

## Quick Reference

**Repository URL:** https://github.com/andreysafohin/SafeCall

**Clone command:**
```bash
git clone https://github.com/andreysafohin/SafeCall.git
```

**Daily workflow:**
```bash
git pull origin main    # Get latest changes
# Make your changes
git add .
git commit -m "Your commit message"
git push origin main    # Push your changes
```

## Troubleshooting

### "Permission denied" error?
- Make sure you've been added as a collaborator
- Check that you've accepted the invitation email
- Verify you're logged into GitHub CLI: `gh auth status`

### "Updates were rejected" error?
- Someone else pushed changes first
- Run: `git pull origin main` to merge their changes
- Then try pushing again: `git push origin main`

### Need to authenticate?
```bash
gh auth login
```

