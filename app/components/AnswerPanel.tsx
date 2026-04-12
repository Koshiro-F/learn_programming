'use client';

import React, { useState } from 'react';
import { Choice } from '../types';

interface AnswerPanelProps {
  choices: Choice[];
  correctAnswer: string;
  explanation: string;
  onAnswerSubmit?: (isCorrect: boolean) => void;
}

export default function AnswerPanel({
  choices,
  correctAnswer,
  explanation,
  onAnswerSubmit,
}: AnswerPanelProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    setIsSubmitted(true);
    const isCorrect = selectedAnswer === correctAnswer;
    onAnswerSubmit?.(isCorrect);
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
  };

  const isCorrect = isSubmitted && selectedAnswer === correctAnswer;
  const isIncorrect = isSubmitted && selectedAnswer !== correctAnswer;

  return (
    <div className="bg-gray-900 text-white space-y-4">
      {/* 解答群 */}
      <div>
        <h3 className="text-base font-semibold mb-3">解答群</h3>
        <div className="space-y-2">
          {choices.map((choice) => {
            const isSelected = selectedAnswer === choice.id;
            const isCorrectChoice = choice.id === correctAnswer;
            const showCorrect = isSubmitted && isCorrectChoice;
            const showIncorrect = isSubmitted && isSelected && !isCorrectChoice;

            return (
              <button
                key={choice.id}
                onClick={() => !isSubmitted && setSelectedAnswer(choice.id)}
                disabled={isSubmitted}
                className={`w-full text-left p-3 rounded border transition-all ${
                  showCorrect
                    ? 'bg-green-900 border-green-500 text-white'
                    : showIncorrect
                    ? 'bg-red-900 border-red-500 text-white'
                    : isSelected
                    ? 'bg-blue-900 border-blue-500 text-white'
                    : 'bg-gray-800 border-gray-700 hover:border-gray-600 text-gray-200'
                } ${isSubmitted ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-start gap-2">
                  {/* ラジオボタン風アイコン */}
                  <div className="mt-0.5">
                    {showCorrect ? (
                      <svg
                        className="w-4 h-4 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : showIncorrect ? (
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          isSelected
                            ? 'border-blue-400 bg-blue-400'
                            : 'border-gray-500'
                        } flex items-center justify-center`}
                      >
                        {isSelected && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                    )}
                  </div>

                  {/* 選択肢テキスト */}
                  <div className="flex-1 text-sm">
                    <span className="font-semibold mr-1.5">{choice.id}.</span>
                    <span className="font-mono">{choice.text}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ボタン */}
      <div className="flex gap-2">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded text-sm font-semibold transition-colors"
          >
            解答を確認
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm font-semibold transition-colors"
          >
            もう一度解く
          </button>
        )}
      </div>

      {/* 結果と解説 */}
      {isSubmitted && (
        <div
          className={`p-3 rounded border ${
            isCorrect
              ? 'bg-green-900/30 border-green-600'
              : 'bg-red-900/30 border-red-600'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <>
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-bold text-green-400">正解！</span>
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-bold text-red-400">
                  不正解（正解: {correctAnswer}）
                </span>
              </>
            )}
          </div>

          {/* 解説 */}
          <div className="border-t border-gray-700 pt-2 mt-2">
            <h4 className="text-sm font-semibold mb-1.5 text-gray-300">解説</h4>
            <p className="text-sm text-gray-200 leading-relaxed">{explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
