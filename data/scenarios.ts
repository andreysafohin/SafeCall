/**
 * Scenario Data
 * 
 * Contains predefined call scenarios for the prototype simulation.
 * In a real implementation, these would be replaced with actual audio streams
 * and real-time transcription from speech-to-text services.
 */

export interface CallScenario {
  id: string
  name: string
  callerName: string
  callerAvatar: string
  transcript: string[]
  isScam: boolean
}

export const scenarios: CallScenario[] = [
  {
    id: 'normal-grandson',
    name: 'Normal call from grandson',
    callerName: 'Tom (Grandson)',
    callerAvatar: '👨‍🦱',
    isScam: false,
    transcript: [
      'Hi Grandma! It\'s Tom.',
      'How are you doing today?',
      'I just wanted to call and check in.',
      'Are you feeling okay?',
      'I was thinking we could visit this weekend.',
      'Would that work for you?',
      'Great! I\'ll see you then. Love you!',
    ],
  },
  {
    id: 'fake-bank',
    name: 'Fake bank call (scam)',
    callerName: 'Bank Security',
    callerAvatar: '🏦',
    isScam: true,
    transcript: [
      'Hello, this is your bank security department.',
      'We have detected suspicious activity on your account.',
      'You must verify your identity immediately.',
      'Please provide your account number and PIN.',
      'This is urgent. Your account will be suspended if you don\'t act now.',
      'Do not hang up. Stay on the line.',
      'We need your password to verify your account.',
    ],
  },
  {
    id: 'fake-tax',
    name: 'Fake tax office (scam)',
    callerName: 'IRS Agent',
    callerAvatar: '📞',
    isScam: true,
    transcript: [
      'This is the Internal Revenue Service.',
      'You have an outstanding tax debt.',
      'A warrant has been issued for your arrest.',
      'You must pay immediately via wire transfer.',
      'This is your final notice. Act now or face arrest.',
      'You can pay with gift cards or cryptocurrency.',
      'The amount is five thousand dollars. Transfer it today.',
    ],
  },
]

