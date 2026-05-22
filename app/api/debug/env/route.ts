import { NextRequest, NextResponse } from 'next/server';

// Node.js runtimeを明示的に指定
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  // 本番環境でのセキュリティのため、簡単な認証を追加
  const authHeader = request.headers.get('authorization');
  const expectedAuth = 'Bearer debug-secret-token';

  if (authHeader !== expectedAuth) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // 環境変数の存在確認（値は表示しない）
  const envCheck = {
    OPENAI_API_KEY: {
      exists: !!process.env.OPENAI_API_KEY,
      prefix: process.env.OPENAI_API_KEY?.substring(0, 7) || 'なし',
      length: process.env.OPENAI_API_KEY?.length || 0,
    },
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: process.env.VERCEL,
    AWS_REGION: process.env.AWS_REGION,
    AWS_EXECUTION_ENV: process.env.AWS_EXECUTION_ENV,
    // 他の環境変数の存在確認
    allEnvKeys: Object.keys(process.env).filter(key =>
      key.includes('OPENAI') ||
      key.includes('NEXT') ||
      key.includes('AWS') ||
      key.includes('VERCEL')
    ),
  };

  return NextResponse.json(envCheck);
}
