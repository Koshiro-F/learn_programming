'use client';

import React from 'react';

interface VariableMonitorProps {
  variables: Record<string, unknown>;
  title?: string;
}

export default function VariableMonitor({
  variables,
  title = '変数の値',
}: VariableMonitorProps) {
  const entries = Object.entries(variables);

  return (
    <div className="h-full flex flex-col bg-gray-900 text-white">
      <div className="bg-gray-800 px-4 py-2 font-semibold border-b border-gray-700">
        {title}
      </div>
      <div className="flex-1 overflow-auto p-4">
        {entries.length === 0 ? (
          <div className="text-gray-500 text-sm">
            変数はまだありません
          </div>
        ) : (
          <div className="space-y-2">
            {entries.map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-800 rounded p-3 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="font-mono text-blue-400 font-semibold min-w-[80px]">
                    {key}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 mb-1">
                      {typeof value}
                    </div>
                    <div className="font-mono text-green-400 break-all">
                      {formatValue(value)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function formatValue(value: unknown): string {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (typeof value === 'string') return `"${value}"`;
  if (typeof value === 'object') {
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return String(value);
    }
  }
  return String(value);
}
