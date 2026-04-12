'use client';

import React from 'react';

interface ProblemPanelProps {
  title: string;
  description: string;
  examples?: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  constraints?: string[];
}

export default function ProblemPanel({
  title,
  description,
  examples = [],
  constraints = [],
}: ProblemPanelProps) {
  return (
    <div className="h-full flex flex-col bg-gray-900 text-white overflow-hidden">
      {/* ヘッダー */}
      <div className="bg-gray-800 px-4 py-3 border-b border-gray-700">
        <h2 className="text-lg font-semibold">問題</h2>
      </div>

      {/* コンテンツ */}
      <div className="flex-1 overflow-auto p-6">
        {/* タイトル */}
        <h3 className="text-xl font-bold mb-4">{title}</h3>

        {/* 問題文 */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">問題文</h4>
          <div className="text-gray-200 leading-relaxed whitespace-pre-wrap">
            {description}
          </div>
        </div>

        {/* 例 */}
        {examples.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3">例</h4>
            {examples.map((example, index) => (
              <div key={index} className="mb-4 bg-gray-800 rounded p-4">
                <div className="mb-2">
                  <span className="text-gray-400 text-sm">入力:</span>
                  <pre className="mt-1 text-green-400 font-mono text-sm">
                    {example.input}
                  </pre>
                </div>
                <div className="mb-2">
                  <span className="text-gray-400 text-sm">出力:</span>
                  <pre className="mt-1 text-blue-400 font-mono text-sm">
                    {example.output}
                  </pre>
                </div>
                {example.explanation && (
                  <div>
                    <span className="text-gray-400 text-sm">説明:</span>
                    <p className="mt-1 text-gray-300 text-sm">
                      {example.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 制約 */}
        {constraints.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">制約</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              {constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
