'use client'

import React from 'react'
import { scenarios, type CallScenario } from '@/data/scenarios'

interface CallControlPanelProps {
  selectedScenario: CallScenario | null
  onScenarioChange: (scenario: CallScenario) => void
  transcript: string[]
  currentLineIndex: number
  isCalling: boolean
  riskScore: number
  onStartCall: () => void
  onSkipToEnd: () => void
  onReplay: () => void
}

/**
 * CallControlPanel Component
 * 
 * Provides controls for selecting scenarios, viewing transcript,
 * and managing call simulation.
 * 
 * FUTURE: In a real implementation, this would:
 * - Display real-time transcription from ASR (Automatic Speech Recognition)
 * - Show actual audio waveform visualization
 * - Integrate with real call controls
 * - Display confidence scores from ML models
 */
export default function CallControlPanel({
  selectedScenario,
  onScenarioChange,
  transcript,
  currentLineIndex,
  isCalling,
  riskScore,
  onStartCall,
  onSkipToEnd,
  onReplay,
}: CallControlPanelProps) {
  const displayedTranscript = transcript.slice(0, currentLineIndex)

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl">
      {/* Scenario Selection */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Select Call Scenario</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => onScenarioChange(scenario)}
              disabled={isCalling}
              className={`p-4 rounded-xl text-left transition-all ${
                selectedScenario?.id === scenario.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              } ${isCalling ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="text-2xl mb-2">{scenario.callerAvatar}</div>
              <div className="font-semibold text-lg">{scenario.name}</div>
              {scenario.isScam && (
                <div className="text-sm mt-1 opacity-80">⚠️ Scam scenario</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Call Controls</h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onStartCall}
            disabled={!selectedScenario || isCalling}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCalling ? 'Call in progress...' : 'Start Call Simulation'}
          </button>
          {isCalling && (
            <>
              <button
                onClick={onSkipToEnd}
                className="btn-secondary"
              >
                Skip to End
              </button>
              <button
                onClick={onReplay}
                className="btn-secondary"
              >
                Replay
              </button>
            </>
          )}
        </div>
        {riskScore > 0 && (
          <div className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-400 rounded-xl">
            <div className="text-lg font-semibold text-yellow-900">
              Risk Score: {riskScore}/100
            </div>
            <div className="text-sm text-yellow-800 mt-1">
              {riskScore >= 30
                ? '⚠️ High risk detected'
                : riskScore >= 15
                ? '⚠️ Moderate risk'
                : 'Low risk'}
            </div>
          </div>
        )}
      </div>

      {/* Transcript Display */}
      <div className="card flex-1 min-h-[400px]">
        <h2 className="text-2xl font-bold mb-4">Call Transcript</h2>
        <div className="bg-slate-50 rounded-xl p-6 h-full overflow-y-auto max-h-[500px]">
          {displayedTranscript.length === 0 ? (
            <div className="text-slate-500 text-center py-12">
              {selectedScenario
                ? 'Click "Start Call Simulation" to begin'
                : 'Select a scenario to start'}
            </div>
          ) : (
            <div className="space-y-4">
              {displayedTranscript.map((line, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 animate-fade-in"
                >
                  <div className="text-lg text-slate-900 leading-relaxed">
                    {line}
                  </div>
                </div>
              ))}
              {isCalling && currentLineIndex < transcript.length && (
                <div className="flex items-center gap-2 text-slate-500">
                  <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
                  <span className="text-sm">Listening...</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

