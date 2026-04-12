'use client';

import React, { useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  highlightLine?: number;
  readOnly?: boolean;
}

export default function CodeEditor({
  value,
  onChange,
  highlightLine,
  readOnly = false,
}: CodeEditorProps) {
  const editorRef = React.useRef<HTMLDivElement>(null);

  // シンタックスハイライト
  const highlight = (code: string) => {
    return Prism.highlight(code, Prism.languages.python, 'python');
  };

  // ハイライト行にスクロール
  useEffect(() => {
    if (highlightLine && highlightLine > 0 && editorRef.current) {
      const lineElements = editorRef.current.querySelectorAll('.token-line');
      const targetLine = lineElements[highlightLine - 1] as HTMLElement;
      if (targetLine) {
        targetLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [highlightLine]);

  return (
    <div ref={editorRef} className="h-full overflow-auto bg-[#2d2d2d] relative">
      <style jsx global>{`
        .editor-container {
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.6;
        }

        .editor-container textarea {
          outline: none !important;
          padding: 16px !important;
        }

        .editor-container pre {
          padding: 16px !important;
          margin: 0 !important;
        }

        .line-numbers {
          position: absolute;
          left: 0;
          top: 0;
          padding: 16px 8px;
          background: #1e1e1e;
          color: #858585;
          text-align: right;
          user-select: none;
          pointer-events: none;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.6;
          min-width: 50px;
          border-right: 1px solid #404040;
        }

        .editor-wrapper {
          margin-left: 50px;
        }

        .highlight-line-marker {
          position: absolute;
          left: 50px;
          right: 0;
          background-color: rgba(255, 255, 0, 0.25);
          border-left: 3px solid #ffeb3b;
          pointer-events: none;
          height: 22.4px;
          box-shadow: 0 0 10px rgba(255, 235, 59, 0.3);
        }

        .highlight-line-number {
          background-color: rgba(255, 235, 59, 0.3) !important;
          font-weight: bold !important;
          color: #ffeb3b !important;
        }
      `}</style>

      {/* 行番号 */}
      <div className="line-numbers">
        {value.split('\n').map((_, i) => (
          <div
            key={i}
            className={highlightLine === i + 1 ? 'highlight-line-number' : ''}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* ハイライト行のマーカー */}
      {highlightLine && highlightLine > 0 && (
        <div
          className="highlight-line-marker"
          style={{
            top: `${16 + (highlightLine - 1) * 22.4}px`,
          }}
        />
      )}

      {/* エディタ */}
      <div className="editor-wrapper">
        <Editor
          value={value}
          onValueChange={onChange}
          highlight={highlight}
          padding={16}
          disabled={readOnly}
          className="editor-container"
          style={{
            fontFamily: '"Consolas", "Monaco", "Courier New", monospace',
            fontSize: 14,
            backgroundColor: '#2d2d2d',
            color: '#d4d4d4',
            minHeight: '100%',
          }}
          textareaClassName="editor-textarea"
          ignoreTabKey={false}
        />
      </div>
    </div>
  );
}
