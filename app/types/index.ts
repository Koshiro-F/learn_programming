// トレース実行時のステップ情報
export interface TraceStep {
  line: number;
  locals: Record<string, unknown>;
  event: 'line' | 'call' | 'return';
  functionName?: string;
}

// 実行状態
export type ExecutionState = 'idle' | 'running' | 'paused' | 'completed' | 'error';

// 実行結果
export interface ExecutionResult {
  success: boolean;
  steps: TraceStep[];
  output?: string;
  error?: string;
}

// Pyodideワーカーのメッセージ型
export interface WorkerMessage {
  type: 'init' | 'execute' | 'result' | 'error';
  payload?: unknown;
}

// 問題データの型定義
export interface Choice {
  id: string;    // "ア", "イ", "ウ", ...
  text: string;  // 選択肢の内容
}

export type QuestionCategory = 'アルゴリズム' | '情報セキュリティ';
export type QuestionDifficulty = '初級' | '中級' | '上級';
export type QuestionSource = 'r06' | 'sample' | 'original_cat1' | 'original_cat2' | 'original_cat3';

export interface Question {
  id: string;                      // 例: "algo_r06_q1"
  source: QuestionSource;
  year: number;
  category: QuestionCategory;
  subcategory: string;             // 例: "条件分岐・最大値"
  difficulty: QuestionDifficulty;
  title: string;                   // 問題のタイトル
  description: string;             // 問題文（Markdown可）
  pseudoCode?: string;             // 擬似言語コード（元の問題文用）
  pythonCode: string;              // Pythonに変換したコード
  choices: Choice[];               // 解答群
  correctAnswer: string;           // 正解の選択肢ID (例: "イ")
  explanation: string;             // 解説文
}

// チャット機能の型定義
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatContext {
  questionId: string;
  questionTitle: string;
  questionDescription: string;
  questionCategory: QuestionCategory; // 問題のカテゴリ
  currentCode: string;
  executionOutput?: string;
  executionError?: string;
  currentStep?: number;
  totalSteps?: number;
  currentVariables?: Record<string, unknown>;
}

export interface ChatRequest {
  messages: Array<{ role: string; content: string }>;
  context: ChatContext;
}

export interface ChatResponse {
  message: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}
