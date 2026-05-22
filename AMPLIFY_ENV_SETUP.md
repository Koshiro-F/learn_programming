# AWS Amplify 環境変数設定ガイド

## 🔧 設定手順

### 1. AWS Amplify Consoleで設定

1. **AWS Amplify Console**にアクセス
2. アプリを選択
3. 左メニューから「**App settings**」→「**Environment variables**」を選択
4. 「**Manage variables**」をクリック
5. 以下を追加：
   - **Variable name**: `OPENAI_API_KEY`
   - **Value**: `sk-proj-your-actual-key-here`
   - **Scope**: `All branches` または対象のブランチを選択
6. 「**Save**」をクリック

### 2. 再デプロイを実行

環境変数を追加・変更した後は**必ず再デプロイが必要**です：

#### 方法A: 手動で再デプロイ
1. 「**Hosting**」タブに移動
2. 対象のブランチ（通常は `main`）を選択
3. 「**Redeploy this version**」をクリック

#### 方法B: コミットをプッシュ
```bash
# 空コミットでも再デプロイがトリガーされます
git commit --allow-empty -m "chore: 環境変数設定のため再デプロイ"
git push origin main
```

### 3. デプロイログを確認

デプロイが完了したら、ログを確認：
1. 「**Hosting**」→ 最新のビルドをクリック
2. 「**Build logs**」で環境変数が読み込まれているか確認
3. ログに `OPENAI_API_KEY` が表示される（値は隠されている）

### 4. 本番環境でテスト

デプロイ完了後、本番URLでチャット機能をテスト：
1. 問題ページを開く
2. チャットボタンをクリック
3. メッセージを送信

## 🐛 トラブルシューティング

### エラー: "API key not configured"

**原因と対策：**

1. **再デプロイしていない**
   - 環境変数設定後に再デプロイを実行

2. **変数名のタイポ**
   - `OPENAI_API_KEY` (アンダースコア、すべて大文字)
   - スペースや余分な文字がないか確認

3. **スコープの設定ミス**
   - 対象のブランチにスコープが設定されているか確認

4. **Next.js 15+ の問題**
   - 現在のコードは `process.env.OPENAI_API_KEY` でアクセス
   - サーバーサイドコンポーネントでは正常に動作するはず

### デバッグ方法

本番環境のログを確認：
1. AWS Amplify Console → 「**Monitoring**」タブ
2. CloudWatch Logsへのリンクをクリック
3. `/aws/amplify/...` ログストリームを確認
4. `[DEBUG]` や `[ERROR]` で検索

または、ブラウザのNetworkタブで `/api/chat` のレスポンスを確認：
- デバッグ情報が含まれているか確認
- `hasKey`, `keyPrefix` の値を確認

## ✅ 確認チェックリスト

- [ ] AWS Amplify Consoleで環境変数 `OPENAI_API_KEY` を設定
- [ ] 変数名のスペルが正しい（タイポなし）
- [ ] スコープが正しいブランチに設定されている
- [ ] 設定後に**再デプロイ**を実行
- [ ] デプロイが成功した（緑のチェックマーク）
- [ ] 本番URLでチャット機能をテスト

## 📝 注意事項

- 環境変数の値にスペースや改行が含まれていないか確認
- APIキーは `sk-proj-` で始まる文字列
- セキュリティのため、ログにAPIキー全体は表示されません
