'use client'

import React, { useState, useEffect, useCallback } from 'react'
import PhoneSimulator from '@/components/PhoneSimulator'
import CallControlPanel from '@/components/CallControlPanel'
import { scenarios, type CallScenario } from '@/data/scenarios'
import {
  detectSuspiciousLine,
  calculateRiskScore,
  shouldShowWarning,
} from '@/utils/scamDetection'

/**
 * Mobile Demo Page - Mobile Call Simulation Prototype
 * 
 * This page demonstrates SafeCall's scam detection in a mobile-like interface.
 * 
 * FUTURE: In a real implementation, this would:
 * - Connect to actual telephony APIs for real call handling
 * - Integrate with speech-to-text (ASR) services for real-time transcription
 * - Use ML models running on-device for scam detection
 * - Process actual audio streams instead of simulated transcripts
 * - Integrate with device permissions for microphone access
 */
export default function MobileDemoPage() {
  const [selectedScenario, setSelectedScenario] = useState<CallScenario | null>(
    scenarios[0]
  )
  const [isCalling, setIsCalling] = useState(false)
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [callDuration, setCallDuration] = useState(0)
  const [riskScore, setRiskScore] = useState(0)
  const [suspiciousCount, setSuspiciousCount] = useState(0)
  const [showWarning, setShowWarning] = useState(false)
  const [transcript, setTranscript] = useState<string[]>([])

  // Timer for call duration
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isCalling) {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isCalling])

  // Transcript playback animation
  useEffect(() => {
    if (!isCalling || !selectedScenario) return

    const transcriptLines = selectedScenario.transcript
    if (currentLineIndex >= transcriptLines.length) {
      setIsCalling(false)
      return
    }

    // Add next line every 2 seconds
    const timeout = setTimeout(() => {
      const nextLine = transcriptLines[currentLineIndex]
      setTranscript((prev) => [...prev, nextLine])
      setCurrentLineIndex((prev) => prev + 1)

      // Check for suspicious patterns in the new line
      if (detectSuspiciousLine(nextLine)) {
        const newSuspiciousCount = suspiciousCount + 1
        setSuspiciousCount(newSuspiciousCount)
        const newRiskScore = calculateRiskScore(newSuspiciousCount)
        setRiskScore(newRiskScore)

        // Show warning if threshold is reached
        if (shouldShowWarning(newRiskScore) && !showWarning) {
          setShowWarning(true)

          // Trigger device vibration if supported
          // FUTURE: In a real implementation, this would be part of a more
          // sophisticated alert system integrated with the device's notification API
          if ('vibrate' in navigator) {
            try {
              // Vibration pattern: vibrate 200ms, pause 100ms, vibrate 200ms
              navigator.vibrate([200, 100, 200])
            } catch (error) {
              // Vibration API may not be available or may throw errors
              // Silently fail in prototype
              console.debug('Vibration not available:', error)
            }
          }
        }
      }
    }, 2000) // 2 second delay between lines

    return () => clearTimeout(timeout)
  }, [
    isCalling,
    currentLineIndex,
    selectedScenario,
    suspiciousCount,
    showWarning,
  ])

  const handleStartCall = useCallback(() => {
    if (!selectedScenario) return

    // Reset state
    setTranscript([])
    setCurrentLineIndex(0)
    setCallDuration(0)
    setRiskScore(0)
    setSuspiciousCount(0)
    setShowWarning(false)
    setIsCalling(true)
  }, [selectedScenario])

  const handleEndCall = useCallback(() => {
    setIsCalling(false)
    setShowWarning(false)
    setCurrentLineIndex(0)
    setCallDuration(0)
    setRiskScore(0)
    setSuspiciousCount(0)
    setTranscript([])
  }, [])

  const handleDismissWarning = useCallback(() => {
    setShowWarning(false)
  }, [])

  const handleContinueAnyway = useCallback(() => {
    setShowWarning(false)
    // Call continues, but warning is dismissed
  }, [])

  const handleSkipToEnd = useCallback(() => {
    if (!selectedScenario) return
    const fullTranscript = selectedScenario.transcript
    setTranscript(fullTranscript)
    setCurrentLineIndex(fullTranscript.length)
    setIsCalling(false)

    // Calculate final risk score
    const finalSuspiciousCount = fullTranscript.filter((line) =>
      detectSuspiciousLine(line)
    ).length
    const finalRiskScore = calculateRiskScore(finalSuspiciousCount)
    setRiskScore(finalRiskScore)
    setSuspiciousCount(finalSuspiciousCount)

    if (shouldShowWarning(finalRiskScore)) {
      setShowWarning(true)
      if ('vibrate' in navigator) {
        try {
          navigator.vibrate([200, 100, 200])
        } catch (error) {
          console.debug('Vibration not available:', error)
        }
      }
    }
  }, [selectedScenario])

  const handleReplay = useCallback(() => {
    handleEndCall()
    // Small delay to ensure state is reset
    setTimeout(() => {
      handleStartCall()
    }, 100)
  }, [handleEndCall, handleStartCall])

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            SafeCall Mobile Prototype
          </h1>
          <p className="text-xl text-slate-600">
            Interactive mobile call simulation with scam detection
          </p>
        </div>

        {/* Main Layout: Phone on left, Controls on right */}
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-center">
          {/* Left: Phone Simulator */}
          <div className="w-full lg:w-auto flex-shrink-0">
            <PhoneSimulator
              callerName={
                selectedScenario?.callerName || 'Unknown Caller'
              }
              callerAvatar={selectedScenario?.callerAvatar || '📞'}
              isCalling={isCalling}
              callDuration={callDuration}
              showWarning={showWarning}
              onEndCall={handleEndCall}
              onDismissWarning={handleDismissWarning}
              onContinueAnyway={handleContinueAnyway}
            />
          </div>

          {/* Right: Control Panel */}
          <div className="w-full lg:flex-1">
            <CallControlPanel
              selectedScenario={selectedScenario}
              onScenarioChange={setSelectedScenario}
              transcript={transcript}
              currentLineIndex={currentLineIndex}
              isCalling={isCalling}
              riskScore={riskScore}
              onStartCall={handleStartCall}
              onSkipToEnd={handleSkipToEnd}
              onReplay={handleReplay}
            />
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="card bg-blue-50 border-2 border-blue-200">
            <h3 className="text-xl font-semibold mb-2">ℹ️ About This Prototype</h3>
            <p className="text-lg mb-2">
              This is a visual simulation for demonstration purposes. In a real
              implementation:
            </p>
            <ul className="list-disc list-inside space-y-1 text-lg ml-4">
              <li>
                Real-time audio processing would replace simulated transcripts
              </li>
              <li>
                Speech-to-text (ASR) would provide live transcription from actual
                phone calls
              </li>
              <li>
                ML models would analyze voice patterns, sentiment, and detect
                AI-generated voices
              </li>
              <li>
                Processing would happen on-device for privacy, with optional
                cloud backup
              </li>
              <li>
                Integration with telephony APIs would enable real call controls
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

