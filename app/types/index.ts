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
