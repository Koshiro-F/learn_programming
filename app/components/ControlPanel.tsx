'use client';

import React from 'react';
import { ExecutionState } from '../types';

interface ControlPanelProps {
  state: ExecutionState;
  currentStep: number;
  totalSteps: number;
  onRun: () => void;
  onStep: () => void;
  onStepBack: () => void;
  onReset: () => void;
  output?: string;
  error?: string;
}

export default function ControlPanel({
  state,
  currentStep,
  totalSteps,
  onRun,
  onStep,
  onStepBack,
  onReset,
  output,
  error,
}: ControlPanelProps) {
  const isRunning = state === 'running';
  const hasSteps = totalSteps > 0;
  const canStepForward = hasSteps && currentStep < totalSteps - 1;
  const canStepBack = hasSteps && currentStep > 0;

  return (
    <div className="bg-gray-800 border-t border-gray-700 p-4">
      {/* コントロールボタン */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={onRun}
          disabled={isRunning}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded font-semibold transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
          実行
        </button>

        <button
          onClick={onStepBack}
          disabled={!canStepBack || isRunning}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded font-semibold transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
          </svg>
          前へ
        </button>

        <button
          onClick={onStep}
          disabled={!canStepForward || isRunning}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded font-semibold transition-colors flex items-center gap-2"
        >
          次へ
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
          </svg>
        </button>

        <button
          onClick={onReset}
          disabled={isRunning}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded font-semibold transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          リセット
        </button>

        <div className="flex-1" />

        {/* ステップ情報 */}
        <div className="text-white font-mono text-sm">
          ステップ: {hasSteps ? currentStep + 1 : 0} / {totalSteps}
        </div>
      </div>

      {/* 出力エリア */}
      <div className="bg-gray-900 rounded p-3 min-h-[180px] max-h-[350px] overflow-auto">
        <div className="text-xs text-gray-400 mb-2">出力:</div>
        {error ? (
          <div className="text-red-400 font-mono text-sm whitespace-pre-wrap">
            {error}
          </div>
        ) : output ? (
          <div className="text-green-400 font-mono text-sm whitespace-pre-wrap">
            {output}
          </div>
        ) : (
          <div className="text-gray-500 text-sm">出力なし</div>
        )}
      </div>
    </div>
  );
}
