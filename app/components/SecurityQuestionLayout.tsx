'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-3 flex items-center justify-between flex-shrink-0">
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← 問題一覧に戻る
        </Link>
        <h1 className="text-lg font-bold truncate flex-1 text-center mx-4">
          {question.title}
        </h1>
        <div className="w-[120px]"></div> {/* 左右のバランス調整用 */}
      </header>

      {/* メインコンテンツ */}
      <div className="flex-1 flex overflow-hidden">
        {/* 左パネル: 問題文 + 選択肢 + 解答 */}
        <div className="flex-1 flex flex-col overflow-auto bg-gray-800 border-r border-gray-700">
          {/* 問題パネル */}
          <div className="p-6 space-y-4">
            {/* カテゴリ・難易度バッジ */}
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full font-semibold">
                {question.category}
              </span>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                {question.subcategory}
              </span>
              <span className={`px-3 py-1 text-white text-sm rounded-full ${getDifficultyColor(question.difficulty)}`}>
                {question.difficulty}
              </span>
            </div>

            {/* 問題文 */}
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-gray-200 leading-relaxed">
                {question.description}
              </div>
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
