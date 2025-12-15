# How to Stop Services on Your Local Laptop

## Currently Running:
- ✅ Next.js dev server (port 3000)
- ✅ ngrok tunnel (port 4040)

## Method 1: Stop in Terminal (If Running in Foreground)

If you started them in a terminal window:
- Press `Ctrl + C` in each terminal window
- This gracefully stops the processes

## Method 2: Kill Processes by Port

### Stop Next.js Dev Server:
```bash
lsof -ti:3000 | xargs kill -9
```

### Stop ngrok:
```bash
lsof -ti:4040 | xargs kill -9
```

### Stop Both at Once:
```bash
lsof -ti:3000 | xargs kill -9 && lsof -ti:4040 | xargs kill -9
```

## Method 3: Find and Kill by Process Name

### Find processes:
```bash
ps aux | grep -E "(next|ngrok)" | grep -v grep
```

### Kill Next.js:
```bash
pkill -f "next dev"
```

### Kill ngrok:
```bash
pkill -f ngrok
```

## Method 4: Activity Monitor (macOS GUI)

1. Open **Activity Monitor** (Cmd + Space, type "Activity Monitor")
2. Search for "next" or "ngrok"
3. Select the process
4. Click "Quit" or "Force Quit"

## Quick Stop Script

Create a simple script to stop everything:

```bash
#!/bin/bash
echo "Stopping Next.js dev server..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || echo "No process on port 3000"
echo "Stopping ngrok..."
lsof -ti:4040 | xargs kill -9 2>/dev/null || echo "No process on port 4040"
echo "Done!"
```

## Verify They're Stopped

Check if ports are free:
```bash
lsof -ti:3000 && echo "Port 3000 still in use" || echo "Port 3000 is free"
lsof -ti:4040 && echo "Port 4040 still in use" || echo "Port 4040 is free"
```

