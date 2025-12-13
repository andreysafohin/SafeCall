'use client'

import { useState } from 'react'
import Link from 'next/link'
import { analyzeCallRisk, type RiskAnalysisResult } from '@/utils/riskAnalysis'

export default function DemoPage() {
  const [callText, setCallText] = useState('')
  const [analysisResult, setAnalysisResult] = useState<RiskAnalysisResult | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  // Example call scripts for quick testing
  const exampleScripts = [
    {
      name: 'Bank Scam',
      text: 'Hello, this is your bank. Your account has been suspended due to suspicious activity. You must verify your identity immediately by providing your social security number and PIN. Do not hang up, stay on the line.',
    },
    {
      name: 'Government Scam',
      text: 'This is the IRS. You have an outstanding tax debt and a warrant has been issued for your arrest. You must pay immediately via wire transfer or gift cards to avoid arrest. Act now, this is urgent.',
    },
    {
      name: 'Legitimate Call',
      text: 'Hi, this is Sarah from the local community center. I wanted to let you know about our upcoming event next week. Would you like to hear more about it?',
    },
  ]

  const handleAnalyze = () => {
    if (!callText.trim()) {
      alert('Please enter some text to analyze.')
      return
    }

    setIsAnalyzing(true)
    
    // Simulate a brief processing delay for better UX
    setTimeout(() => {
      const result = analyzeCallRisk(callText)
      setAnalysisResult(result)
      setIsAnalyzing(false)
    }, 500)
  }

  const handleExampleClick = (text: string) => {
    setCallText(text)
    setAnalysisResult(null)
  }

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'High':
        return 'bg-red-100 border-red-500 text-red-900'
      case 'Medium':
        return 'bg-yellow-100 border-yellow-500 text-yellow-900'
      case 'Low':
        return 'bg-green-100 border-green-500 text-green-900'
      default:
        return 'bg-gray-100 border-gray-500 text-gray-900'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-primary-600 text-lg hover:underline">
            ← Back to home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          SafeCall Demo
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12">
          Try SafeCall's risk analysis by entering or pasting a call transcript below.
        </p>

        {/* Example Scripts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Try an example:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {exampleScripts.map((example, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(example.text)}
                className="card text-left hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="font-semibold text-lg mb-2">{example.name}</div>
                <div className="text-sm text-gray-600">Click to load example</div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Section */}
        <div className="card mb-8">
          <label htmlFor="call-text" className="block text-xl font-semibold mb-4">
            Enter or paste call transcript:
          </label>
          <textarea
            id="call-text"
            value={callText}
            onChange={(e) => {
              setCallText(e.target.value)
              setAnalysisResult(null)
            }}
            placeholder="Type or paste the call transcript here... For example: 'Hello, this is your bank. You must verify your account immediately...'"
            className="w-full h-48 p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none resize-y"
          />
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !callText.trim()}
            className="btn-primary mt-6 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Call'}
          </button>
        </div>

        {/* Results Section */}
        {analysisResult && (
          <div className={`card border-4 ${getRiskColor(analysisResult.riskLevel)}`}>
            <div className="mb-4">
              <h2 className="text-3xl font-bold mb-2">Analysis Result</h2>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold">
                  Risk Level: {analysisResult.riskLevel}
                </span>
                <span className="text-xl">
                  Score: {analysisResult.score}/100
                </span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xl leading-relaxed">{analysisResult.feedback}</p>
            </div>

            {analysisResult.detectedPatterns.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Detected Patterns:</h3>
                <div className="flex flex-wrap gap-2">
                  {analysisResult.detectedPatterns.map((pattern, index) => (
                    <span
                      key={index}
                      className="bg-white px-4 py-2 rounded-lg text-lg font-medium shadow-sm"
                    >
                      {pattern}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Info Box */}
        <div className="card bg-blue-50 border-blue-200 mt-8">
          <h3 className="text-xl font-semibold mb-2">ℹ️ About This Demo</h3>
          <p className="text-lg">
            This is a simplified prototype for demonstration purposes. In a real implementation, SafeCall would:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-lg ml-4">
            <li>Process actual audio streams in real-time</li>
            <li>Use advanced ML models for voice pattern recognition</li>
            <li>Detect AI-generated voice characteristics</li>
            <li>Analyze conversation flow and emotional cues</li>
            <li>Run analysis directly on your device for privacy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

