import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Node.js runtimeを明示的に指定（Edge Runtimeでは環境変数が読み込めない場合がある）
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ALGORITHM_SYSTEM_PROMPT = `あなたは基本情報技術者試験(FE)の科目B(アルゴリズム)を学習する初心者を支援するAIアシスタントです。

【このアプリの使い方】
このアプリは3つのパネルで構成されています：
- **左パネル**: 問題文と解答機能が表示されています。問題を読んで、解答を選択して提出できます。
- **中央パネル**: Pythonコードエディタがあります。コードを編集して「実行」ボタン(または Ctrl/Cmd + Enter)で実行できます。
- **右パネル**: 「変数」タブでは実行中の変数の状態を確認でき、「チャット」タブ(このチャット)でAIに質問できます。

実行後は「次へ」「戻る」ボタン(または矢印キー)でステップごとにコードの実行を追跡できます。

【役割】
- このアプリの使い方を説明する
- Pythonコードの理解を助ける
- アルゴリズムの概念を丁寧に説明する
- エラーのデバッグを支援する
- コードの改善提案をする

【方針】
- 専門用語は分かりやすく説明する
- 具体例を示す
- コードを段階的に説明する
- 試験対策に役立つ情報を提供する

【禁止事項】
- 直接的な解答を提供しない(学習を妨げる)
- 過度に複雑な説明をしない`;

const SECURITY_SYSTEM_PROMPT = `あなたは基本情報技術者試験(FE)の科目B(情報セキュリティ)を学習する初心者を支援するAIアシスタントです。

【このアプリの使い方】
このアプリは2つのパネルで構成されています：
- **左パネル**: 問題文、選択肢、解答機能が表示されています。問題を読んで、選択肢を選んで「解答する」ボタンで提出できます。
- **右パネル**: AIチャット(このチャット)で、問題に関する質問ができます。

【役割】
- このアプリの使い方を説明する
- 情報セキュリティの概念を丁寧に説明する
- セキュリティ用語や技術を分かりやすく解説する
- 問題の考え方や解法のヒントを提供する
- 関連する実例やケーススタディを紹介する

【方針】
- 専門用語は分かりやすく説明する
- 具体例や実際の攻撃・防御手法を示す
- セキュリティの原理原則から説明する
- 試験対策に役立つ情報を提供する
- 実務での応用例も交える

【禁止事項】
- 直接的な解答を提供しない(学習を妨げる)
- 過度に技術的すぎる説明をしない
- 悪用可能な攻撃手法の詳細な手順は提供しない`;

function buildSystemPrompt(context: any): string {
  // 問題のカテゴリに応じてベースプロンプトを選択
  const basePrompt = context.questionCategory === '情報セキュリティ'
    ? SECURITY_SYSTEM_PROMPT
    : ALGORITHM_SYSTEM_PROMPT;

  let prompt = basePrompt;

  prompt += `\n\n【現在の問題】\n`;
  prompt += `タイトル: ${context.questionTitle}\n`;
  prompt += `説明: ${context.questionDescription}\n`;

  if (context.currentCode) {
    prompt += `\n【ユーザーのコード】\n\`\`\`python\n${context.currentCode}\n\`\`\`\n`;
  }

  if (context.executionError) {
    prompt += `\n【エラー内容】\n${context.executionError}\n`;
  }

  if (context.executionOutput) {
    prompt += `\n【実行結果】\n${context.executionOutput}\n`;
  }

  if (context.currentStep !== undefined && context.totalSteps) {
    prompt += `\n【実行ステップ】\n`;
    prompt += `現在: ${context.currentStep + 1} / ${context.totalSteps}\n`;

    if (context.currentVariables) {
      prompt += `現在の変数:\n`;
      prompt += JSON.stringify(context.currentVariables, null, 2) + '\n';
    }
  }

  return prompt;
}

export async function POST(request: NextRequest) {
  try {
    const { messages, context } = await request.json();

    // デバッグ用：環境変数の存在確認（本番環境用）
    const hasApiKey = !!process.env.OPENAI_API_KEY;
    const keyPrefix = process.env.OPENAI_API_KEY?.substring(0, 10) || 'なし';

    console.log('[DEBUG] API Key exists:', hasApiKey);
    console.log('[DEBUG] API Key prefix:', keyPrefix);
    console.log('[DEBUG] Environment:', process.env.NODE_ENV);

    if (!process.env.OPENAI_API_KEY) {
      console.error('[ERROR] OPENAI_API_KEY is not set');
      return NextResponse.json(
        {
          error: 'API key not configured',
          debug: {
            hasKey: hasApiKey,
            environment: process.env.NODE_ENV,
            // セキュリティのため、キーの最初の数文字のみ
            keyPrefix: keyPrefix
          }
        },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const systemPrompt = buildSystemPrompt(context);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return NextResponse.json({
      message: completion.choices[0].message.content,
      usage: completion.usage,
    });

  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to get response' },
      { status: 500 }
    );
  }
}
