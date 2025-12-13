# SafeCall - Voice-Based Scam Detection for Seniors

A clickable prototype for a university presentation demonstrating a voice-based scam detection solution for seniors.

## Project Structure

```
SafeCall/
├── app/
│   ├── demo/
│   │   └── page.tsx          # Interactive demo page with call analysis
│   ├── pricing/
│   │   └── page.tsx          # Pricing details page
│   ├── globals.css           # Global styles and Tailwind directives
│   ├── layout.tsx            # Root layout with navigation and footer
│   └── page.tsx              # Landing page with all sections
├── components/
│   └── Navigation.tsx        # Top navigation component
├── utils/
│   └── riskAnalysis.ts       # Risk analysis logic (demo implementation)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Navigate to the SafeCall directory:
   ```bash
   cd SafeCall
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

### Landing Page (`/`)
- **Hero Section**: Product introduction and primary CTA
- **Problem Section**: Explains the phone scam problem for seniors
- **How It Works**: 4-step process visualization
- **Key Features**: Real-time analysis, privacy, senior-friendly UI, family peace of mind
- **Pricing Summary**: Highlights the €9.99/month plan
- **Team Section**: Displays all four team members
- **Footer**: Disclaimer about student project

### Demo Page (`/demo`)
- Interactive text input for call transcripts
- Example scripts (Bank Scam, Government Scam, Legitimate Call)
- Real-time risk analysis with:
  - Risk level (Low/Medium/High)
  - Risk score (0-100)
  - Detailed feedback
  - Detected scam patterns
- Color-coded results for easy understanding

### Pricing Page (`/pricing`)
- Detailed pricing information
- What's included in the plan
- FAQ section
- Important disclaimer about prototype status

## Technical Details

### Risk Analysis Logic

The risk analysis (`utils/riskAnalysis.ts`) is a **simplified demo implementation** that:
- Analyzes text input for common scam trigger words
- Detects urgency patterns, pressure tactics, and suspicious requests
- Assigns risk levels based on detected patterns
- Provides user-friendly feedback

**Future Implementation Notes:**
- This would be replaced with real-time audio stream processing
- ML models for sentiment analysis and voice pattern recognition
- AI-generated voice detection
- Speech-to-text integration
- On-device processing for privacy

### Design Principles

- **Senior-Friendly**: Large fonts (18px base), high contrast, simple layouts
- **Accessible**: Clear navigation, large click targets (60px min height for buttons)
- **Responsive**: Works on mobile and desktop
- **Clean UI**: Tailwind CSS for consistent styling, subtle shadows, clear hierarchy

## Build for Production

```bash
npm run build
npm start
```

## Notes

- This is a **prototype** for demonstration purposes only
- No backend or database is implemented
- Risk analysis uses dummy logic (text pattern matching)
- All data is client-side only
- Not a real commercial product

## Team

- Glutting Erik – Market analysis, ethical & security considerations
- Safokhin Andrei – Pricing model, financial planning
- Medina García Carlos – Customer personas, work packages, time plan
- Pitic Emanuel – Technical solution description, team structure

