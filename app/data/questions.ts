import { Question } from '../types';

/**
 * 基本情報技術者試験 科目B 問題データベース
 *
 * 新しい問題を追加する場合は、このファイルに Question 型のオブジェクトを追加してください。
 * 擬似言語からPythonへの変換は以下のルールに従います：
 * - 変数宣言 "型名: 変数名" → 削除（Pythonは動的型付け）
 * - 代入 "変数名 ← 式" → "変数名 = 式"
 * - 比較演算子 "＝" → "=="
 * - 論理演算子 "and", "or", "not" → そのまま
 * - 配列インデックス [1始まり] → [0始まり]に変換
 */

export const questions: Question[] = [
  {
    id: 'algo_sample_q1',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: '変数・代入・トレース',
    difficulty: '初級',
    title: '変数の代入トレース',
    description: `次のプログラムを実行すると、\`y\` の値と \`z\` の値をコンマ区切りで出力します。

出力結果として正しいものを解答群から選んでください。`,
    pseudoCode: `整数型: x ← 1
整数型: y ← 2
整数型: z ← 3
x ← y
y ← z
z ← x
yの値 と zの値 をこの順にコンマ区切りで出力する`,
    pythonCode: `x = 1
y = 2
z = 3
x = y
y = z
z = x
print(f"{y},{z}")`,
    choices: [
      { id: 'ア', text: '1,2' },
      { id: 'イ', text: '1,3' },
      { id: 'ウ', text: '2,1' },
      { id: 'エ', text: '3,2' },
      { id: 'オ', text: '3,1' },
      { id: 'カ', text: '2,3' },
    ],
    correctAnswer: 'エ',
    explanation: '変数の値の変化を追うと、x←2, y←3, z←2となります。したがって出力はy=3, z=2で「3,2」です。',
  },
  {
    id: 'algo_r06_q1',
    source: 'r06',
    year: 2024,
    category: 'アルゴリズム',
    subcategory: '条件分岐・最大値',
    difficulty: '初級',
    title: '三つの整数の最大値',
    description: `関数 \`maximum\` は、異なる三つの整数を引数で受け取り、そのうちの最大値を返します。

プログラム中の **空欄部分** に入れる正しい条件式を解答群から選んでください。`,
    pseudoCode: `○整数型: maximum(整数型: x, 整数型: y, 整数型: z)
  if ( [空欄] )
    return x
  elseif (y ＞ z)
    return y
  else
    return z
  endif`,
    pythonCode: `def maximum(x, y, z):
    if ___BLANK___:  # ここに正しい条件式を入れる
        return x
    elif y > z:
        return y
    else:
        return z

# テスト
print(maximum(5, 3, 2))  # 期待値: 5
print(maximum(1, 6, 4))  # 期待値: 6
print(maximum(2, 3, 7))  # 期待値: 7`,
    choices: [
      { id: 'ア', text: 'x > y' },
      { id: 'イ', text: 'x > y and x > z' },
      { id: 'ウ', text: 'x > y and y > z' },
      { id: 'エ', text: 'x > z' },
      { id: 'オ', text: 'x > z and z > y' },
      { id: 'カ', text: 'z > y' },
    ],
    correctAnswer: 'イ',
    explanation: 'xが最大値となるには、「xがyより大きい」かつ「xがzより大きい」の両方の条件が必要です。したがって `x > y and x > z` が正解です。',
  },
  {
    id: 'algo_sample_q7',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: '再帰・階乗',
    difficulty: '初級',
    title: '階乗の再帰計算',
    description: `関数 \`factorial\` は非負の整数 n の階乗を再帰的に返します。

プログラム中の **空欄部分** に入れる正しい式を解答群から選んでください。`,
    pseudoCode: `○整数型: factorial(整数型: n)
  if (n ＝ 0)
    return 1
  endif
  return [空欄]`,
    pythonCode: `def factorial(n):
    if n == 0:
        return 1
    return ___BLANK___  # ここに正しい式を入れる

# テスト
print(factorial(0))  # 期待値: 1
print(factorial(1))  # 期待値: 1
print(factorial(5))  # 期待値: 120`,
    choices: [
      { id: 'ア', text: '(n - 1) * factorial(n)' },
      { id: 'イ', text: 'factorial(n - 1)' },
      { id: 'ウ', text: 'n' },
      { id: 'エ', text: 'n * (n - 1)' },
      { id: 'オ', text: 'n * factorial(1)' },
      { id: 'カ', text: 'n * factorial(n - 1)' },
    ],
    correctAnswer: 'カ',
    explanation: '階乗の定義は n! = n × (n-1)! です。再帰的に表現すると `n * factorial(n - 1)` となります。',
  },
  {
    id: 'algo_r06_q2',
    source: 'r06',
    year: 2024,
    category: 'アルゴリズム',
    subcategory: '2進数変換・文字列操作',
    difficulty: '初級',
    title: '2進数から10進数への変換',
    description: `関数 \`conv_decimal\` は、"0" と "1" だけから成る文字列を符号なし2進数と解釈したときの整数値を返します。

例: \`conv_decimal("10010")\` → \`18\`

補助関数 \`char_to_int\` は文字 "0" なら 0、"1" なら 1 を返します。

プログラム中の **空欄部分** に入れる正しい式を解答群から選んでください。`,
    pseudoCode: `○整数型: convDecimal(文字列型: binary)
  整数型: i, length, result ← 0
  length ← binaryの文字数
  for (i を 1 から length まで 1 ずつ増やす)
    result ← [空欄]
  endfor
  return result`,
    pythonCode: `def char_to_int(c):
    return 0 if c == "0" else 1

def conv_decimal(binary):
    length = len(binary)
    result = 0
    for i in range(length):
        result = ___BLANK___  # ここに正しい式を入れる
    return result

# テスト
print(conv_decimal("10010"))  # 期待値: 18
print(conv_decimal("1111"))   # 期待値: 15
print(conv_decimal("1010"))   # 期待値: 10`,
    choices: [
      { id: 'ア', text: 'result + char_to_int(binary[length - i - 1])' },
      { id: 'イ', text: 'result + char_to_int(binary[i])' },
      { id: 'ウ', text: 'result * 2 + char_to_int(binary[length - i - 1])' },
      { id: 'エ', text: 'result * 2 + char_to_int(binary[i])' },
    ],
    correctAnswer: 'エ',
    explanation: '2進数を10進数に変換する際、先頭から順に読む場合は、既存の結果を2倍にしてから次のビットを加算するシフト法を用います。Pythonでは0始まりなので `binary[i]` が正しいです。',
  },
  {
    id: 'algo_sample_q3',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: '配列操作・累積和',
    difficulty: '初級',
    title: '累積和の計算',
    description: `関数 \`make_new_array\` を \`make_new_array([3, 2, 1, 6, 5, 4])\` として呼び出したとき、戻り値の配列の **インデックス4の値**（5番目の要素）は何でしょうか？

※Pythonではインデックスは0始まりです。`,
    pseudoCode: `○整数型の配列: makeNewArray(整数型の配列: in)
  整数型の配列: out ← {}
  outの末尾 に in[1]の値 を追加する
  for (i を 2 から inの要素数 まで 1 ずつ増やす)
    tail ← out[outの要素数]
    outの末尾 に (tail ＋ in[i]) の結果を追加する
  endfor
  return out`,
    pythonCode: `def make_new_array(arr_in):
    arr_out = []
    arr_out.append(arr_in[0])
    for i in range(1, len(arr_in)):
        tail = arr_out[-1]
        arr_out.append(tail + arr_in[i])
    return arr_out

# テスト
result = make_new_array([3, 2, 1, 6, 5, 4])
print(result)
print(f"インデックス4の値: {result[4]}")`,
    choices: [
      { id: 'ア', text: '5' },
      { id: 'イ', text: '6' },
      { id: 'ウ', text: '9' },
      { id: 'エ', text: '11' },
      { id: 'オ', text: '12' },
      { id: 'カ', text: '17' },
      { id: 'キ', text: '21' },
    ],
    correctAnswer: 'カ',
    explanation: '累積和を計算すると [3, 5, 6, 12, 17, 21] となります。インデックス4（5番目の要素）は 17 です。',
  },
];

/**
 * 問題IDから問題を取得
 */
export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}

/**
 * カテゴリでフィルタ
 */
export function getQuestionsByCategory(category: string): Question[] {
  return questions.filter((q) => q.category === category);
}

/**
 * 難易度でフィルタ
 */
export function getQuestionsByDifficulty(difficulty: string): Question[] {
  return questions.filter((q) => q.difficulty === difficulty);
}
