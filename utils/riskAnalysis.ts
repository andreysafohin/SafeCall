/**
 * Risk Analysis Utility
 * 
 * This is a SIMPLIFIED, DEMO-ONLY implementation for the prototype.
 * In a real implementation, this would:
 * - Process actual audio streams in real-time
 * - Use ML models for sentiment analysis, voice pattern recognition
 * - Detect AI-generated voice characteristics
 * - Analyze conversation flow and context
 * - Integrate with speech-to-text services
 * 
 * For now, this analyzes text input for common scam indicators.
 */

export type RiskLevel = 'Low' | 'Medium' | 'High'

export interface RiskAnalysisResult {
  riskLevel: RiskLevel
  score: number // 0-100
  feedback: string
  detectedPatterns: string[]
}

// High-risk trigger words and phrases that scammers commonly use
const HIGH_RISK_PATTERNS = [
  'act now',
  'immediately',
  'right away',
  'urgent',
  'emergency',
  'suspended',
  'arrest',
  'lawsuit',
  'warrant',
  'transfer money',
  'wire transfer',
  'gift cards',
  'bitcoin',
  'cryptocurrency',
  'verify your account',
  'confirm your identity',
  'social security number',
  'ssn',
  'pin number',
  'password',
  'never tell anyone',
  'keep this secret',
  'don\'t hang up',
  'stay on the line',
]

// Medium-risk patterns
const MEDIUM_RISK_PATTERNS = [
  'bank account',
  'credit card',
  'payment',
  'overdue',
  'bill',
  'refund',
  'prize',
  'winner',
  'congratulations',
  'limited time',
  'expires today',
  'call back',
  'press 1',
]

// Pressure/manipulation indicators
const PRESSURE_PATTERNS = [
  'must',
  'have to',
  'required',
  'mandatory',
  'no choice',
  'only way',
  'last chance',
  'final notice',
]

/**
 * Analyzes a call transcript (text) for scam indicators
 * 
 * @param text - The call transcript or script to analyze
 * @returns RiskAnalysisResult with risk level, score, and feedback
 * 
 * FUTURE: This function would be replaced with:
 * - Real-time audio stream processing
 * - ML model inference (e.g., TensorFlow.js, ONNX Runtime)
 * - Integration with speech-to-text APIs
 * - Voice biometric analysis
 */
export function analyzeCallRisk(text: string): RiskAnalysisResult {
  if (!text || text.trim().length === 0) {
    return {
      riskLevel: 'Low',
      score: 0,
      feedback: 'No text provided to analyze.',
      detectedPatterns: [],
    }
  }

  const lowerText = text.toLowerCase()
  const detectedPatterns: string[] = []
  let riskScore = 0

  // Check for high-risk patterns
  HIGH_RISK_PATTERNS.forEach((pattern) => {
    if (lowerText.includes(pattern.toLowerCase())) {
      detectedPatterns.push(pattern)
      riskScore += 5
    }
  })

  // Check for medium-risk patterns
  MEDIUM_RISK_PATTERNS.forEach((pattern) => {
    if (lowerText.includes(pattern.toLowerCase())) {
      detectedPatterns.push(pattern)
      riskScore += 2
    }
  })

  // Check for pressure patterns
  PRESSURE_PATTERNS.forEach((pattern) => {
    if (lowerText.includes(pattern.toLowerCase())) {
      detectedPatterns.push(pattern)
      riskScore += 3
    }
  })

  // Normalize score to 0-100
  const normalizedScore = Math.min(100, riskScore * 2)

  // Determine risk level
  let riskLevel: RiskLevel
  let feedback: string

  if (normalizedScore >= 60) {
    riskLevel = 'High'
    feedback = `⚠️ HIGH RISK: This call contains multiple scam indicators including urgency tactics, requests for money transfers, or requests for sensitive information. We strongly recommend ending this call and verifying the caller's identity through official channels.`
  } else if (normalizedScore >= 30) {
    riskLevel = 'Medium'
    feedback = `⚠️ MEDIUM RISK: This call shows some concerning patterns such as pressure tactics or requests for financial information. Be cautious and verify the caller's identity before sharing any personal or financial details.`
  } else {
    riskLevel = 'Low'
    feedback = `✓ LOW RISK: This call appears relatively safe, but always remain cautious. Remember: legitimate organizations will never pressure you to act immediately or ask for sensitive information over the phone.`
  }

  return {
    riskLevel,
    score: normalizedScore,
    feedback,
    detectedPatterns: Array.from(new Set(detectedPatterns)), // Remove duplicates
  }
}

