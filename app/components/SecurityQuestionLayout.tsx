'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import ChatPanel from './ChatPanel';
import AnswerPanel from './AnswerPanel';
import { Question, ChatContext } from '../types';
import { recordAnswer } from '../lib/answerHistory';

interface SecurityQuestionLayoutProps {
  question: Question;
}

export default function SecurityQuestionLayout({ question }: SecurityQuestionLayoutProps) {
  const handleAnswerSubmit = (isCorrect: boolean) => {
    recordAnswer(question.id, isCorrect);
  };

  // AIチャット用のコンテキスト
  const chatContext: ChatContext = {
    questionId: question.id,
    questionTitle: question.title,
    questionDescription: question.description,
    questionCategory: question.category,
    currentCode: '', // セキュリティ問題ではコードなし
    executionOutput: undefined,
    executionError: undefined,
    currentStep: undefined,
    totalSteps: undefined,
    currentVariables: undefined,
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      {/* ヘッダー */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-xl font-bold text-white">
                  {question.title}
                </h1>
                <span
                  className={`${getDifficultyColor(
                    question.difficulty
                  )} px-2 py-1 rounded text-xs font-semibold`}
                >
                  {question.difficulty}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{question.category}</span>
                <span>•</span>
                <span>{question.subcategory}</span>
                <span>•</span>
                <span>{question.year}年</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="flex-1 flex overflow-hidden">
        {/* 左パネル: 問題文 + 選択肢 + 解答 */}
        <div className="flex-1 flex flex-col overflow-auto bg-gray-800 border-r border-gray-700">
          {/* 問題パネル */}
          <div className="p-6 space-y-4">
            {/* 問題文 */}
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{question.description}</ReactMarkdown>
            </div>

            {/* 解答パネル（選択肢＋解答ボタン＋解説） */}
            <AnswerPanel
              choices={question.choices}
              correctAnswer={question.correctAnswer}
              explanation={question.explanation}
              onAnswerSubmit={handleAnswerSubmit}
            />
          </div>
        </div>

        {/* 右パネル: AIチャット */}
        <div className="w-96 h-full flex flex-col bg-gray-900">
          <ChatPanel context={chatContext} />
        </div>
      </div>
    </div>
  );
}

function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case '初級':
      return 'bg-green-600';
    case '中級':
      return 'bg-yellow-600';
    case '上級':
      return 'bg-red-600';
    default:
      return 'bg-gray-600';
  }
}
