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

    # α: バグ - 最後の要素が取り残される
    # 擬似言語の "i < num1" を再現するため、Pythonでは "i < num1 - 1" とする
    while i < num1 - 1:
        list_result[k] = slist1[i]
        i += 1
        k += 1

    # β: バグ - 最後の要素が取り残される
    # 擬似言語の "j < num2" を再現するため、Pythonでは "j < num2 - 1" とする
    while j < num2 - 1:
        list_result[k] = slist2[j]
        j += 1
        k += 1

    return list_result

# テスト（バグを含むため、一部の要素が欠落）
result = merge([2, 4, 6, 10, 15], [6, 11, 17, 25])
print(result)
# バグのため slist1[4] (= 15) と slist2[3] (= 25) が欠落
# 期待される出力: [2, 4, 6, 6, 10, 11, 17, None, None]`,
    choices: [
      { id: 'ア', text: 'slist1, 3' },
      { id: 'イ', text: 'slist1, 5' },
      { id: 'ウ', text: 'slist2, 1' },
      { id: 'エ', text: 'slist2, 4' },
    ],
    correctAnswer: 'エ',
    explanation: `擬似言語では配列が1始まりなので、while文αとβの条件式が \`i < num1\` および \`j < num2\` だと最後の要素が処理されません。merge([2, 4, 6, 10, 15], [6, 11, 17, 25])を実行すると、slist1[5]=15 と slist2[4]=25（1始まりの4番目）が格納されません。正しくは \`i ≦ num1\` および \`j ≦ num2\` とする必要があります。Pythonでは0始まりなので、このバグを再現するため \`i < num1 - 1\` および \`j < num2 - 1\` としています。`,
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
  {
    id: 'algo_r06_q5',
    source: 'r06',
    year: 2024,
    category: 'アルゴリズム',
    subcategory: '統計・関連度計算',
    difficulty: '上級',
    title: '商品関連度の計算',
    description: `注文データから商品間の「関連度 Lxy」を計算する手続きのプログラム穴埋め（a, b, c の3箇所）。

関連度は次の式で計算されます：
\`\`\`
Lxy = (Mxy × 全注文数) ÷ (Kx × Ky)
\`\`\`

注文データ例:
| 注文番号 | 購入商品 |
|---------|---------|
| 1 | A, B, D |
| 2 | A, D |
| 3 | A |
| 4 | A, B, E |
| 5 | B |
| 6 | C, E |

例: LAB = (2×6)/(4×3) = 1.0

プログラム中の **a**, **b**, **c** に入れる正しい組み合わせを選べ。`,
    pythonCode: `# 注文データ
orders = [
    ['A', 'B', 'D'],
    ['A', 'D'],
    ['A'],
    ['A', 'B', 'E'],
    ['B'],
    ['C', 'E']
]

def calc_relation(item1, item2):
    # Kx: item1を含む注文数
    # Ky: item2を含む注文数
    # Mxy: item1とitem2を両方含む注文数
    kx = sum(1 for order in orders if item1 in order)
    ky = sum(1 for order in orders if item2 in order)
    mxy = sum(1 for order in orders if item1 in order and item2 in order)

    # 空欄a, b, c
    # relation = (___a___ × ___c___) / (___b___ × ky)

    # 正解: relation = (mxy × len(orders)) / (kx × ky)
    relation = (mxy * len(orders)) / (kx * ky)
    return relation

# テスト
print(f"LAB = {calc_relation('A', 'B')}")  # 期待値: 1.0`,
    choices: [
      { id: 'ア', text: 'a: arrayK[i], b: arrayM[i], c: allItemsの要素数' },
      { id: 'イ', text: 'a: arrayK[i], b: arrayM[i], c: ordersの要素数' },
      { id: 'ウ', text: 'a: arrayK[i], b: arrayM[i], c: otherItemsの要素数' },
      { id: 'エ', text: 'a: arrayM[i], b: arrayK[i], c: allItemsの要素数' },
      { id: 'オ', text: 'a: arrayM[i], b: arrayK[i], c: ordersの要素数' },
      { id: 'カ', text: 'a: arrayM[i], b: arrayK[i], c: otherItemsの要素数' },
    ],
    correctAnswer: 'オ',
    explanation: `関連度の計算式 Lxy = (Mxy × 全注文数) ÷ (Kx × Ky) から、空欄a=arrayM[i]（Mxy）、空欄b=arrayK[i]（Kx）、空欄c=ordersの要素数（全注文数）となります。`,
  },
  {
    id: 'algo_sample_q6',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: 'ビット演算・シフト',
    difficulty: '中級',
    title: '8ビットのビット反転',
    description: `関数 \`rev\` は8ビット型の引数 \`byte\` を受け取り、ビットの並びを逆にした値を返す。

例: \`rev(01001011)\` → \`11010010\`

演算子:
- \`∧\`: ビット論理積
- \`∨\`: ビット論理和
- \`>>\`: 論理右シフト
- \`<<\`: 論理左シフト

プログラム中の **空欄** に入れる正しい答えを選べ。`,
    pythonCode: `def rev(byte):
    # Pythonでビット反転を実装
    rbyte = byte
    r = 0

    for i in range(8):
        # 正解: r = (r << 1) | (rbyte & 1)
        #       rbyte = rbyte >> 1
        r = (r << 1) | (rbyte & 1)
        rbyte = rbyte >> 1

    return r

# テスト
test_byte = 0b01001011  # 75
result = rev(test_byte)
print(f"入力: {test_byte:08b} ({test_byte})")
print(f"出力: {result:08b} ({result})")  # 期待値: 11010010 (210)`,
    choices: [
      { id: 'ア', text: 'r ← (r << 1) ∨ (rbyte ∧ 00000001)\n   rbyte ← rbyte >> 1' },
      { id: 'イ', text: 'r ← (r << 7) ∨ (rbyte ∧ 00000001)\n   rbyte ← rbyte >> 7' },
      { id: 'ウ', text: 'r ← (rbyte << 1) ∨ (rbyte >> 7)\n   rbyte ← r' },
      { id: 'エ', text: 'r ← (rbyte >> 1) ∨ (rbyte << 7)\n   rbyte ← r' },
    ],
    correctAnswer: 'ア',
    explanation: `ビット反転は、元の値の最下位ビットを取り出し（rbyte ∧ 1）、結果を1ビット左シフトして追加（r << 1）し、元の値を右シフト（rbyte >> 1）することを繰り返します。`,
  },
  {
    id: 'algo_sample_q8',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: '優先度付きキュー・トレース',
    difficulty: '中級',
    title: '優先度付きキューの操作',
    description: `クラス \`PrioQueue\`（優先度付きキュー）を使った手続 \`prioSched\` のトレース。
優先度は整数値1,2,3（小さい値ほど高優先）。

**クラス仕様**
| メソッド | 戻り値 | 説明 |
|--------|--------|------|
| \`PrioQueue()\` | - | 空のキュー生成 |
| \`enqueue(s, prio)\` | なし | 優先度prio で s を追加 |
| \`dequeue()\` | 文字列 | 最高優先度の要素を取り出す（同優先度は先入れ順） |
| \`size()\` | 整数 | 格納要素数を返す |

次の操作を実行した後、残りの要素を全て取り出したときの出力順序を選べ。`,
    pythonCode: `# ===== PriorityQueue クラス（問題を解く上で注目する必要はありません） =====
import heapq

class PrioQueue:
    def __init__(self):
        self.heap = []
        self.counter = 0  # 同優先度の場合の順序保持用

    def enqueue(self, s, prio):
        # (優先度, 挿入順, 値) のタプルでヒープに追加
        heapq.heappush(self.heap, (prio, self.counter, s))
        self.counter += 1

    def dequeue(self):
        if self.heap:
            return heapq.heappop(self.heap)[2]
        return None

    def size(self):
        return len(self.heap)
# ===== 以上、補助クラス =====

# テスト
prioQueue = PrioQueue()
prioQueue.enqueue("A", 1)
prioQueue.enqueue("B", 2)
prioQueue.enqueue("C", 2)
prioQueue.enqueue("D", 3)
prioQueue.dequeue()       # A を取り出し
prioQueue.dequeue()       # B を取り出し
prioQueue.enqueue("D", 3)
prioQueue.enqueue("B", 2)
prioQueue.dequeue()       # C を取り出し
prioQueue.dequeue()       # B を取り出し
prioQueue.enqueue("C", 2)
prioQueue.enqueue("A", 1)

# 残りをすべて出力
result = []
while prioQueue.size() > 0:
    result.append(prioQueue.dequeue())
print('", "'.join(result))`,
    choices: [
      { id: 'ア', text: '"A","B","C","D"' },
      { id: 'イ', text: '"A","B","D","D"' },
      { id: 'ウ', text: '"A","C","C","D"' },
      { id: 'エ', text: '"A","C","D","D"' },
    ],
    correctAnswer: 'エ',
    explanation: `優先度付きキューのトレース：
操作後のキュー: A(1), C(2), D(3), D(3)
優先度順に取り出すと: A → C → D → D`,
  },
  {
    id: 'algo_sample_q9',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: '木構造・中順走査',
    difficulty: '中級',
    title: '完全2分木の中順走査',
    description: `手続 \`order(1)\` を呼び出したとき、14節の完全2分木をどの順に出力するか。

木の構造は配列で表現され、\`tree[i]\` は節iの子ノードのリストを保持します。

プログラムは根から再帰的にノードを訪問し、出力します。出力される順序を選べ。`,
    pythonCode: `# ===== TreeNode クラス（問題を解く上で注目する必要はありません） =====
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
# ===== 以上、補助クラス =====

# 木構造の配列表現（1-indexed）
tree = [
    None,  # 0番目は未使用
    [2, 3], [4, 5], [6, 7], [8, 9], [10, 11], [12, 13], [14],
    [], [], [], [], [], [], []
]

def order(n):
    if n >= len(tree):
        return

    if len(tree[n]) == 2:
        order(tree[n][0])
        print(n, end=' ')
        order(tree[n][1])
    elif len(tree[n]) == 1:
        order(tree[n][0])
        print(n, end=' ')
    else:
        print(n, end=' ')

# テスト
order(1)
print()  # 改行`,
    choices: [
      { id: 'ア', text: '1,2,3,4,5,6,7,8,9,10,11,12,13,14' },
      { id: 'イ', text: '1,2,4,8,9,5,10,11,3,6,12,13,7,14' },
      { id: 'ウ', text: '8,4,9,2,10,5,11,1,12,6,13,3,14,7' },
      { id: 'エ', text: '8,9,4,10,11,5,2,12,13,6,14,7,3,1' },
    ],
    correctAnswer: 'ウ',
    explanation: `中順走査（間順）は「左→根→右」の順で訪問します。完全2分木の中順走査により、8,4,9,2,10,5,11,1,12,6,13,3,14,7 の順で出力されます。`,
  },
  {
    id: 'algo_sample_q10',
    source: 'sample',
    year: 2023,
    category: 'アルゴリズム',
    subcategory: '連結リスト・要素削除',
    difficulty: '中級',
    title: '単方向リストからの要素削除',
    description: `単方向リストから指定位置の要素を削除する手続 \`delNode\` の穴埋め。

**クラス ListElement**
| メンバ変数 | 型 | 説明 |
|-----------|-----|------|
| \`val\` | 文字型 | 要素の値 |
| \`next\` | ListElement | 次の要素の参照 |

プログラム中の **空欄** に入れる正しい答えを選べ。`,
    pythonCode: `# ===== Node クラス（問題を解く上で注目する必要はありません） =====
class ListElement:
    def __init__(self, val):
        self.val = val
        self.next = None
# ===== 以上、補助クラス =====

# グローバル変数（リストの先頭）
listHead = None

def delNode(pos):
    global listHead

    if pos == 1:
        listHead = listHead.next
    else:
        prev = listHead
        for i in range(2, pos):
            prev = prev.next
        # 空欄: prev.next.next
        prev.next = prev.next.next

# テスト用にリストを作成
def create_list(values):
    global listHead
    if not values:
        return
    listHead = ListElement(values[0])
    current = listHead
    for val in values[1:]:
        current.next = ListElement(val)
        current = current.next

def print_list():
    current = listHead
    result = []
    while current:
        result.append(current.val)
        current = current.next
    print(' -> '.join(result))

# テスト
create_list(['A', 'B', 'C', 'D', 'E'])
print("削除前:", end=" ")
print_list()
delNode(3)  # 3番目の要素（C）を削除
print("削除後:", end=" ")
print_list()`,
    choices: [
      { id: 'ア', text: 'listHead' },
      { id: 'イ', text: 'listHead.next' },
      { id: 'ウ', text: 'listHead.next.next' },
      { id: 'エ', text: 'prev' },
      { id: 'オ', text: 'prev.next' },
      { id: 'カ', text: 'prev.next.next' },
    ],
    correctAnswer: 'カ',
    explanation: `pos番目の要素を削除するには、(pos-1)番目の要素の next を (pos+1)番目の要素に繋ぎ変えます。prev は (pos-1)番目を指しているので、prev.next = prev.next.next とすることで、pos番目の要素をスキップします。`,
  },
  {
    id: 'sec_r06_q6',
    source: 'r06',
    year: 2024,
    category: '情報セキュリティ',
    subcategory: 'アクセス制御・テレワーク',
    difficulty: '中級',
    title: 'テレワーク環境のセキュリティ対策',
    description: `A社（従業員450名の商社）のテレワーク環境に関するセキュリティ対策問題。

**システム環境の概要**
- 従業員に1台ずつ社内PCを貸与
- SaaSとして「グループウェア（メール・チャット・クラウドストレージ）」と「オンライン会議サービス」を利用
- テレワーク: 私有PCから社内PCへリモートデスクトップ接続（専用アプリ使用）
- 専用アプリには保存禁止機能あり（私有PCへのファイルDL・C&P禁止）
- A社利用クラウドサービスへのログインは**社内ネットワークからのみ**許可（IP制限）

**問題の状況**
テレワーク拡大により社内ネットワーク経由の通信量が激増。
→ クラウドサービスへは社内ネットワークを介さず**直接接続**する設定変更を検討。
→ セキュリティリーダーBさんが検討: 不正アクセスリスクが増加する。

**設問**
情報システム部に依頼する対策として最も適切なものを選べ。`,
    pythonCode: '',
    choices: [
      { id: 'ア', text: '社内ネットワークからクラウドサービスへの通信を監視する' },
      { id: 'イ', text: '社内ネットワークとクラウドサービス間の通信速度を制限する' },
      { id: 'ウ', text: 'クラウドサービスへA社外から接続する際の認証に2要素認証を導入する' },
      { id: 'エ', text: 'グループウェアだけを直接接続の対象とする' },
      { id: 'オ', text: '専用アプリの保存禁止機能を無効にする' },
    ],
    correctAnswer: 'ウ',
    explanation: `IP制限が外れることで不正アクセスリスクが上昇します。認証強化（2要素認証）が最も直接的な対策となります。IP制限に依存せず、ユーザー認証を強化することでセキュリティを維持できます。`,
  },
  {
    id: 'sec_sample_q17',
    source: 'sample',
    year: 2023,
    category: '情報セキュリティ',
    subcategory: 'アクセス権限管理',
    difficulty: '中級',
    title: '外部委託時のアクセス権限設計',
    description: `A社がB社に受注管理業務（Jシステムへの入力）を外部委託する際の操作権限設計問題。

**登場人物**
- A社販売担当者：Jシステムへの入力
- A社販売責任者：入力内容の承認
- B社販売担当者（新規）：Jシステムへの入力を担当
- B社販売責任者（新規）：B社担当者の入力内容を口頭で差し戻し可能

**要件**
- 要求1: B社販売担当者にはJシステムへの入力権限が必要
- 要求2: A社販売担当者の場合は引き続きA社販売責任者が承認

**設問**
最小権限の原則に基づき、各役割に適切な権限を付与する場合、最も適切な権限設計を選べ。`,
    pythonCode: '',
    choices: [
      { id: 'ア', text: 'A社販売担当者・B社販売担当者に入力権限、A社販売責任者に承認権限を付与し、B社販売責任者には権限なし' },
      { id: 'イ', text: 'A社販売担当者・B社販売担当者に入力権限、A社販売責任者・B社販売責任者の両方に承認権限を付与' },
      { id: 'ウ', text: 'A社販売担当者・B社販売担当者に入力権限、A社販売責任者に承認権限、B社販売責任者に参照権限のみ付与' },
      { id: 'エ', text: 'B社販売担当者のみに入力権限、B社販売責任者に承認権限を付与' },
      { id: 'オ', text: 'すべての役割に入力・承認の両権限を付与' },
      { id: 'カ', text: 'A社販売担当者・B社販売担当者に入力権限、A社販売責任者に承認権限を付与（B社販売責任者には参照権限も不要）' },
    ],
    correctAnswer: 'カ',
    explanation: `最小権限の原則では、各役割に必要最低限の権限のみを付与します。B社販売責任者は口頭で差し戻しを行うため、システム上の権限は不要です。A社販売担当者とB社販売担当者には入力権限、A社販売責任者には承認権限を付与するのが適切です。`,
  },
  {
    id: 'sec_sample_q20',
    source: 'sample',
    year: 2023,
    category: '情報セキュリティ',
    subcategory: 'ファイアウォール運用・職務分離',
    difficulty: '中級',
    title: 'ファイアウォールの運用管理',
    description: `A社（従業員500名）のFW運用に関するセキュリティ問題。

**現状**
- 6名の運用担当者全員に全権限付与
- FWルールの編集後、**同一担当者が**操作承認を実施（1人で編集・承認）
- ログインにはパスワード認証のみ（8文字英数字）

**内部監査での指摘**: 操作内容が改ざんされても検知が難しい

**設問**
最も適切な改善策を選べ。`,
    pythonCode: '',
    choices: [
      { id: 'ア', text: '全運用担当者に同一IDを使用させる' },
      { id: 'イ', text: 'FWログインに多要素認証を導入する' },
      { id: 'ウ', text: 'コンソール/リモートでログインできる担当者を分ける' },
      { id: 'エ', text: '運用担当者を1名に限定する' },
      { id: 'オ', text: '一部の担当者を操作ログ確認のみにする' },
      { id: 'カ', text: '編集を行う者と、操作ログ確認・承認を行う者を分け、最小権限を付与する' },
    ],
    correctAnswer: 'カ',
    explanation: `職務分離（Segregation of Duties）の原則により、編集者と承認者を分離することで、不正な操作や改ざんを防ぐことができます。また、各担当者には必要最小限の権限のみを付与することで、セキュリティリスクを低減できます。`,
  },
  {
    id: 'orig_sec_q1',
    source: 'original_cat2',
    year: 2024,
    category: '情報セキュリティ',
    subcategory: 'マルウェア対策・インシデント対応',
    difficulty: '中級',
    title: 'マルウェア感染時の初動対応',
    description: `A社の従業員Xさんが以下の状況に遭遇した。最も適切な初動対応はどれか。

**状況**
- Xさんが社内PCでメールを確認中、差出人不明のメールに添付されたzipファイルを開いた
- 開封直後から社内PCの動作が著しく遅くなった
- ウイルス対策ソフトのリアルタイム保護が無効になっていた
- Xさんは現在、社内ネットワーク（LAN）に接続している`,
    pythonCode: '',
    choices: [
      { id: 'ア', text: 'ウイルス対策ソフトを再インストールして全スキャンを実行する' },
      { id: 'イ', text: '社内PCをシャットダウンしてから情報システム部に報告する' },
      { id: 'ウ', text: '自分でzipファイルを削除して業務を継続する' },
      { id: 'エ', text: '直ちに社内LANから切断（ネットワークケーブルを抜くかWi-Fi無効化）し、情報システム部に報告する' },
      { id: 'オ', text: '上司に口頭で報告した後、しばらく様子を見る' },
    ],
    correctAnswer: 'エ',
    explanation: `マルウェア感染が疑われる場合の最優先は**横展開（ラテラルムーブメント）の防止**です。ネットワーク切断が最初にすべきアクションです。シャットダウンはフォレンジック証拠を消す可能性があるため二番目の対応となります。`,
  },
  {
    id: 'orig_sec_q2',
    source: 'original_cat2',
    year: 2024,
    category: '情報セキュリティ',
    subcategory: 'バックアップ・ランサムウェア対策',
    difficulty: '中級',
    title: 'ランサムウェア対策とバックアップ',
    description: `B社では以下のバックアップ方針を採用している。ランサムウェア対策として最も効果的な改善策はどれか。

**現状のバックアップ方針**
- 毎日夜間に全データをNASにバックアップしている
- NASは社内ネットワークに常時接続されている
- バックアップデータのリストアテストは年1回実施`,
    pythonCode: '',
    choices: [
      { id: 'ア', text: 'バックアップを1日2回に増やす' },
      { id: 'イ', text: 'NASの容量を2倍に増強する' },
      { id: 'ウ', text: 'バックアップの一部を社内ネットワークから切り離したメディア（オフラインバックアップ）に保存する' },
      { id: 'エ', text: 'バックアップソフトウェアをバージョンアップする' },
      { id: 'オ', text: 'リストアテストの頻度を年2回に増やす' },
    ],
    correctAnswer: 'ウ',
    explanation: `ランサムウェアはネットワーク接続されたNASにも感染・暗号化する恐れがあります。3-2-1バックアップルール（3つのコピー、2種類の媒体、1つはオフサイト/オフライン）に従い、オフラインバックアップを保持することが有効です。`,
  },
  {
    id: 'orig_sec_q3',
    source: 'original_cat2',
    year: 2024,
    category: '情報セキュリティ',
    subcategory: '脆弱性管理・パッチ適用',
    difficulty: '中級',
    title: '重大な脆弱性への対応',
    description: `C社の情報システム部が公開サーバのCVSSスコア9.8（Critical）の脆弱性を発見した。

以下の選択肢の中で、最初に実施すべき対応として最も適切なものはどれか。`,
    pythonCode: '',
    choices: [
      { id: 'ア', text: '一時的に対象サーバをネットワークから切り離すか、WAF等で当該脆弱性を悪用する通信をブロックする暫定対策を実施する' },
      { id: 'イ', text: '次回の定期メンテナンス（3ヶ月後）にパッチを適用する' },
      { id: 'ウ', text: 'ベンダーにパッチのリリース時期を問い合わせて待機する' },
      { id: 'エ', text: '脆弱性スキャンツールを購入してから詳細調査する' },
      { id: 'オ', text: 'セキュリティポリシーの改訂を先に行う' },
    ],
    correctAnswer: 'ア',
    explanation: `CVSSスコア9.8はCritical（緊急）であり、悪用リスクが極めて高い状態です。パッチ適用前に暫定対策（ネットワーク遮断・WAFルール追加）を即時実施することが求められます。`,
  },
  {
    id: 'orig_sec_q4',
    source: 'original_cat2',
    year: 2024,
    category: '情報セキュリティ',
    subcategory: '初期設定・デフォルトパスワード',
    difficulty: '中級',
    title: '複合機のセキュリティ設定',
    description: `D社では以下の環境でメールを運用している。セキュリティ上の問題として最も適切な指摘はどれか。

**D社の環境**
- 複合機から社内ファイルサーバへスキャン文書をメールで送信している
- 複合機の送信元メールアドレスは出荷時のデフォルト設定（\`machine@vendor.example.com\`）のまま
- ベンダーが公開しているマニュアルには複合機の初期ID・パスワードが記載されている
- 複合機の管理画面にはデフォルトのパスワードでアクセス可能な状態が継続している`,
    pythonCode: '',
    choices: [
      { id: 'ア', text: 'メールサーバのディスク容量が増加する' },
      { id: 'イ', text: '複合機の管理画面に初期パスワードでログインされ、設定を変更・盗聴される恐れがある' },
      { id: 'ウ', text: '複合機の電力消費が増加する' },
      { id: 'エ', text: 'メールの送受信が遅延する' },
      { id: 'オ', text: 'ファイルサーバへのアクセスログが取得できない' },
    ],
    correctAnswer: 'イ',
    explanation: `初期設定のまま（デフォルトパスワード未変更）の複合機は、攻撃者が容易に管理画面にアクセスできます。これはIoT機器やネットワーク機器の「初期設定の放置」という典型的なセキュリティリスクです。`,
  },
  {
    id: 'orig_sec_q5',
    source: 'original_cat2',
    year: 2024,
    category: '情報セキュリティ',
    subcategory: 'ログ管理・監査',
    difficulty: '中級',
    title: 'ログ管理の改善点',
    description: `E社の情報セキュリティ担当者が、ログ管理について以下の現状を整理した。

改善すべき問題点として最も重要なものを選べ。

**E社のログ管理の現状**
1. Webサーバのアクセスログを30日間保存している
2. ファイルサーバへのアクセスログを取得していない
3. ログの保存先は同一サーバ上の別フォルダ
4. ログのレビューは問題発生時のみ実施
5. 管理者権限でのログイン記録は取得している`,
    pythonCode: '',
    choices: [
      { id: 'ア', text: 'Webサーバのログ保存期間が30日と短い' },
      { id: 'イ', text: 'ログのレビューが問題発生時のみである' },
      { id: 'ウ', text: '管理者権限のログイン記録が冗長である' },
      { id: 'エ', text: 'Webサーバのアクセスログの容量が増大する' },
      { id: 'オ', text: '5つの現状はすべて適切である' },
      { id: 'カ', text: 'ファイルサーバのアクセスログが取得されておらず、かつログが同一サーバ上に保存されている点が問題である' },
    ],
    correctAnswer: 'カ',
    explanation: `
- ファイルサーバのアクセスログ未取得 → 不正アクセスの検知・証跡が残らない
- ログを同一サーバに保存 → 侵害時にログも改ざん・消去される恐れ（ログはリモート・専用サーバへ転送すべき）

この2点が重大な問題です。`,
  },
  {
    id: 'orig_sec_q6',
    source: 'original_cat2',
    year: 2024,
    category: '情報セキュリティ',
    subcategory: '物理セキュリティ・入退室管理',
    difficulty: '初級',
    title: 'サーバ室の物理セキュリティ',
    description: `F社のサーバ室について、情報セキュリティ監査で指摘される可能性が最も高い問題はどれか。

**F社のサーバ室の状況**
- ICカードによる入退室管理を実施（入退室ログあり）
- サーバ室の鍵を紛失した場合の手順書が整備されている
- 清掃業者は監視なしでサーバ室に立ち入ることができる
- 無停電電源装置（UPS）が設置されている
- 空調設備が適切に稼働している`,
    pythonCode: '',
    choices: [
      { id: 'ア', text: 'ICカードで管理しているためログが残り問題ない' },
      { id: 'イ', text: 'UPSが設置されているため電源は安全である' },
      { id: 'ウ', text: '清掃業者が監視なしで立ち入りできる点が問題である' },
      { id: 'エ', text: '空調設備が稼働しており問題ない' },
      { id: 'オ', text: '鍵紛失時の手順書があるため問題ない' },
    ],
    correctAnswer: 'ウ',
    explanation: `物理セキュリティの原則として、重要区域（サーバ室）への立入りは最小権限が必要です。清掃業者等の第三者が監視なしで立入できる状態は、情報資産への物理的なリスクとなります（機器の持ち出し、USB差し込みなど）。`,
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
