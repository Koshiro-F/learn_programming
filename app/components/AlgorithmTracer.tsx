'use client';

import React, { useState, useEffect, useCallback } from 'react';
import CodeEditor from './CodeEditor';
import VariableMonitor from './VariableMonitor';
import ControlPanel from './ControlPanel';
import ProblemPanel from './ProblemPanel';
import { ExecutionState, TraceStep } from '../types';
import { initPyodide, executeWithTrace } from '../lib/pyodideEngine';

// デフォルトのサンプルコード
const DEFAULT_CODE = `# 1から10までの合計を求める
total = 0
for i in range(1, 11):
    total = total + i
    print(f"{i}まで合計: {total}")

print(f"最終結果: {total}")`;

// デフォルトの問題データ
const DEFAULT_PROBLEM = {
  title: '1から10までの合計',
  description: '1から10までの整数の合計を計算するプログラムを作成してください。\n\nfor文とrange関数を使用して、1から10までの数値を順に加算し、結果を出力してください。',
  examples: [
    {
      input: 'なし',
      output: '55',
      explanation: '1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55',
    },
  ],
  constraints: [
    'for文とrange関数を使用すること',
    '変数totalを使って合計を保持すること',
    '各ステップでの合計値を出力すること',
  ],
};

export default function AlgorithmTracer() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [state, setState] = useState<ExecutionState>('idle');
  const [steps, setSteps] = useState<TraceStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isPyodideReady, setIsPyodideReady] = useState(false);

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

  // キーボードショートカット
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Enter: 実行
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRun();
      }
      // 右矢印: 次へ
      else if (e.key === 'ArrowRight' && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
        const activeElement = document.activeElement;
        // エディタ以外でフォーカスがある場合のみ
        if (activeElement?.tagName !== 'TEXTAREA' && activeElement?.tagName !== 'INPUT') {
          e.preventDefault();
          handleStepForward();
        }
      }
      // 左矢印: 前へ
      else if (e.key === 'ArrowLeft' && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
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

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* ヘッダー */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              お前も基本情報技術者にならないか？
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              基本情報技術者試験 科目B対策 - Pythonコードをステップ実行して変数の変化を可視化
            </p>
          </div>
          {!isPyodideReady && (
            <div className="text-yellow-400 text-sm flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              初期化中...
            </div>
          )}
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="flex-1 flex overflow-hidden">
        {/* 左: 問題パネル（縦いっぱい） */}
        <div className="w-[450px] border-r border-gray-700">
          <ProblemPanel
            title={DEFAULT_PROBLEM.title}
            description={DEFAULT_PROBLEM.description}
            examples={DEFAULT_PROBLEM.examples}
            constraints={DEFAULT_PROBLEM.constraints}
          />
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
