'use client'

import React from 'react'

interface PhoneSimulatorProps {
  callerName: string
  callerAvatar: string
  isCalling: boolean
  callDuration: number // in seconds
  showWarning: boolean
  onEndCall: () => void
  onDismissWarning: () => void
  onContinueAnyway: () => void
}

/**
 * PhoneSimulator Component
 * 
 * Displays a mobile phone mockup with call interface.
 * Shows warning overlay when scam is detected.
 * 
 * FUTURE: In a real implementation, this would:
 * - Display actual caller ID from telephony system
 * - Show real-time call duration
 * - Integrate with device vibration API for alerts
 * - Connect to actual call controls (mute, speaker, etc.)
 */
export default function PhoneSimulator({
  callerName,
  callerAvatar,
  isCalling,
  callDuration,
  showWarning,
  onEndCall,
  onDismissWarning,
  onContinueAnyway,
}: PhoneSimulatorProps) {
  // Format call duration as MM:SS
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col items-center">
      {/* Phone Frame */}
      <div className="relative w-[375px] h-[812px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-slate-100 rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar (notch area) */}
          <div className="h-12 bg-slate-900 flex items-center justify-center">
            <div className="w-32 h-6 bg-slate-800 rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col h-[calc(100%-3rem)] bg-gradient-to-b from-slate-50 to-slate-100">
            {/* Header */}
            <div className="pt-8 pb-4 px-6 text-center">
              <div className="text-lg font-semibold text-slate-700 mb-1">
                {callerName}
              </div>
              {isCalling ? (
                <div className="text-sm text-slate-500">
                  Call in progress... {formatDuration(callDuration)}
                </div>
              ) : (
                <div className="text-sm text-slate-500">Ready</div>
              )}
            </div>

            {/* Avatar Area */}
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              <div className="text-8xl mb-6">{callerAvatar}</div>
              {isCalling && (
                <div className="text-lg text-slate-600 font-medium">
                  Speaker ON
                </div>
              )}
              {isCalling && (
                <div className="text-sm text-slate-500 mt-2 animate-pulse">
                  Listening...
                </div>
              )}
            </div>

            {/* Call Controls */}
            <div className="pb-12 px-8 flex flex-col items-center gap-4">
              {isCalling && (
                <div className="flex gap-6 mb-4">
                  <button className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-2xl hover:bg-slate-300 transition-colors">
                    🔇
                  </button>
                  <button className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-2xl hover:bg-slate-300 transition-colors">
                    🛡️
                  </button>
                </div>
              )}
              <button
                onClick={onEndCall}
                className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl hover:bg-red-700 transition-colors shadow-lg"
                aria-label="End call"
              >
                📞
              </button>
            </div>
          </div>

          {/* Warning Overlay */}
          {showWarning && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50 rounded-[2.5rem]">
              <div className="bg-white rounded-2xl p-6 mx-6 shadow-2xl max-w-sm">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🚨</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Suspicious call detected
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    This call contains several pressure phrases and sensitive
                    requests. Be careful – it may be a scam.
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                  <button
                    onClick={onEndCall}
                    className="w-full py-4 bg-red-600 text-white rounded-xl text-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    End Call
                  </button>
                  <button
                    onClick={onContinueAnyway}
                    className="w-full py-4 bg-slate-200 text-slate-900 rounded-xl text-lg font-semibold hover:bg-slate-300 transition-colors"
                  >
                    Continue Anyway
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

