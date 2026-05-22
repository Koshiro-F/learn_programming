'use client';

import React from 'react';
import VariableMonitor from './VariableMonitor';
import ChatPanel from './ChatPanel';
import { ChatContext } from '../types';

interface RightPanelProps {
  variables: Record<string, unknown>;
  chatContext: ChatContext;
  activeTab: 'variables' | 'chat';
  setActiveTab: (tab: 'variables' | 'chat') => void;
}

export default function RightPanel({ variables, chatContext, activeTab, setActiveTab }: RightPanelProps) {

  return (
    <div className="w-96 flex flex-col">
      {/* Tab Buttons */}
      <div className="bg-gray-800 border-b border-gray-700 flex">
        <button
          onClick={() => setActiveTab('variables')}
          className={`flex-1 px-4 py-2 font-semibold text-sm transition-colors border-b-2 ${
            activeTab === 'variables'
              ? 'border-blue-500 text-white'
              : 'border-transparent text-gray-400 hover:text-gray-300'
          }`}
        >
          変数
        </button>
        <button
          onClick={() => setActiveTab('chat')}
          className={`flex-1 px-4 py-2 font-semibold text-sm transition-colors border-b-2 ${
            activeTab === 'chat'
              ? 'border-blue-500 text-white'
              : 'border-transparent text-gray-400 hover:text-gray-300'
          }`}
        >
          チャット
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'variables' ? (
          <VariableMonitor variables={variables} />
        ) : (
          <ChatPanel context={chatContext} />
        )}
      </div>
    </div>
  );
}
