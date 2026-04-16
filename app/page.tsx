'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { questions } from './data/questions';
import { QuestionCategory, QuestionDifficulty } from './types';
import { getCharacterByIndex } from './lib/characters';
import { AnswerHistoryMap, readAnswerHistory } from './lib/answerHistory';

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState<QuestionCategory | 'all'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<QuestionDifficulty | 'all'>('all');
  const [answerHistory, setAnswerHistory] = useState<AnswerHistoryMap>({});

  useEffect(() => {
    const syncHistory = () => setAnswerHistory(readAnswerHistory());
    syncHistory();

    window.addEventListener('focus', syncHistory);
    return () => window.removeEventListener('focus', syncHistory);
  }, []);

  // フィルタリング
  const filteredQuestions = questions.filter((q) => {
    if (categoryFilter !== 'all' && q.category !== categoryFilter) return false;
    if (difficultyFilter !== 'all' && q.difficulty !== difficultyFilter) return false;
    return true;
  });

  // 難易度の色
  const getDifficultyColor = (difficulty: QuestionDifficulty) => {
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
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ヘッダー */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">
            お前も基本情報技術者にならないか？
          </h1>
          <p className="text-gray-400">
            基本情報技術者試験 科目B対策 - Pythonコードをステップ実行して理解を深める
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* フィルタ */}
        <div className="mb-8 flex flex-wrap gap-4">
          {/* カテゴリフィルタ */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-400">
              カテゴリ
            </label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as QuestionCategory | 'all')}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
            >
              <option value="all">すべて</option>
              <option value="アルゴリズム">アルゴリズム</option>
              <option value="情報セキュリティ">情報セキュリティ</option>
            </select>
          </div>

          {/* 難易度フィルタ */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-400">
              難易度
            </label>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value as QuestionDifficulty | 'all')}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
            >
              <option value="all">すべて</option>
              <option value="初級">初級</option>
              <option value="中級">中級</option>
              <option value="上級">上級</option>
            </select>
          </div>

          <div className="flex-1" />

          {/* 問題数表示 */}
          <div className="flex items-end">
            <p className="text-gray-400 text-sm">
              {filteredQuestions.length} 問
            </p>
          </div>
          <div className="flex items-end">
            <p className="text-gray-400 text-sm">
              回答済み: {Object.keys(answerHistory).length} 問
            </p>
          </div>
        </div>

        {/* 問題一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuestions.map((question, index) => (
            <Link
              key={question.id}
              href={`/questions/${question.id}`}
              className="block bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-6 group relative overflow-hidden"
            >
              {answerHistory[question.id] && (
                <div className="absolute top-3 right-3 z-20">
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                      answerHistory[question.id].lastIsCorrect
                        ? 'bg-green-900/70 text-green-300 border border-green-600/70'
                        : 'bg-yellow-900/70 text-yellow-300 border border-yellow-600/70'
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    回答済み
                  </div>
                </div>
              )}

              {/* キャラクターアイコン（右下） */}
              <div className="absolute bottom-2 right-2 w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity">
                <Image
                  src={getCharacterByIndex(index)}
                  alt="character"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* ヘッダー */}
              <div className="flex items-start justify-between mb-3 relative z-10">
                <div className="flex-1">
                  <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors mb-2">
                    {question.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">
                    {question.subcategory}
                  </p>
                </div>
                <span
                  className={`${getDifficultyColor(
                    question.difficulty
                  )} px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ml-2`}
                >
                  {question.difficulty}
                </span>
              </div>

              {/* メタ情報 */}
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {question.category}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {question.year}年
                </span>
              </div>

              {/* 問題文プレビュー */}
              <p className="text-sm text-gray-300 line-clamp-2">
                {question.description.split('\n')[0]}
              </p>

              {/* 解答群数 */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between gap-2 text-xs text-gray-500">
                  <p>解答群: {question.choices.length}択</p>
                  {answerHistory[question.id] && (
                    <p>
                      {answerHistory[question.id].correctCount}/{answerHistory[question.id].attempts}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 問題がない場合 */}
        {filteredQuestions.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              条件に一致する問題がありません
            </p>
          </div>
        )}
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 border-t border-gray-700 px-6 py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>
            基本情報技術者試験 科目B 過去問・サンプル問題を元に作成
          </p>
          <p className="mt-2">
            出典: IPA（情報処理推進機構）公式公開問題
          </p>
        </div>
      </footer>
    </div>
  );
}
