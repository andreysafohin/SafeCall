/**
 * Scam Detection Utility
 * 
 * This is a SIMPLIFIED, DEMO-ONLY implementation for the prototype.
 * 
 * FUTURE: In a real implementation, this would be replaced with:
 * - Real-time audio stream processing
 * - ML models for sentiment analysis and voice pattern recognition
 * - AI-generated voice detection
 * - Integration with speech-to-text services (ASR)
 * - On-device processing for privacy
 */

// Suspicious keywords that commonly appear in scam calls
const SUSPICIOUS_KEYWORDS = [
  'urgent',
  'act now',
  'immediately',
  'right away',
  'transfer',
  'bank account',
  'password',
  'verification code',
  'fine',
  'penalty',
  'arrest',
  'warrant',
  'suspended',
  'verify',
  'confirm',
  'social security',
  'ssn',
  'pin',
  'gift cards',
  'bitcoin',
  'cryptocurrency',
  'wire transfer',
  'don\'t hang up',
  'stay on the line',
  'never tell anyone',
  'keep this secret',
]

/**
 * Analyzes a single line of transcript for scam indicators
 * 
 * @param line - A single line of transcript text
 * @returns true if the line contains suspicious keywords
 */
export function detectSuspiciousLine(line: string): boolean {
  const lowerLine = line.toLowerCase()
  return SUSPICIOUS_KEYWORDS.some((keyword) => lowerLine.includes(keyword))
}

/**
 * Calculates a risk score based on detected suspicious lines
 * 
 * @param suspiciousCount - Number of suspicious lines detected
 * @returns Risk score from 0-100
 */
export function calculateRiskScore(suspiciousCount: number): number {
  // Simple linear scoring: each suspicious line adds ~15 points
  return Math.min(100, suspiciousCount * 15)
}

/**
 * Determines if a warning should be shown based on risk score
 * 
 * @param riskScore - Current risk score (0-100)
 * @returns true if warning threshold is met
 */
export function shouldShowWarning(riskScore: number): boolean {
  // Show warning when risk score reaches 30 (about 2 suspicious lines)
  return riskScore >= 30
}

