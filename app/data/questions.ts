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

  // ===== カテゴリ①: プログラムの基本要素（オリジナル問題） =====

  {
    id: 'orig_cat1_q1',
    source: 'original_cat1',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: '繰返し処理・合計計算',
    difficulty: '初級',
    title: '偶数の合計計算',
    description: `次のプログラムを実行すると出力される値はどれか。

このプログラムは1から10までの偶数の合計を計算します。`,
    pseudoCode: `整数型: i, sum ← 0
for (i を 1 から 10 まで 1 ずつ増やす)
  if (i mod 2 ＝ 0)
    sum ← sum ＋ i
  endif
endfor
sumの値を出力する`,
    pythonCode: `sum_val = 0
for i in range(1, 11):
    if i % 2 == 0:
        sum_val = sum_val + i
print(sum_val)`,
    choices: [
      { id: 'ア', text: '25' },
      { id: 'イ', text: '28' },
      { id: 'ウ', text: '30' },
      { id: 'エ', text: '55' },
      { id: 'オ', text: '60' },
    ],
    correctAnswer: 'ウ',
    explanation: '1〜10の偶数（2, 4, 6, 8, 10）の合計は 2+4+6+8+10 = 30 です。',
  },

  {
    id: 'orig_cat1_q2',
    source: 'original_cat1',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: 'do-while・後判定繰返し',
    difficulty: '初級',
    title: 'do-while文のトレース',
    description: `次のプログラムを実行すると、\`count\` の値はいくつになるか。

do-while文は条件判定が後にあるため、最低1回は実行されます。`,
    pseudoCode: `整数型: n ← 1
整数型: count ← 0
do
  n ← n × 2
  count ← count ＋ 1
while (n ＜ 100)
countの値を出力する`,
    pythonCode: `n = 1
count = 0
while True:
    n = n * 2
    count = count + 1
    if not (n < 100):
        break
print(count)`,
    choices: [
      { id: 'ア', text: '5' },
      { id: 'イ', text: '6' },
      { id: 'ウ', text: '6' },
      { id: 'エ', text: '7' },
      { id: 'オ', text: '8' },
    ],
    correctAnswer: 'エ',
    explanation: 'nの値は 2→4→8→16→32→64→128 と変化し、n≧100となった時点でループを抜けます。したがってcount = 7です。',
  },

  {
    id: 'orig_cat1_q3',
    source: 'original_cat1',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: '多重ループ・九九テーブル',
    difficulty: '初級',
    title: '多重ループの条件判定',
    description: `次のプログラム中の **空欄部分** に入れる正しい答えを選べ。

このプログラムは、\`i×j\` の値が20以上になる組み合わせを数えます。`,
    pseudoCode: `整数型: i, j, count ← 0
for (i を 1 から 9 まで 1 ずつ増やす)
  for (j を 1 から 9 まで 1 ずつ増やす)
    if ( [空欄] )
      count ← count ＋ 1
    endif
  endfor
endfor
countの値を出力する`,
    pythonCode: `count = 0
for i in range(1, 10):
    for j in range(1, 10):
        if ___BLANK___:  # ここに正しい条件式を入れる
            count = count + 1
print(count)`,
    choices: [
      { id: 'ア', text: 'i * j <= 20' },
      { id: 'イ', text: 'i * j >= 20' },
      { id: 'ウ', text: 'i + j >= 20' },
      { id: 'エ', text: 'i * j == 20' },
      { id: 'オ', text: 'i * j > 20' },
    ],
    correctAnswer: 'イ',
    explanation: '「20以上になる組み合わせを数える」ので、条件は `i * j >= 20` が正しいです。',
  },

  {
    id: 'orig_cat1_q4',
    source: 'original_cat1',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: '配列の最大値探索・穴埋め',
    difficulty: '初級',
    title: '配列の最大値を求める関数',
    description: `関数 \`find_max\` は整数のリストを受け取り、その最大値を返します。

プログラム中の **空欄a** と **空欄b** に入れる正しい組み合わせを選べ。`,
    pseudoCode: `○整数型: findMax(整数型の配列: arr)
  整数型: i, maxVal
  maxVal ← arr[1]
  for (i を 2 から arrの要素数 まで 1 ずつ増やす)
    if ( [空欄a] )
      [空欄b]
    endif
  endfor
  return maxVal`,
    pythonCode: `def find_max(arr):
    max_val = arr[0]
    for i in range(1, len(arr)):
        if ___BLANK_A___:  # 空欄a
            ___BLANK_B___  # 空欄b
    return max_val

# テスト
print(find_max([3, 7, 2, 9, 1]))  # 期待値: 9`,
    choices: [
      { id: 'ア', text: '空欄a: arr[i] < max_val, 空欄b: max_val = arr[i]' },
      { id: 'イ', text: '空欄a: arr[i] < max_val, 空欄b: i = i + 1' },
      { id: 'ウ', text: '空欄a: arr[i] > max_val, 空欄b: max_val = arr[i]' },
      { id: 'エ', text: '空欄a: arr[i] == max_val, 空欄b: max_val = arr[i]' },
      { id: 'オ', text: '空欄a: arr[i] != max_val, 空欄b: max_val = arr[i]' },
    ],
    correctAnswer: 'ウ',
    explanation: '最大値を更新するには「現在の要素がmax_valより大きい場合」に「max_valを現在の要素で上書き」する必要があります。',
  },

  {
    id: 'orig_cat1_q5',
    source: 'original_cat1',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: '関数・素数判定',
    difficulty: '中級',
    title: '素数判定関数',
    description: `関数 \`is_prime\` は正の整数 n を受け取り、n が素数なら \`True\`、そうでなければ \`False\` を返します。

プログラム中の **空欄部分** に入れる正しい答えを選べ。`,
    pseudoCode: `○論理型: isPrime(整数型: n)
  整数型: i
  if (n ≦ 1)
    return false
  endif
  for (i を 2 から [空欄] まで 1 ずつ増やす)
    if (n mod i ＝ 0)
      return false
    endif
  endfor
  return true`,
    pythonCode: `import math

def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, ___BLANK___ + 1):  # 空欄部分
        if n % i == 0:
            return False
    return True

# テスト
print(is_prime(17))  # 期待値: True
print(is_prime(18))  # 期待値: False`,
    choices: [
      { id: 'ア', text: 'n' },
      { id: 'イ', text: 'n ÷ 2 の商' },
      { id: 'ウ', text: 'n ÷ 2 の商 + 1' },
      { id: 'エ', text: 'n - 1' },
      { id: 'オ', text: 'n の平方根の小数点以下切捨て値' },
    ],
    correctAnswer: 'オ',
    explanation: '素数判定は √n 以下の数で割り切れるかを確認すれば十分です。n = a × b とすると、a と b のどちらかは必ず √n 以下になるためです。',
  },

  {
    id: 'orig_cat1_q6',
    source: 'original_cat1',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: '論理演算・ビット演算基礎',
    difficulty: '初級',
    title: 'ビット論理積（AND）',
    description: `次の記述中の **空欄部分** に入れる正しい答えを選べ。

プログラムを実行すると、変数 \`result\` の値は **空欄** になります。`,
    pseudoCode: `整数型: a ← 12   // 2進数: 00001100
整数型: b ← 10   // 2進数: 00001010
整数型: result
result ← a and b   // ビット単位の論理積
resultの値を出力する`,
    pythonCode: `a = 12  # 2進数: 00001100
b = 10  # 2進数: 00001010
result = a & b  # ビット単位の論理積
print(result)`,
    choices: [
      { id: 'ア', text: '2' },
      { id: 'イ', text: '8' },
      { id: 'ウ', text: '14' },
      { id: 'エ', text: '22' },
      { id: 'オ', text: '6' },
    ],
    correctAnswer: 'イ',
    explanation: `ビット論理積の計算：
  00001100 (12)
AND 00001010 (10)
= 00001000 (8)`,
  },

  // ===== カテゴリ②: データ構造及びアルゴリズム（オリジナル問題） =====

  {
    id: 'orig_cat2_q1',
    source: 'original_cat2',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: 'スタック・トレース',
    difficulty: '初級',
    title: 'スタック操作のトレース',
    description: `クラス \`Stack\` を使った手続を実行したとき、最後に出力される値はどれか。

スタックはLIFO（後入れ先出し）構造です。`,
    pseudoCode: `クラス Stack の仕様:
- Stack(): 空のスタック生成
- push(n): nをスタックに積む
- pop(): スタックの一番上の値を取り出して返す

手続:
Stack: s ← Stack()
s.push(3)
s.push(7)
s.push(1)
s.pop()          // 戻り値は使用しない
s.push(5)
s.push(2)
s.pop()          // 戻り値は使用しない
s.pop()の戻り値を出力する`,
    pythonCode: `# ===== Stack クラス（問題を解く上で注目する必要はありません） =====
class Stack:
    def __init__(self):
        self.items = []
    def push(self, item):
        self.items.append(item)
    def pop(self):
        return self.items.pop()
    def is_empty(self):
        return len(self.items) == 0
# ===== 以上、補助クラス =====

s = Stack()
s.push(3)
s.push(7)
s.push(1)
s.pop()       # 1を取り出し（使用しない）
s.push(5)
s.push(2)
s.pop()       # 2を取り出し（使用しない）
print(s.pop())  # 最後のpopの戻り値を出力`,
    choices: [
      { id: 'ア', text: '1' },
      { id: 'イ', text: '2' },
      { id: 'ウ', text: '5' },
      { id: 'エ', text: '7' },
      { id: 'オ', text: '3' },
    ],
    correctAnswer: 'ウ',
    explanation: `操作トレース:
1. push(3) → [3]
2. push(7) → [3,7]
3. push(1) → [3,7,1]
4. pop() → [3,7]（1を取り出し）
5. push(5) → [3,7,5]
6. push(2) → [3,7,5,2]
7. pop() → [3,7,5]（2を取り出し）
8. pop() → 5 を出力`,
  },

  {
    id: 'orig_cat2_q2',
    source: 'original_cat2',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: 'キュー・FIFO・トレース',
    difficulty: '初級',
    title: 'キュー操作のトレース',
    description: `クラス \`Queue\` を使った手続のトレース。

キューはFIFO（先入れ先出し）構造です。`,
    pseudoCode: `クラス Queue の仕様:
- Queue(): 空のキュー生成
- enqueue(s): sをキューの末尾に追加
- dequeue(): キューの先頭から取り出して返す
- size(): キュー内の要素数を返す

手続:
Queue: q ← Queue()
q.enqueue("X")
q.enqueue("Y")
q.enqueue("Z")
q.dequeue()           // 戻り値は使用しない
q.enqueue("W")
while (q.size() が 0 と等しくない)
  q.dequeue() の戻り値を出力
endwhile`,
    pythonCode: `# ===== Queue クラス（問題を解く上で注目する必要はありません） =====
class Queue:
    def __init__(self):
        self.items = []
    def enqueue(self, item):
        self.items.append(item)
    def dequeue(self):
        return self.items.pop(0)
    def size(self):
        return len(self.items)
# ===== 以上、補助クラス =====

q = Queue()
q.enqueue("X")
q.enqueue("Y")
q.enqueue("Z")
q.dequeue()  # Xを取り出し（使用しない）
q.enqueue("W")
while q.size() != 0:
    print(q.dequeue(), end=", " if q.size() > 0 else "")
print()  # 改行`,
    choices: [
      { id: 'ア', text: 'X, Y, Z, W' },
      { id: 'イ', text: 'Z, Y, X, W' },
      { id: 'ウ', text: 'W, Z, Y' },
      { id: 'エ', text: 'Y, Z, W' },
      { id: 'オ', text: 'X, W, Z' },
    ],
    correctAnswer: 'エ',
    explanation: `操作トレース:
1. enqueue("X") → [X]
2. enqueue("Y") → [X,Y]
3. enqueue("Z") → [X,Y,Z]
4. dequeue() → [Y,Z]（Xを取り出し）
5. enqueue("W") → [Y,Z,W]
6. whileで順に出力: Y → Z → W`,
  },

  {
    id: 'orig_cat2_q3',
    source: 'original_cat2',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: '再帰・フィボナッチ数列',
    difficulty: '中級',
    title: 'フィボナッチ数列（再帰）',
    description: `関数 \`fib\` はフィボナッチ数列の第n項を返します。

\`fib(6)\` を呼び出したとき、戻り値はいくつか。`,
    pseudoCode: `○整数型: fib(整数型: n)
  if (n ≦ 1)
    return n
  endif
  return fib(n－1) ＋ fib(n－2)`,
    pythonCode: `def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

# テスト
print(fib(6))  # 期待値は？`,
    choices: [
      { id: 'ア', text: '5' },
      { id: 'イ', text: '7' },
      { id: 'ウ', text: '8' },
      { id: 'エ', text: '13' },
      { id: 'オ', text: '21' },
    ],
    correctAnswer: 'ウ',
    explanation: `フィボナッチ数列: 0, 1, 1, 2, 3, 5, 8, 13, 21...
fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5, fib(6)=8`,
  },

  {
    id: 'orig_cat2_q4',
    source: 'original_cat2',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: 'バブルソート・トレース',
    difficulty: '中級',
    title: 'バブルソートのトレース',
    description: `次のバブルソートのプログラムを \`data = [5, 2, 8, 1, 4]\` で実行したとき、外側ループが \`i = 2\` を終えた時点での配列の状態はどれか。`,
    pseudoCode: `○bubbleSort(整数型の配列: data)
  整数型: i, j, tmp
  for (i を 1 から data の要素数－1 まで 1 ずつ増やす)
    for (j を 1 から data の要素数－i まで 1 ずつ増やす)
      if (data[j] ＞ data[j＋1])
        tmp ← data[j]
        data[j] ← data[j＋1]
        data[j＋1] ← tmp
      endif
    endfor
  endfor`,
    pythonCode: `def bubble_sort(data):
    n = len(data)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if data[j] > data[j + 1]:
                data[j], data[j + 1] = data[j + 1], data[j]
    return data

# テスト（i=2まで実行した状態を確認）
data = [5, 2, 8, 1, 4]
# i=0（1回目）終了後の状態を確認
# i=1（2回目）終了後の状態を確認
print(bubble_sort(data.copy()))  # 完全ソート結果`,
    choices: [
      { id: 'ア', text: '[1, 2, 4, 5, 8]' },
      { id: 'イ', text: '[2, 1, 4, 5, 8]' },
      { id: 'ウ', text: '[1, 2, 5, 4, 8]' },
      { id: 'エ', text: '[2, 4, 1, 5, 8]' },
      { id: 'オ', text: '[1, 4, 2, 5, 8]' },
    ],
    correctAnswer: 'イ',
    explanation: `i=1終了後: [2, 5, 1, 4, 8] → 最大値8が末尾に確定
i=2終了後: [2, 1, 4, 5, 8] → 2番目に大きい5が末尾2番目に確定`,
  },

  {
    id: 'orig_cat2_q5',
    source: 'original_cat2',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: '二分探索・穴埋め',
    difficulty: '中級',
    title: '二分探索の穴埋め',
    description: `昇順に整列された配列から二分探索で値を探す関数 \`binary_search\` の穴埋め。

**空欄a** と **空欄b** に入れる正しい組み合わせを選べ。`,
    pseudoCode: `○整数型: binarySearch(整数型の配列: data, 整数型: target)
  整数型: low ← 1
  整数型: high ← dataの要素数
  整数型: mid
  while (low ≦ high)
    mid ← (low ＋ high) ÷ 2 の商
    if (data[mid] ＝ target)
      return mid
    elseif (data[mid] ＜ target)
      low ← [空欄a]
    else
      high ← [空欄b]
    endif
  endwhile
  return －1`,
    pythonCode: `def binary_search(data, target):
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if data[mid] == target:
            return mid
        elif data[mid] < target:
            low = ___BLANK_A___  # 空欄a
        else:
            high = ___BLANK_B___  # 空欄b
    return -1

# テスト
print(binary_search([1, 3, 5, 7, 9], 7))  # 期待値: 3（インデックス）`,
    choices: [
      { id: 'ア', text: '空欄a: mid, 空欄b: mid' },
      { id: 'イ', text: '空欄a: mid, 空欄b: mid - 1' },
      { id: 'ウ', text: '空欄a: mid + 1, 空欄b: mid' },
      { id: 'エ', text: '空欄a: mid + 1, 空欄b: mid - 1' },
      { id: 'オ', text: '空欄a: mid - 1, 空欄b: mid + 1' },
    ],
    correctAnswer: 'エ',
    explanation: `- data[mid] < target（目標値は右半分）→ low = mid + 1（midは既に確認済み）
- data[mid] > target（目標値は左半分）→ high = mid - 1（midは既に確認済み）`,
  },

  {
    id: 'orig_cat2_q6',
    source: 'original_cat2',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: '連結リスト・要素追加',
    difficulty: '中級',
    title: '連結リストの先頭に要素を追加',
    description: `単方向リストの先頭に要素を追加する手続 \`insert_head\` の穴埋め。

**空欄a** と **空欄b** に入れる正しい組み合わせを選べ。`,
    pseudoCode: `クラス Node のメンバ変数:
- val（文字型）
- next（Node型、次の要素の参照）

大域: Node: listHead  // リストの先頭要素

○insertHead(文字型: newVal)
  Node: newNode ← 新しい Node のインスタンス
  newNode.val ← newVal
  newNode.next ← [空欄a]
  [空欄b] ← newNode`,
    pythonCode: `# ===== Node クラス（問題を解く上で注目する必要はありません） =====
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
# ===== 以上、補助クラス =====

list_head = None

def insert_head(new_val):
    global list_head
    new_node = Node(new_val)
    new_node.next = ___BLANK_A___  # 空欄a
    ___BLANK_B___ = new_node       # 空欄b

# テスト
insert_head('A')
insert_head('B')
# リスト: B -> A`,
    choices: [
      { id: 'ア', text: '空欄a: 未定義の値, 空欄b: list_head.next' },
      { id: 'イ', text: '空欄a: list_head.next, 空欄b: list_head' },
      { id: 'ウ', text: '空欄a: list_head, 空欄b: list_head' },
      { id: 'エ', text: '空欄a: 未定義の値, 空欄b: list_head' },
      { id: 'オ', text: '空欄a: list_head, 空欄b: list_head.next' },
    ],
    correctAnswer: 'ウ',
    explanation: `1. 新ノードの next に現在の先頭(list_head)を設定
2. list_head を新ノードで上書き
→ 新ノードが先頭となり、旧先頭は新ノードのnextに連結されます。`,
  },

  {
    id: 'orig_cat2_q7',
    source: 'original_cat2',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: '二分探索木・挿入とトレース',
    difficulty: '中級',
    title: '二分探索木の走査順序',
    description: `二分探索木に値を挿入する手続を使い、空の木に \`[5, 3, 7, 1, 4]\` の順に挿入したとき、根から先行順（前順: 根→左→右）でたどると出力される順序はどれか。

挿入後の木の構造:
\`\`\`
      5
     / \\
    3   7
   / \\
  1   4
\`\`\``,
    pythonCode: `# ===== TreeNode クラス（問題を解く上で注目する必要はありません） =====
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def insert_bst(root, val):
    if root is None:
        return TreeNode(val)
    if val < root.val:
        root.left = insert_bst(root.left, val)
    else:
        root.right = insert_bst(root.right, val)
    return root

def preorder(root):
    if root:
        print(root.val, end=", ")
        preorder(root.left)
        preorder(root.right)
# ===== 以上、補助クラス =====

root = None
for val in [5, 3, 7, 1, 4]:
    root = insert_bst(root, val)

preorder(root)  # 先行順（前順）で出力
print()`,
    choices: [
      { id: 'ア', text: '5, 3, 1, 4, 7（先行順・前順）' },
      { id: 'イ', text: '1, 3, 4, 5, 7（中順・昇順）' },
      { id: 'ウ', text: '1, 4, 3, 7, 5（後行順・後順）' },
      { id: 'エ', text: '5, 7, 3, 4, 1' },
      { id: 'オ', text: '3, 1, 4, 5, 7' },
    ],
    correctAnswer: 'ア',
    explanation: `- 先行順（前順）: 根→左→右 → 5,3,1,4,7
- 中順（間順）: 左→根→右 → 1,3,4,5,7（昇順になる）
- 後行順（後順）: 左→右→根 → 1,4,3,7,5`,
  },

  {
    id: 'orig_cat2_q8',
    source: 'original_cat2',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: 'クイックソート・再帰・穴埋め',
    difficulty: '上級',
    title: 'クイックソートの穴埋め',
    description: `クイックソートの関数 \`quick_sort\` の穴埋め（**空欄a**, **空欄b**）。

ピボットは配列の先頭要素とします。`,
    pseudoCode: `○quickSort(整数型の配列: data, 整数型: left, 整数型: right)
  整数型: i, j, pivot, tmp
  if (left ≧ right)
    return
  endif
  pivot ← data[left]
  i ← left ＋ 1
  j ← right
  while (i ≦ j)
    while (i ≦ right and data[i] ≦ pivot)
      i ← i ＋ 1
    endwhile
    while (j ≧ left ＋ 1 and data[j] ≧ pivot)
      j ← j － 1
    endwhile
    if (i ＜ j)
      tmp ← data[i]; data[i] ← data[j]; data[j] ← tmp
    endif
  endwhile
  tmp ← data[left]; data[left] ← data[j]; data[j] ← tmp
  quickSort(data, [空欄a], j－1)
  quickSort(data, j＋1, [空欄b])`,
    pythonCode: `def quick_sort(data, left, right):
    if left >= right:
        return
    pivot = data[left]
    i = left + 1
    j = right
    while i <= j:
        while i <= right and data[i] <= pivot:
            i += 1
        while j >= left + 1 and data[j] >= pivot:
            j -= 1
        if i < j:
            data[i], data[j] = data[j], data[i]
    data[left], data[j] = data[j], data[left]
    quick_sort(data, ___BLANK_A___, j - 1)  # 空欄a
    quick_sort(data, j + 1, ___BLANK_B___)  # 空欄b

# テスト
data = [5, 2, 8, 1, 4]
quick_sort(data, 0, len(data) - 1)
print(data)  # 期待値: [1, 2, 4, 5, 8]`,
    choices: [
      { id: 'ア', text: '空欄a: left, 空欄b: j' },
      { id: 'イ', text: '空欄a: left, 空欄b: right' },
      { id: 'ウ', text: '空欄a: left + 1, 空欄b: right' },
      { id: 'エ', text: '空欄a: j + 1, 空欄b: right' },
      { id: 'オ', text: '空欄a: left, 空欄b: right - 1' },
    ],
    correctAnswer: 'イ',
    explanation: `ピボットが data[j] に配置された後:
- 左サブ配列: data[left] 〜 data[j-1] → quick_sort(data, left, j-1)
- 右サブ配列: data[j+1] 〜 data[right] → quick_sort(data, j+1, right)`,
  },

  {
    id: 'orig_cat2_q9',
    source: 'original_cat2',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: '文字列処理・パリンドローム（回文）判定',
    difficulty: '中級',
    title: '回文（パリンドローム）判定',
    description: `関数 \`is_palindrome\` は文字列が回文（前から読んでも後ろから読んでも同じ）なら \`True\`、そうでなければ \`False\` を返します。

プログラム中の **空欄部分** に入れる正しい答えを選べ。`,
    pseudoCode: `○論理型: isPalindrome(文字列型: str)
  整数型: i, len
  len ← strの文字数
  for (i を 1 から len ÷ 2 の商 まで 1 ずつ増やす)
    if ( [空欄] )
      return false
    endif
  endfor
  return true`,
    pythonCode: `def is_palindrome(s):
    length = len(s)
    for i in range(length // 2):
        if ___BLANK___:  # 空欄部分
            return False
    return True

# テスト
print(is_palindrome("racecar"))  # 期待値: True
print(is_palindrome("hello"))    # 期待値: False`,
    choices: [
      { id: 'ア', text: 's[i] == s[length - i]' },
      { id: 'イ', text: 's[i] == s[length - i + 1]' },
      { id: 'ウ', text: 's[i] != s[length - i]' },
      { id: 'エ', text: 's[i] != s[length - i - 1]' },
      { id: 'オ', text: 's[i] != s[length // 2]' },
    ],
    correctAnswer: 'エ',
    explanation: `例: "racecar"（length=7）
- i=0: 0文字目 'r' と 6文字目 'r' を比較 → length-i-1 = 6
- i=1: 1文字目 'a' と 5文字目 'a' を比較 → length-i-1 = 5
不一致なら回文でないので False を返します。`,
  },

  {
    id: 'orig_cat2_q10',
    source: 'original_cat2',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: 'バグ発見・選択ソート',
    difficulty: '中級',
    title: '選択ソートのバグ発見',
    description: `次の選択ソートのプログラムには不具合があります。どのような入力を与えると問題が発生するか。

**バグの説明**: 外側forループの上限が \`len(data)\` になっていますが、正しくは \`len(data) - 1\` であるべきです。`,
    pseudoCode: `○selectionSort(整数型の配列: data)
  整数型: i, j, minIdx, tmp
  for (i を 1 から data の要素数 まで 1 ずつ増やす)   // ← バグ
    minIdx ← i
    for (j を i＋1 から dataの要素数 まで 1 ずつ増やす)
      if (data[j] ＜ data[minIdx])
        minIdx ← j
      endif
    endfor
    tmp ← data[i]; data[i] ← data[minIdx]; data[minIdx] ← tmp
  endfor`,
    pythonCode: `def selection_sort(data):
    n = len(data)
    # バグ: range(n) ではなく range(n-1) が正しい
    for i in range(n):  # ← ここがバグ
        min_idx = i
        for j in range(i + 1, n):
            if data[j] < data[min_idx]:
                min_idx = j
        data[i], data[min_idx] = data[min_idx], data[i]
    return data

# テスト
print(selection_sort([3, 1, 4, 1, 5]))`,
    choices: [
      { id: 'ア', text: '要素数が1の配列' },
      { id: 'イ', text: '既に昇順にソートされた配列' },
      { id: 'ウ', text: 'すべての要素が同じ値の配列' },
      { id: 'エ', text: '要素数が偶数の配列' },
      { id: 'オ', text: 'このバグは実際には結果に影響しない' },
    ],
    correctAnswer: 'オ',
    explanation: `最後のi = n-1の時、内側forループは range(n, n) となり0回実行されるため、data[i] と data[min_idx]（= data[i]）の交換が発生しますが結果は変わりません。
→ 実は最終回の処理は常に自己交換で結果に影響しません。`,
  },

  // ===== カテゴリ③: プログラミングの諸分野への適用（オリジナル問題） =====

  {
    id: 'orig_cat3_q1',
    source: 'original_cat3',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: 'ハッシュ法・チェーン法',
    difficulty: '上級',
    title: 'ハッシュ表のインデックス計算',
    description: `ハッシュ表を使ったデータ格納のプログラム穴埋め。

ハッシュ関数は \`key mod tableSize\` とし、衝突時はチェーン法で処理します。

プログラム中の **空欄部分** に入れる正しい答えを選べ。

**注意**: 配列の要素番号は1始まりです。`,
    pseudoCode: `整数型: tableSize ← 7
整数型配列: table ← {tableSize 個の -1}  // -1は未使用を示す

○整数型: hashSearch(整数型: key)
  整数型: idx
  idx ← [空欄]
  if (table[idx] ＝ key)
    return idx
  endif
  return -1

○hashInsert(整数型: key)
  整数型: idx
  idx ← [空欄]
  table[idx] ← key`,
    pythonCode: `table_size = 7
table = [-1] * table_size  # -1は未使用を示す（インデックス0始まり）

def hash_search(key):
    idx = ___BLANK___  # 空欄部分（Pythonは0始まりなので+1は不要）
    if table[idx] == key:
        return idx
    return -1

def hash_insert(key):
    idx = ___BLANK___  # 空欄部分（Pythonは0始まりなので+1は不要）
    table[idx] = key

# テスト
hash_insert(14)  # 14 mod 7 = 0
hash_insert(8)   # 8 mod 7 = 1
print(table)`,
    choices: [
      { id: 'ア', text: 'key ÷ table_size の商' },
      { id: 'イ', text: 'key + table_size' },
      { id: 'ウ', text: 'key % table_size + 1（1始まりのため+1）' },
      { id: 'エ', text: 'key % table_size' },
      { id: 'オ', text: 'key * table_size % 7' },
    ],
    correctAnswer: 'エ',
    explanation: `Pythonでは配列インデックスは0始まりなので、\`key % table_size\` でインデックスを計算します。
擬似言語では1始まりの場合 \`key mod tableSize + 1\` となりますが、Pythonでは \`key % table_size\` です。`,
  },

  {
    id: 'orig_cat3_q2',
    source: 'original_cat3',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: '統計処理・中央値・パーセンタイル',
    difficulty: '上級',
    title: '中央値（メジアン）の計算',
    description: `昇順にソートされた配列から中央値（メジアン）を返す関数 \`median\` の穴埋め（**空欄a**, **空欄b**）。

要素数が偶数の場合は中央2つの平均値、奇数の場合は中央の値を返します。`,
    pseudoCode: `○実数型: median(整数型の配列: sortedData)
  整数型: n ← sortedDataの要素数
  if ( [空欄a] )
    return (sortedData[n ÷ 2] ＋ sortedData[n ÷ 2 ＋ 1]) ÷ 2.0
  else
    return [空欄b]
  endif`,
    pythonCode: `def median(sorted_data):
    n = len(sorted_data)
    if ___BLANK_A___:  # 空欄a
        # 偶数の場合：中央2つの平均
        return (sorted_data[n // 2 - 1] + sorted_data[n // 2]) / 2.0
    else:
        # 奇数の場合：中央の値
        return ___BLANK_B___  # 空欄b

# テスト
print(median([1, 2, 3, 4]))     # 期待値: 2.5（偶数）
print(median([1, 2, 3, 4, 5]))  # 期待値: 3（奇数）`,
    choices: [
      { id: 'ア', text: '空欄a: n % 2 == 0, 空欄b: sorted_data[n // 2]' },
      { id: 'イ', text: '空欄a: n % 2 == 0, 空欄b: sorted_data[n // 2 + 1]' },
      { id: 'ウ', text: '空欄a: n % 2 != 0, 空欄b: sorted_data[n // 2]' },
      { id: 'エ', text: '空欄a: n % 2 == 1, 空欄b: sorted_data[(n + 1) // 2]' },
      { id: 'オ', text: '空欄a: n % 2 == 0, 空欄b: sorted_data[n // 2]' },
    ],
    correctAnswer: 'オ',
    explanation: `- 偶数（n=4）: [1,2,3,4] → (2+3)/2 = 2.5
  - インデックス: n//2-1=1番目と n//2=2番目の平均
- 奇数（n=5）: [1,2,3,4,5] → 中央は2番目（インデックス）
  - インデックス: n//2 = 2番目`,
  },

  {
    id: 'orig_cat3_q3',
    source: 'original_cat3',
    year: 2025,
    category: 'アルゴリズム',
    subcategory: '文字列圧縮（ランレングス符号化）',
    difficulty: '上級',
    title: 'ランレングス符号化',
    description: `ランレングス符号化（連続する同じ文字を「文字+回数」で表現）を行う関数 \`rle\` の穴埋め。

例: \`"AAABBC"\` → \`"A3B2C1"\`

**空欄a** と **空欄b** に入れる正しい組み合わせを選べ。`,
    pseudoCode: `○文字列型: rle(文字列型: str)
  文字列型: result ← ""
  整数型: i ← 1, count ← 1
  文字型: current
  if (strの文字数 ＝ 0)
    return result
  endif
  current ← strの1文字目
  for (i を 2 から strの文字数 まで 1 ずつ増やす)
    if ( [空欄a] )
      count ← count ＋ 1
    else
      result ← result ＋ current ＋ count を文字列に変換した値
      [空欄b]
    endif
  endfor
  result ← result ＋ current ＋ count を文字列に変換した値
  return result`,
    pythonCode: `def rle(s):
    if len(s) == 0:
        return ""

    result = ""
    current = s[0]
    count = 1

    for i in range(1, len(s)):
        if ___BLANK_A___:  # 空欄a
            count += 1
        else:
            result += current + str(count)
            ___BLANK_B___  # 空欄b

    # 最後の文字を追加
    result += current + str(count)
    return result

# テスト
print(rle("AAABBC"))  # 期待値: "A3B2C1"
print(rle("AAA"))     # 期待値: "A3"`,
    choices: [
      { id: 'ア', text: '空欄a: s[i] != current, 空欄b: current = s[i]; count = 1' },
      { id: 'イ', text: '空欄a: s[i] == current, 空欄b: current = s[i]; count = 1' },
      { id: 'ウ', text: '空欄a: s[i] == current, 空欄b: count = 1' },
      { id: 'エ', text: '空欄a: count > 1, 空欄b: current = s[i]; count = 0' },
      { id: 'オ', text: '空欄a: s[i] == current, 空欄b: current = s[i - 1]; count = 1' },
    ],
    correctAnswer: 'イ',
    explanation: `- 同じ文字が続く場合: count を増やす（空欄a: s[i] == current）
- 違う文字が来た場合: 現在の current と count を result に追加し、current と count をリセット（空欄b: current = s[i]; count = 1）`,
  },
  {
    id: 'book_q1',
    source: 'original_cat2',
    year: 2024,
    category: 'アルゴリズム',
    subcategory: '配列・マージ',
    difficulty: '中級',
    title: '整列済の二つの配列を併合する',
    description: `次の記述中の **a** と **b** に入れる正しい答えの組合せを、解答群から選べ。ここで、配列の要素番号は1から始まる。

関数 \`merge\` は、引数で与えられた整列済の二つの配列 \`slist1\` と \`slist2\` を併合した一つの配列 \`list\` を返す関数である。

このプログラムは、α及びβで示すwhile文の条件式に繰り返しがあり、正しく動作しない。例えば、関数mergeを \`merge([2, 4, 6, 10, 15], [6, 11, 17, 25])\` に呼び出したとき、配列 **a** の要素番号 **b** の値が配列listに格納されていない。`,
    pseudoCode: `○配列: merge(整数型の配列: slist1, 整数型の配列: slist2)
  整数型: num1 ← slist1の要素数
  整数型: num2 ← slist2の要素数
  整列型の配列: list ← {(num1 + num2)個の未定義の値}
  整数型: i ← 1, j ← 1, k ← 1
  while ((i ≦ num1) and (j ≦ num2))
    if (slist1[i] < slist2[j])
      list[k] ← slist1[i]
      i ← i + 1
    else
      list[k] ← slist2[j]
      j ← j + 1
    endif
    k ← k + 1
  endwhile
  while (i < num1)  ← α
    list[k] ← slist1[i]
    i ← i + 1
    k ← k + 1
  endwhile
  while (j < num2)  ← β
    list[k] ← slist2[j]
    j ← j + 1
    k ← k + 1
  endwhile
  return list`,
    pythonCode: `def merge(slist1, slist2):
    num1 = len(slist1)
    num2 = len(slist2)
    list_result = [None] * (num1 + num2)
    i, j, k = 0, 0, 0

    # 両方の配列に要素がある間
    while i < num1 and j < num2:
        if slist1[i] < slist2[j]:
            list_result[k] = slist1[i]
            i += 1
        else:
            list_result[k] = slist2[j]
            j += 1
        k += 1

    # α: i < num1 では最後の要素が取り残される（バグ）
    while i < num1:  # 正しくは: i <= num1-1 または i < num1+1
        list_result[k] = slist1[i]
        i += 1
        k += 1

    # β: j < num2 では最後の要素が取り残される（バグ）
    while j < num2:  # 正しくは: j <= num2-1 または j < num2+1
        list_result[k] = slist2[j]
        j += 1
        k += 1

    return list_result

# テスト（バグを含むため、一部の要素が欠落）
result = merge([2, 4, 6, 10, 15], [6, 11, 17, 25])
print(result)  # slist2[3] (= 25) が欠落`,
    choices: [
      { id: 'ア', text: 'slist1, 3' },
      { id: 'イ', text: 'slist1, 5' },
      { id: 'ウ', text: 'slist2, 1' },
      { id: 'エ', text: 'slist2, 4' },
    ],
    correctAnswer: 'エ',
    explanation: `merge([2, 4, 6, 10, 15], [6, 11, 17, 25])を実行すると、while文αとβの条件式が \`i < num1\` および \`j < num2\` となっているため、最後の要素（slist1[5]=15とslist2[4]=25）が格納されません。特にslist2の4番目の要素（値25、0-indexedでは[3]）が配列listに格納されていません。正しくは \`i ≦ num1\` および \`j ≦ num2\` とする必要があります。`,
  },
  {
    id: 'book_q2',
    source: 'original_cat2',
    year: 2024,
    category: 'アルゴリズム',
    subcategory: 'エラトステネスの篩・最適化',
    difficulty: '上級',
    title: '自然数nまでの素数を求める',
    description: `次の記述中の **空欄** に入れる正しい答えを、解答群の中から選べ。ここで、配列の要素番号は1から始まる。

手続き \`primeNumber\` は、整数型の引数 \`n\` (n≥2) を受け取り、2からn中から、素数を全て求める手続である。素数とは、2以上の自然数で、1と自分自身以外では割り切れない数のことである。素数を求める手順は次のように考える。

【素数を求める手順】
(1) 2以外の2の倍数全てに印を付ける。
(2) 3以外の3の倍数全てに印を付ける。
(3) 印が付いているかどうかにかかわらず、4以降、1ずつ増やしながら同様の操作を必要な回数だけ繰り返す。
(4) 以上の操作後、印が付いていない数が素数である。

上記の手順を基に作成したプログラムを図1に示す。このプログラムでは、素数が素数の場合は、配列primeの要素prime[i]が0に、素数でなければ正の値になる。なお、手続primeNumberが使う関数sqrtは、引数を実数型として受け取った正の根の値を実数型で返すものとする。

手続 \`primeNumber\` を \`primeNumber(25)\` として呼び出したとき、図1の実行回数は27回となる。

図1における行番号08の実行回数を減らすために、for文の中で行われる繰り返し条件を、図2のプログラムの行番号06～12に書き換えた。繰り返し条件が、それ以外の行番号09の実行回数は **空欄** 回となる。`,
    pseudoCode: `【図1】
行番号 ○primeNumber(整数型: n)
01   整数型の配列: prime ← {n個の0}
02   整数型: m ← sqrt(n) の小数点以下を切り捨てた値
03   整数型: i, j
04   for (i を 2 から m まで 1 ずつ増やす)
05     j ← 2 × i
06     while (j ≦ n)
07       prime[j] ← 1
08       j ← j + i
09     endwhile
10   endfor
11   for (i を 2 から n まで 1 ずつ増やす)
12     if (prime[i] = 0)
13       i の値を出力
14     endif
15   endfor
16 endfor

【図2】図1の行番号06～10の書換後
行番号
05   for (i を 2 から m まで 1 ずつ増やす)
06     if (prime[i] = 0)
07       j ← 2 × i
08       while (j ≦ n)
09         prime[j] ← 1
10         j ← j + i
11       endwhile
12     endif
13   endfor`,
    pythonCode: `import math

def primeNumber(n):
    # 0: 素数候補, 1: 素数でない
    prime = [0] * (n + 1)
    m = int(math.sqrt(n))

    # 図2のアルゴリズム（最適化版）
    for i in range(2, m + 1):
        if prime[i] == 0:  # iが素数の場合のみ
            j = 2 * i
            while j <= n:
                prime[j] = 1
                j += i

    # 素数を出力
    primes = []
    for i in range(2, n + 1):
        if prime[i] == 0:
            primes.append(i)

    return primes

# テスト: primeNumber(25)の素数一覧
result = primeNumber(25)
print(f"素数: {result}")

# 行番号09の実行回数をカウント
def primeNumber_with_count(n):
    prime = [0] * (n + 1)
    m = int(math.sqrt(n))
    count = 0  # 行番号09の実行回数

    for i in range(2, m + 1):
        if prime[i] == 0:
            j = 2 * i
            while j <= n:
                prime[j] = 1
                j += i
                count += 1  # 行番号09が実行された

    return count

# primeNumber(25)での行番号09の実行回数
count_result = primeNumber_with_count(25)
print(f"行番号09の実行回数: {count_result}回")`,
    choices: [
      { id: 'ア', text: '5' },
      { id: 'イ', text: '6' },
      { id: 'ウ', text: '9' },
      { id: 'エ', text: '11' },
      { id: 'オ', text: '13' },
      { id: 'カ', text: '15' },
      { id: 'キ', text: '17' },
      { id: 'ク', text: '22' },
      { id: 'ケ', text: '23' },
      { id: 'コ', text: '25' },
    ],
    correctAnswer: 'ク',
    explanation: `primeNumber(25)を実行すると、m = 5となります。図2のアルゴリズムでは、iが素数（prime[i] == 0）の場合のみ内側のwhileループが実行されます。

- i=2（素数）: j = 4, 6, 8, ..., 24 → 11回
- i=3（素数）: j = 6, 9, 12, 15, 18, 21, 24 → 7回
- i=4（素数でない）: スキップ → 0回
- i=5（素数）: j = 10, 15, 20, 25 → 4回

合計: 11 + 7 + 4 = 22回

したがって、行番号09（prime[j] ← 1の実行）は22回実行されます。`,
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
