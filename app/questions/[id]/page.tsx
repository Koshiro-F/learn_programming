'use client';

import React, { use, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getQuestionById } from '../../data/questions';
import CodeEditor from '../../components/CodeEditor';
import VariableMonitor from '../../components/VariableMonitor';
import ControlPanel from '../../components/ControlPanel';
import AnswerPanel from '../../components/AnswerPanel';
import { ExecutionState, TraceStep } from '../../types';
import { initPyodide, executeWithTrace } from '../../lib/pyodideEngine';
import { recordAnswer } from '../../lib/answerHistory';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function QuestionPage({ params }: PageProps) {
  const { id } = use(params);
  const router = useRouter();
  const question = getQuestionById(id);

  const [code, setCode] = useState('');
  const [state, setState] = useState<ExecutionState>('idle');
  const [steps, setSteps] = useState<TraceStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isPyodideReady, setIsPyodideReady] = useState(false);

  // 問題が見つからない場合
  if (!question) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">問題が見つかりません</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            ホームに戻る
          </Link>
        </div>
      </div>
    );
  }

  // コードの初期化
  useEffect(() => {
    setCode(question.pythonCode);
  }, [question.pythonCode]);

  // Pyodide初期化
  useEffect(() => {
    const init = async () => {
      try {
        setState('running');
        await initPyodide();
        setIsPyodideReady(true);
        setState('idle');
      } catch (err: any) {
        setError(`Pyodideの初期化に失敗しました: ${err.message}`);
        setState('error');
      }
    };

    init();
  }, []);

  // 現在のステップの変数を取得
  const currentVariables = steps[currentStep]?.locals || {};
  const currentLine = steps[currentStep]?.line || 0;

  // 実行ボタン
  const handleRun = useCallback(async () => {
    if (!isPyodideReady) return;

    setState('running');
    setError('');
    setOutput('');
    setSteps([]);
    setCurrentStep(0);

    try {
      const result = await executeWithTrace(code);

      if (result.success) {
        setSteps(result.steps);
        setOutput(result.output || '');
        setCurrentStep(0);
        setState('completed');
      } else {
        setError(result.error || 'Unknown error');
        setState('error');
      }
    } catch (err: any) {
      setError(err.message || 'Execution failed');
      setState('error');
    }
  }, [code, isPyodideReady]);

  // 次のステップへ
  const handleStepForward = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, steps.length]);

  // 前のステップへ
  const handleStepBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  // リセット
  const handleReset = useCallback(() => {
    setSteps([]);
    setCurrentStep(0);
    setOutput('');
    setError('');
    setState('idle');
  }, []);

  const handleAnswerSubmit = useCallback(
    (isCorrect: boolean) => {
      recordAnswer(question.id, isCorrect);
    },
    [question.id]
  );

  // キーボードショートカット
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRun();
      } else if (e.key === 'ArrowRight' && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
        const activeElement = document.activeElement;
        if (activeElement?.tagName !== 'TEXTAREA' && activeElement?.tagName !== 'INPUT') {
          e.preventDefault();
          handleStepForward();
        }
      } else if (e.key === 'ArrowLeft' && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
        const activeElement = document.activeElement;
        if (activeElement?.tagName !== 'TEXTAREA' && activeElement?.tagName !== 'INPUT') {
          e.preventDefault();
          handleStepBack();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleRun, handleStepForward, handleStepBack]);

  // 難易度の色
  const getDifficultyColor = (difficulty: string) => {
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
    <div className="h-screen flex flex-col bg-gray-900 overflow-hidden">
      {/* ヘッダー */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
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
          {!isPyodideReady && (
            <div className="text-yellow-400 text-sm flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              初期化中...
            </div>
          )}
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="flex-1 flex overflow-hidden">
        {/* 左: 問題文と解答 */}
        <div className="w-[450px] border-r border-gray-700 overflow-auto bg-gray-900 text-white">
          <div className="p-6">
            {/* 問題文 */}
            <h2 className="text-lg font-semibold mb-4">問題文</h2>
            <div className="text-gray-200 leading-relaxed whitespace-pre-wrap mb-6">
              {question.description}
            </div>

            {/* 擬似言語（あれば） */}
            {question.pseudoCode && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">
                  擬似言語（参考）
                </h3>
                <pre className="bg-gray-800 rounded p-4 text-sm font-mono text-gray-300 overflow-x-auto">
                  {question.pseudoCode}
                </pre>
              </div>
            )}

            {/* 解答パネル */}
            <AnswerPanel
              choices={question.choices}
              correctAnswer={question.correctAnswer}
              explanation={question.explanation}
              onAnswerSubmit={handleAnswerSubmit}
            />
          </div>
        </div>

        {/* 右: コードエディタ + 変数モニター + コントロールパネル */}
        <div className="flex-1 flex flex-col">
          {/* 上: コードエディタと変数モニター */}
          <div className="flex-1 flex overflow-hidden">
            {/* コードエディタ */}
            <div className="flex-1 border-r border-gray-700 flex flex-col">
              <div className="bg-gray-800 px-4 py-2 text-white text-sm font-semibold border-b border-gray-700">
                Pythonコード
                <span className="text-gray-400 text-xs ml-2">
                  (Ctrl/Cmd + Enter で実行)
                </span>
              </div>
              <div className="flex-1">
                <CodeEditor
                  value={code}
                  onChange={setCode}
                  highlightLine={currentLine}
                  readOnly={state === 'running'}
                />
              </div>
            </div>

            {/* 変数モニター */}
            <div className="w-96">
              <VariableMonitor variables={currentVariables} />
            </div>
          </div>

          {/* 下: コントロールパネル */}
          <ControlPanel
            state={state}
            currentStep={currentStep}
            totalSteps={steps.length}
            onRun={handleRun}
            onStep={handleStepForward}
            onStepBack={handleStepBack}
            onReset={handleReset}
            output={output}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}
