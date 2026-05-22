'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { ChatMessage, ChatContext } from '../types';

interface ChatPanelProps {
  context: ChatContext;
}

export default function ChatPanel({ context }: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateId = () => Math.random().toString(36).substring(7);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: generateId(),
      role: 'user',
      content: inputText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messages.concat(userMessage).map(m => ({
            role: m.role,
            content: m.content,
          })),
          context,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: any) {
      setError(err.message || 'エラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (prompt: string) => {
    setInputText(prompt);
  };

  return (
    <div className="h-full w-full flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between flex-shrink-0">
        <span className="font-semibold">AI アシスタント</span>
        {messages.length > 0 && (
          <button
            onClick={() => setMessages([])}
            className="text-xs text-gray-400 hover:text-white"
          >
            クリア
          </button>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-auto p-4 space-y-3 min-h-0">
        {messages.length === 0 ? (
          <WelcomeMessage onQuickAction={handleQuickAction} />
        ) : (
          messages.map(msg => (
            <MessageBubble key={msg.id} message={msg} />
          ))
        )}
        {isLoading && <LoadingIndicator />}
        {error && <ErrorMessage message={error} />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-700 p-3 flex-shrink-0">
        <div className="flex gap-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="質問を入力..."
            disabled={isLoading}
            className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm resize-none focus:outline-none focus:border-blue-500"
            rows={2}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isLoading}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded font-semibold transition-colors"
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-lg px-3 py-2 ${
          isUser ? 'bg-blue-900 text-white' : 'bg-gray-800 text-gray-200'
        }`}
      >
        {isUser ? (
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="text-sm prose prose-invert prose-sm max-w-none">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

function WelcomeMessage({ onQuickAction }: { onQuickAction: (prompt: string) => void }) {
  const quickActions = [
    { label: '使い方を教えて', prompt: 'このツールの使い方を教えてください' },
    { label: '問題を説明して', prompt: 'この問題について詳しく説明してください' },
    { label: 'コードを改善', prompt: 'このコードの改善点を教えてください' },
  ];

  return (
    <div className="text-center text-gray-400 py-8">
      <p className="mb-4 text-sm">AIアシスタントに質問してください</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {quickActions.map(action => (
          <button
            key={action.label}
            onClick={() => onQuickAction(action.prompt)}
            className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-xs border border-gray-700"
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function LoadingIndicator() {
  return (
    <div className="flex items-center gap-2 text-gray-400 text-sm">
      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
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
      考え中...
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-red-900/30 border border-red-600 rounded p-3 text-sm text-red-400">
      {message}
    </div>
  );
}
