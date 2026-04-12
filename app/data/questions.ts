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
  {
    id: 'algo_sample_q2',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: '条件分岐・FizzBuzz',
    difficulty: '初級',
    title: 'FizzBuzz問題',
    description: `関数 \`fizz_buzz\` は整数 n を受け取り、以下のルールで文字列を返します：

- 3で割り切れて5で割り切れない → \`"3で割り切れる"\`
- 5で割り切れて3で割り切れない → \`"5で割り切れる"\`
- 3と5で割り切れる → \`"3と5で割り切れる"\`
- それ以外 → \`"3でも5でも割り切れない"\`

プログラム中の **3つの空欄（a, b, c）** に入れる正しい条件式の組み合わせを解答群から選んでください。`,
    pseudoCode: `○文字列型: fizzBuzz(整数型: n)
  if (nが3でも5でも割り切れる)
    return "[a]"
  elseif (nが3で割り切れる)
    return "[b]"
  elseif (nが5で割り切れる)
    return "[c]"
  else
    return "3でも5でも割り切れない"
  endif`,
    pythonCode: `def fizz_buzz(n):
    if n % 3 == 0 and n % 5 == 0:
        return ___BLANK_A___  # a
    elif n % 3 == 0:
        return ___BLANK_B___  # b
    elif n % 5 == 0:
        return ___BLANK_C___  # c
    else:
        return "3でも5でも割り切れない"

# テスト
print(fizz_buzz(3))   # 期待値: "3で割り切れる"
print(fizz_buzz(5))   # 期待値: "5で割り切れる"
print(fizz_buzz(15))  # 期待値: "3と5で割り切れる"
print(fizz_buzz(7))   # 期待値: "3でも5でも割り切れない"`,
    choices: [
      { id: 'ア', text: 'a="3", b="3と5", c="5"' },
      { id: 'イ', text: 'a="3", b="5", c="3と5"' },
      { id: 'ウ', text: 'a="3と5", b="3", c="5"' },
      { id: 'エ', text: 'a="5", b="3", c="3と5"' },
      { id: 'オ', text: 'a="5", b="3と5", c="3"' },
    ],
    correctAnswer: 'ウ',
    explanation: '最初の条件で3と5の両方で割り切れる場合をチェックするので a="3と5で割り切れる"、次に3で割り切れる場合なので b="3で割り切れる"、その次に5で割り切れる場合なので c="5で割り切れる" となります。',
  },
  {
    id: 'algo_sample_q4',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: '最大公約数・ユークリッドの互除法',
    difficulty: '初級',
    title: '最大公約数の計算',
    description: `関数 \`gcd\` は2つの正の整数の最大公約数を求めます（引き算ベースのユークリッドの互除法）。

プログラム中の **3つの空欄（a, b, c）** に入れる正しい組み合わせを解答群から選んでください。`,
    pseudoCode: `○整数型: gcd(整数型: x, 整数型: y)
  [a]
    if ([b])
      x ← x－y
    else
      y ← y－x
    endif
  [c]
  return x`,
    pythonCode: `def gcd(x, y):
    ___BLANK_A___:  # a: while (x != y)
        if ___BLANK_B___:  # b: x > y
            x = x - y
        else:
            y = y - x
    ___BLANK_C___  # c: (whileの終わり)
    return x

# テスト
print(gcd(12, 8))   # 期待値: 4
print(gcd(21, 14))  # 期待値: 7
print(gcd(15, 10))  # 期待値: 5`,
    choices: [
      { id: 'ア', text: 'a=if (x ≠ y), b=x < y, c=endif' },
      { id: 'イ', text: 'a=if (x ≠ y), b=x > y, c=endif' },
      { id: 'ウ', text: 'a=while (x ≠ y), b=x < y, c=endwhile' },
      { id: 'エ', text: 'a=while (x ≠ y), b=x > y, c=endwhile' },
    ],
    correctAnswer: 'エ',
    explanation: 'x と y が等しくなるまで繰り返す必要があるので while ループを使います。また、大きい方から小さい方を引くので、x > y のときに x から y を引きます。',
  },
  {
    id: 'algo_sample_q5',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: '数学的計算・平方根',
    difficulty: '初級',
    title: '平方根の計算',
    description: `関数 \`calc\` は正の実数 x, y を受け取り、√(x²+y²) を返します。

補助関数 \`pow(a, b)\` は a の b 乗を返します。

プログラム中の **空欄部分** に入れる正しい式を解答群から選んでください。`,
    pseudoCode: `○実数型: calc(実数型: x, 実数型: y)
  return [空欄]`,
    pythonCode: `def calc(x, y):
    return ___BLANK___  # ここに正しい式を入れる

# テスト（pow関数を使用）
print(calc(3, 4))   # 期待値: 5.0
print(calc(5, 12))  # 期待値: 13.0`,
    choices: [
      { id: 'ア', text: '(pow(x, 2) + pow(y, 2)) / pow(2, 0.5)' },
      { id: 'イ', text: '(pow(x, 2) + pow(y, 2)) / pow(x, y)' },
      { id: 'ウ', text: 'pow(2, pow(x, 0.5)) + pow(2, pow(y, 0.5))' },
      { id: 'エ', text: 'pow(pow(pow(2, x), y), 0.5)' },
      { id: 'オ', text: 'pow(pow(x, 2) + pow(y, 2), 0.5)' },
      { id: 'カ', text: 'pow(x, 2) * pow(y, 2) / pow(x, y)' },
      { id: 'キ', text: 'pow(x, y) / pow(2, 0.5)' },
    ],
    correctAnswer: 'オ',
    explanation: '√(x²+y²) を計算するには、まず x² + y² を計算し、その結果の 0.5 乗（平方根）を求めます。pow(a, 0.5) は √a を意味します。',
  },
  {
    id: 'algo_sample_q12',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: '文字列比較・類似度',
    difficulty: '初級',
    title: '文字列の類似度計算',
    description: `関数 \`sim_ratio\` は2つの文字配列の類似度を返します。

類似度は「一致する要素数 ÷ 総要素数」で計算されます。

プログラム中の **空欄部分** に入れる正しい条件式を解答群から選んでください。`,
    pseudoCode: `○実数型: simRatio(文字型の配列: s1, 文字型の配列: s2)
  整数型: i, cnt ← 0
  for (i を 1 から s1の要素数 まで 1 ずつ増やす)
    if ([空欄])
      cnt ← cnt＋1
    endif
  endfor
  return cnt ÷ s1の要素数`,
    pythonCode: `def sim_ratio(s1, s2):
    cnt = 0
    for i in range(len(s1)):
        if ___BLANK___:  # ここに正しい条件式を入れる
            cnt = cnt + 1
    return cnt / len(s1)

# テスト
print(sim_ratio(['a', 'b', 'c'], ['a', 'b', 'd']))  # 期待値: 0.666...
print(sim_ratio(['x', 'y', 'z'], ['x', 'y', 'z']))  # 期待値: 1.0`,
    choices: [
      { id: 'ア', text: 's1[i] != s2[cnt]' },
      { id: 'イ', text: 's1[i] != s2[i]' },
      { id: 'ウ', text: 's1[i] == s2[cnt]' },
      { id: 'エ', text: 's1[i] == s2[i]' },
    ],
    correctAnswer: 'エ',
    explanation: '同じ位置の要素を比較して一致するかどうかを確認します。したがって s1[i] == s2[i] が正しい条件式です。',
  },
  {
    id: 'algo_sample_q13',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: 'バグ発見・二分探索',
    difficulty: '中級',
    title: '二分探索のバグ発見',
    description: `二分探索関数 \`search\` には不具合があり、特定の条件で無限ループになります。

**どのような条件のとき無限ループになるか**を解答群から選んでください。

※バグは \`low ← middle\` と \`high ← middle\` の2箇所で、正しくは \`low ← middle + 1\` と \`high ← middle - 1\` です。`,
    pseudoCode: `○整数型: search(整数型の配列: data, 整数型: target)
  整数型: low, high, middle
  low ← 1
  high ← dataの要素数
  while (low ≦ high)
    middle ← (low ＋ high) ÷ 2 の商
    if (data[middle] ＜ target)
      low ← middle     ← バグ（low ← middle＋1 が正しい）
    elseif (data[middle] ＞ target)
      high ← middle    ← バグ（high ← middle－1 が正しい）
    else
      return middle
    endif
  endwhile
  return -1`,
    pythonCode: `def search(data, target):
    low = 0
    high = len(data) - 1
    while low <= high:
        middle = (low + high) // 2
        if data[middle] < target:
            low = middle      # バグ（low = middle + 1 が正しい）
        elif data[middle] > target:
            high = middle     # バグ（high = middle - 1 が正しい）
        else:
            return middle
    return -1

# テスト（無限ループになる条件を探す）
# print(search([1], 1))        # 要素数1、等しい
# print(search([1, 2], 1))     # 要素数2、先頭要素
# print(search([1, 2], 2))     # 要素数2、末尾要素 ← 無限ループ
print("この関数にはバグがあります")`,
    choices: [
      { id: 'ア', text: '要素数が1で、targetがその要素の値と等しい' },
      { id: 'イ', text: '要素数が2で、targetがdata先頭要素の値と等しい' },
      { id: 'ウ', text: '要素数が2で、targetがdata末尾要素の値と等しい' },
      { id: 'エ', text: '要素に-1が含まれている' },
    ],
    correctAnswer: 'ウ',
    explanation: '要素数が2で target が末尾要素と等しい場合、middle は 0 になり、data[0] < target となって low = middle = 0 のまま変わらず、無限ループになります。',
  },
  {
    id: 'algo_r06_q4',
    source: 'r06',
    year: 2024,
    category: 'アルゴリズム',
    subcategory: 'マージソート・トレース',
    difficulty: '中級',
    title: 'マージ処理のトレース',
    description: `昇順整列済みの2つの配列を併合する関数 \`merge\` があります。

\`merge([2, 3], [1, 4])\` を呼び出したとき、プログラム中の **\`/*** α ***/\`** の行は何回実行されるでしょうか？

※この行は3つ目の while ループ内の \`work[k] = data2[j]\` の行です。`,
    pseudoCode: `○整数型の配列: merge(整数型の配列: data1, 整数型の配列: data2)
  整数型: n1 ← data1の要素数
  整数型: n2 ← data2の要素数
  整数型の配列: work ← {(n1＋n2)個の未定義の値}
  整数型: i ← 1, j ← 1, k ← 1

  while ((i ≦ n1) and (j ≦ n2))
    if (data1[i] ≦ data2[j])
      work[k] ← data1[i]; i ← i＋1
    else
      work[k] ← data2[j]; j ← j＋1
    endif
    k ← k＋1
  endwhile

  while (i ≦ n1)
    work[k] ← data1[i]; i ← i＋1; k ← k＋1
  endwhile

  while (j ≦ n2)
    work[k] ← data2[j]  /*** α ***/
    j ← j＋1; k ← k＋1
  endwhile
  return work`,
    pythonCode: `def merge(data1, data2):
    n1 = len(data1)
    n2 = len(data2)
    work = [None] * (n1 + n2)
    i = 0
    j = 0
    k = 0

    while i < n1 and j < n2:
        if data1[i] <= data2[j]:
            work[k] = data1[i]
            i = i + 1
        else:
            work[k] = data2[j]
            j = j + 1
        k = k + 1

    while i < n1:
        work[k] = data1[i]
        i = i + 1
        k = k + 1

    while j < n2:
        work[k] = data2[j]  # /*** α ***/
        j = j + 1
        k = k + 1

    return work

# テスト
result = merge([2, 3], [1, 4])
print(result)  # 期待値: [1, 2, 3, 4]`,
    choices: [
      { id: 'ア', text: '実行されない' },
      { id: 'イ', text: '1回実行される' },
      { id: 'ウ', text: '2回実行される' },
      { id: 'エ', text: '3回実行される' },
    ],
    correctAnswer: 'イ',
    explanation: 'トレースすると、最初の while で [1, 2, 3] が処理され、data1 の要素がすべて処理されます。最後の while で data2 の残り [4] が 1 回処理されます。',
  },
  {
    id: 'algo_sample_q11',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: 'ソート・バケットソート',
    difficulty: '中級',
    title: 'バケットソートの条件',
    description: `関数 \`bin_sort\` は、配列を昇順に並べ替えて返します（バケットソート方式）。

この関数を \`bin_sort([空欄])\` として呼び出すとき、**戻り値の配列に未定義の要素が含まれず、昇順に並んでいる**ような引数を解答群から選んでください。`,
    pseudoCode: `○整数型の配列: binSort(整数型の配列: data)
  整数型: n ← dataの要素数
  整数型の配列: bins ← {n個の未定義の値}
  整数型: i
  for (i を 1 から n まで 1 ずつ増やす)
    bins[data[i]] ← data[i]
  endfor
  return bins`,
    pythonCode: `def bin_sort(data):
    n = len(data)
    bins = [None] * n
    for i in range(n):
        bins[data[i] - 1] = data[i]  # 1始まりを0始まりに調整
    return bins

# テスト
print(bin_sort([2, 6, 3, 1, 4, 5]))  # 期待値: [1, 2, 3, 4, 5, 6]
# print(bin_sort([3, 1, 4, 4, 5, 2]))  # 重複があるとNG`,
    choices: [
      { id: 'ア', text: '[2, 6, 3, 1, 4, 5]' },
      { id: 'イ', text: '[3, 1, 4, 4, 5, 2]' },
      { id: 'ウ', text: '[4, 2, 1, 5, 6, 2]' },
      { id: 'エ', text: '[5, 3, 4, 3, 2, 6]' },
    ],
    correctAnswer: 'ア',
    explanation: 'この関数は data[i] をインデックスとして bins に格納します。未定義が残らないためには、1〜n の値が重複なく含まれている必要があります。アは [1, 2, 3, 4, 5, 6] の並び替えなので条件を満たします。',
  },
  {
    id: 'algo_r06_q3',
    source: 'r06',
    year: 2024,
    category: 'アルゴリズム',
    subcategory: 'グラフ・隣接行列',
    difficulty: '中級',
    title: '無向グラフの隣接行列',
    description: `無向グラフを隣接行列に変換する関数 \`edges_to_matrix\` があります。

辺の配列 \`[[1,3], [1,4], [3,4], [2,4], [4,5]]\` を持つグラフを隣接行列で表現します。

プログラム中の **空欄部分** に入れる正しい処理を解答群から選んでください。

※無向グラフは対称行列になるため、両方向の辺を設定する必要があります。`,
    pseudoCode: `○整数型の二次元配列: edgesToMatrix(整数型配列の配列: edgeList, 整数型: nodeNum)
  整数型の二次元配列: adjMatrix ← {nodeNum行nodeNum列の 0}
  整数型: i, u, v
  for (i を 1 から edgeListの要素数 まで 1 ずつ増やす)
    u ← edgeList[i][1]
    v ← edgeList[i][2]
    [空欄]
  endfor
  return adjMatrix`,
    pythonCode: `def edges_to_matrix(edge_list, node_num):
    adj_matrix = [[0 for _ in range(node_num)] for _ in range(node_num)]
    for i in range(len(edge_list)):
        u = edge_list[i][0] - 1  # 0始まりに調整
        v = edge_list[i][1] - 1  # 0始まりに調整
        ___BLANK___  # ここに正しい処理を入れる
    return adj_matrix

# テスト
edges = [[1,3], [1,4], [3,4], [2,4], [4,5]]
result = edges_to_matrix(edges, 5)
for row in result:
    print(row)`,
    choices: [
      { id: 'ア', text: 'adj_matrix[u][u] = 1' },
      { id: 'イ', text: 'adj_matrix[u][u] = 1; adj_matrix[v][v] = 1' },
      { id: 'ウ', text: 'adj_matrix[u][v] = 1' },
      { id: 'エ', text: 'adj_matrix[u][v] = 1; adj_matrix[v][u] = 1' },
      { id: 'オ', text: 'adj_matrix[v][u] = 1' },
      { id: 'カ', text: 'adj_matrix[v][v] = 1' },
    ],
    correctAnswer: 'エ',
    explanation: '無向グラフでは、辺 (u, v) は u→v と v→u の両方向を意味します。したがって隣接行列では [u][v] と [v][u] の両方に 1 をセットする必要があります。',
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
