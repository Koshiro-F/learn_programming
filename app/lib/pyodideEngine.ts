import { ExecutionResult, TraceStep } from '../types';

let pyodideInstance: any = null;

/**
 * Pyodideを初期化（CDNから直接ロード）
 */
export async function initPyodide(): Promise<void> {
  if (pyodideInstance) return;

  try {
    // ブラウザ環境でのみ実行
    if (typeof window === 'undefined') {
      throw new Error('Pyodide can only be loaded in browser environment');
    }

    // CDNからPyodideスクリプトをロード
    if (!(window as any).loadPyodide) {
      await loadPyodideScript();
    }

    // Pyodideを初期化
    pyodideInstance = await (window as any).loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
    });

    console.log('Pyodide initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Pyodide:', error);
    throw error;
  }
}

/**
 * PyodideスクリプトをCDNからロード
 */
function loadPyodideScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // 既にスクリプトが読み込まれている場合
    if ((window as any).loadPyodide) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
    script.async = true;

    script.onload = () => {
      console.log('Pyodide script loaded');
      resolve();
    };

    script.onerror = () => {
      reject(new Error('Failed to load Pyodide script'));
    };

    document.head.appendChild(script);
  });
}

/**
 * Pythonコードをトレース実行
 */
export async function executeWithTrace(code: string): Promise<ExecutionResult> {
  if (!pyodideInstance) {
    throw new Error('Pyodide not initialized');
  }

  try {
    // トレース用のPythonコードを準備
    const traceCode = `
import sys
import json

# トレース結果を格納するリスト
trace_steps = []
max_steps = 10000  # 最大ステップ数制限

def safe_str(value, max_length=100):
    """安全に文字列化（長さ制限付き）"""
    try:
        s = str(value)
        if len(s) > max_length:
            return s[:max_length] + '...'
        return s
    except:
        return '<error>'

def trace_function(frame, event, arg):
    """トレース関数（ユーザーコードのみをトレース）"""
    # ユーザーコードのみをトレース（<string>で実行されるコード）
    filename = frame.f_code.co_filename
    if filename not in ('<string>', '<exec>'):
        return None

    # ステップ数制限
    if len(trace_steps) >= max_steps:
        return None

    # lineイベントのみを記録（call/returnは除外してメモリ節約）
    if event == 'line':
        # トレース用変数のブラックリスト
        excluded_vars = {
            'trace_steps', 'max_steps', 'safe_str', 'trace_function',
            'output_lines', 'OutputCapture', 'old_stdout',
            'sys', 'json', 'frame', 'event', 'arg',
            'self', 'text'  # print()などの内部処理で使用される変数
        }

        # ローカル変数を取得（安全に）
        locals_dict = {}
        for key, value in frame.f_locals.items():
            # プライベート変数、関数、トレース用変数を除外
            if key.startswith('_') or key in excluded_vars:
                continue

            # 関数やクラスを除外
            if callable(value) and not isinstance(value, type):
                continue

            try:
                # 基本型はそのまま
                if isinstance(value, (int, float, bool, type(None))):
                    locals_dict[key] = value
                elif isinstance(value, str):
                    # 文字列は長さ制限
                    locals_dict[key] = value[:100] if len(value) > 100 else value
                elif isinstance(value, (list, tuple)):
                    # リストは要素数制限して文字列化
                    if len(value) > 20:
                        locals_dict[key] = safe_str(value[:20]) + '...'
                    else:
                        locals_dict[key] = safe_str(value)
                elif isinstance(value, dict):
                    # 辞書も制限
                    if len(value) > 10:
                        items = list(value.items())[:10]
                        locals_dict[key] = safe_str(dict(items)) + '...'
                    else:
                        locals_dict[key] = safe_str(value)
                else:
                    # その他の型は型名のみ
                    locals_dict[key] = f'<{type(value).__name__}>'
            except:
                locals_dict[key] = '<error>'

        # ユーザーコードのステップのみ記録
        # （内部処理で self, text などのみの場合は除外）
        if locals_dict or frame.f_code.co_name == '<module>':
            step = {
                'line': frame.f_lineno,
                'locals': locals_dict,
                'event': event,
                'functionName': frame.f_code.co_name
            }
            trace_steps.append(step)

    # ユーザーコード（<string>）の場合のみトレースを継続
    if filename in ('<string>', '<exec>'):
        return trace_function
    return None

# 標準出力をキャプチャ
output_lines = []
class OutputCapture:
    def write(self, text):
        if len(output_lines) < 1000:  # 出力行数制限
            output_lines.append(text)
    def flush(self):
        pass

old_stdout = sys.stdout
sys.stdout = OutputCapture()

# トレースを開始
sys.settrace(trace_function)

try:
    # ユーザーコードを実行
    exec("""${code.replace(/"/g, '\\"').replace(/\n/g, '\\n')}""")
finally:
    # トレースを停止
    sys.settrace(None)
    sys.stdout = old_stdout

# 結果を返す
result = {
    'steps': trace_steps,
    'output': ''.join(output_lines)
}
json.dumps(result)
`;

    // トレースコードを実行
    const resultJson = await pyodideInstance.runPythonAsync(traceCode);
    const result = JSON.parse(resultJson);

    return {
      success: true,
      steps: result.steps as TraceStep[],
      output: result.output,
    };
  } catch (error: any) {
    return {
      success: false,
      steps: [],
      error: error.message || 'Unknown error occurred',
    };
  }
}

/**
 * Pyodideインスタンスを取得（デバッグ用）
 */
export function getPyodideInstance() {
  return pyodideInstance;
}
