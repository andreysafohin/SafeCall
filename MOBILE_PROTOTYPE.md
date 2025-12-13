# SafeCall Mobile Prototype

## Overview

This is a single-page, mobile-like prototype that simulates SafeCall's scam detection in a browser. It features a phone mockup on the left and interactive controls on the right.

## Features

### Phone Simulator
- Realistic mobile phone mockup with rounded corners and shadow
- Call interface with caller name, avatar, and duration timer
- Warning overlay that appears when scams are detected
- Device vibration (Web Vibration API) when warnings trigger

### Call Control Panel
- **Scenario Selection**: Choose from 3 predefined scenarios:
  - Normal call from grandson (safe)
  - Fake bank call (scam)
  - Fake tax office call (scam)
- **Transcript Playback**: Animated line-by-line transcript display
- **Call Controls**: Start, skip to end, replay functionality
- **Risk Score Display**: Real-time risk calculation and display

### Scam Detection
- Simple keyword-based detection (demo implementation)
- Risk scoring (0-100)
- Automatic warning trigger when threshold is reached
- Vibration feedback on supported devices

## File Structure

```
SafeCall/
├── app/
│   ├── page.tsx              # Main page with call simulation logic
│   ├── layout.tsx            # Root layout (navigation removed for prototype)
│   └── globals.css           # Global styles + fade-in animation
├── components/
│   ├── PhoneSimulator.tsx    # Phone mockup with call UI and warning overlay
│   └── CallControlPanel.tsx  # Scenario selection, transcript, controls
├── data/
│   └── scenarios.ts          # Predefined call scenarios with transcripts
└── utils/
    └── scamDetection.ts      # Risk detection logic (keyword-based)
```

## How It Works

1. **Select a Scenario**: Choose one of the three scenarios
2. **Start Call**: Click "Start Call Simulation" to begin
3. **Watch Transcript**: Lines appear every 2 seconds
4. **Detection**: As suspicious keywords are detected, risk score increases
5. **Warning**: When risk reaches threshold (30+), warning overlay appears with vibration
6. **Control**: User can end call, continue anyway, or replay

## Future Integration Points

The code includes comments marking where real implementations would integrate:

- **Audio Processing**: Replace simulated transcripts with real-time audio streams
- **Speech-to-Text (ASR)**: Integrate services like Google Speech-to-Text, AWS Transcribe
- **ML Models**: Replace keyword detection with on-device ML models
- **Telephony APIs**: Connect to real call handling systems
- **Device APIs**: Integrate with native mobile APIs for call controls

## Running the Prototype

```bash
npm run dev
```

Then open http://localhost:3000

## Design Notes

- **Senior-Friendly**: Large fonts, high contrast, clear buttons
- **Mobile-First**: Responsive layout that works on desktop and mobile
- **Accessible**: Large tap targets, clear visual feedback
- **Polished**: Smooth animations, realistic phone mockup, professional appearance

