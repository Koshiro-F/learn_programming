# 基本情報技術者試験 科目B 対策・頻出問題集（オリジナル）

> **用途**: Webアプリ対策問題集の問題データ  
> **出典根拠**: IPA試験要領・シラバス、TAC/SE+/受験ナビ等の傾向分析をもとに生成したオリジナル問題  
> **注意**: 公式問題ではありません。試験要領に沿ったオリジナル練習問題です  
> **最終更新**: 2025年

---

## 📋 試験要領に基づく出題カテゴリ（網羅マップ）

```
科目B（全20問）
├── アルゴリズムとプログラミング（問1〜16：16問）
│   ├── カテゴリ①: プログラムの基本要素（問1〜6相当）
│   │   ├── 型・変数・代入・算術演算
│   │   ├── 比較・論理演算
│   │   ├── 選択処理（if/elseif）
│   │   ├── 繰返し処理（for/while/do-while）
│   │   └── 手続・関数の呼出し
│   ├── カテゴリ②: データ構造及びアルゴリズム（問7〜13相当）
│   │   ├── 再帰
│   │   ├── スタック・キュー
│   │   ├── 木構造（二分探索木、ヒープ、走査）
│   │   ├── グラフ（隣接行列、最短経路）
│   │   ├── 連結リスト（追加・削除）
│   │   ├── 整列（バブル、選択、挿入、クイック、マージ）
│   │   └── 文字列処理
│   └── カテゴリ③: プログラミングの諸分野への適用（問14〜16相当）
│       ├── ハッシュ法
│       ├── 統計・データサイエンス系
│       └── AI・数理最適化系
└── 情報セキュリティ（問17〜20：4問）
    ├── アクセス管理・権限設計
    ├── マルウェア・脆弱性管理
    ├── バックアップ・ログ管理
    ├── 情報の転送セキュリティ
    └── 物理・環境セキュリティ
```

---

## 📁 問題データ

### ソース分類

- `source: "original_cat1"` → カテゴリ①（基本要素）オリジナル問題
- `source: "original_cat2"` → カテゴリ②（データ構造・アルゴリズム）オリジナル問題
- `source: "original_cat3"` → カテゴリ③（諸分野への適用）オリジナル問題
- `source: "original_sec"` → セキュリティオリジナル問題

---

## 🟦 カテゴリ①: プログラムの基本要素

---

### 問題ID: `orig_cat1_q1`

```yaml
id: orig_cat1_q1
source: original_cat1
category: アルゴリズム
subcategory: 繰返し処理・合計計算
difficulty: 初級
answer: ウ
frequency: 高（毎回出題レベル）
```

**問題文**  
次のプログラムを実行すると出力される値はどれか。

**プログラム**
```
整数型: i, sum ← 0
for (i を 1 から 10 まで 1 ずつ増やす)
  if (i mod 2 ＝ 0)
    sum ← sum ＋ i
  endif
endfor
sumの値を出力する
```

**解答群**
```
ア 25   イ 28   ウ 30   エ 55   オ 60
```

**解説**  
1〜10の偶数（2,4,6,8,10）の合計 = 2+4+6+8+10 = 30。  
**トレース表**:
| i | i mod 2 | sum |
|---|---------|-----|
| 2 | 0 | 2 |
| 4 | 0 | 6 |
| 6 | 0 | 12 |
| 8 | 0 | 20 |
| 10 | 0 | 30 |

---

### 問題ID: `orig_cat1_q2`

```yaml
id: orig_cat1_q2
source: original_cat1
category: アルゴリズム
subcategory: do-while・後判定繰返し
difficulty: 初級
answer: エ
frequency: 中
```

**問題文**  
次のプログラムを実行すると、`count` の値はいくつになるか。

**プログラム**
```
整数型: n ← 1
整数型: count ← 0
do
  n ← n × 2
  count ← count ＋ 1
while (n ＜ 100)
countの値を出力する
```

**解答群**
```
ア 5   イ 6   ウ 6   エ 7   オ 8
```

**解説**  
n: 2→4→8→16→32→64→128 と変化し、n≧100となった時点でwhileを抜ける。  
count = 7（128になるまで7回ループ）。

---

### 問題ID: `orig_cat1_q3`

```yaml
id: orig_cat1_q3
source: original_cat1
category: アルゴリズム
subcategory: 多重ループ・九九テーブル
difficulty: 初級
answer: イ
frequency: 中
```

**問題文**  
次のプログラム中の `[空欄]` に入れる正しい答えを選べ。  
このプログラムは、`i×j` の値が20以上になる組み合わせを数える。

**プログラム**
```
整数型: i, j, count ← 0
for (i を 1 から 9 まで 1 ずつ増やす)
  for (j を 1 から 9 まで 1 ずつ増やす)
    if ( [空欄] )
      count ← count ＋ 1
    endif
  endfor
endfor
countの値を出力する
```

**解答群**
```
ア i × j ≦ 20
イ i × j ≧ 20
ウ i ＋ j ≧ 20
エ i × j ＝ 20
オ i × j ＞ 20
```

**解説**  
「20以上になる組み合わせを数える」→ `i × j ≧ 20` が正しい条件。

---

### 問題ID: `orig_cat1_q4`

```yaml
id: orig_cat1_q4
source: original_cat1
category: アルゴリズム
subcategory: 配列の最大値探索・穴埋め
difficulty: 初級
answer: ウ
frequency: 高
```

**問題文**  
関数 `findMax` は整数型の配列を受け取り、その最大値を返す。  
プログラム中の `[空欄a]` と `[空欄b]` に入れる正しい組み合わせを選べ。

**プログラム**
```
○整数型: findMax(整数型の配列: arr)
  整数型: i, maxVal
  maxVal ← arr[1]
  for (i を 2 から arrの要素数 まで 1 ずつ増やす)
    if ( [空欄a] )
      [空欄b]
    endif
  endfor
  return maxVal
```

**解答群**
```
    [空欄a]              [空欄b]
ア arr[i] ＜ maxVal     maxVal ← arr[i]
イ arr[i] ＜ maxVal     i ← i ＋ 1
ウ arr[i] ＞ maxVal     maxVal ← arr[i]    ← 正解
エ arr[i] ＝ maxVal     maxVal ← arr[i]
オ arr[i] ≠ maxVal      maxVal ← arr[i]
```

**解説**  
最大値を更新するには「現在の要素がmaxValより大きい場合」に「maxValを現在の要素で上書き」する。

---

### 問題ID: `orig_cat1_q5`

```yaml
id: orig_cat1_q5
source: original_cat1
category: アルゴリズム
subcategory: 関数・素数判定
difficulty: 中級
answer: オ
frequency: 中（数理系として出題）
```

**問題文**  
関数 `isPrime` は正の整数 n を受け取り、n が素数なら `true`、そうでなければ `false` を返す。  
プログラム中の `[空欄]` に入れる正しい答えを選べ。

**プログラム**
```
○論理型: isPrime(整数型: n)
  整数型: i
  if (n ≦ 1)
    return false
  endif
  for (i を 2 から [空欄] まで 1 ずつ増やす)
    if (n mod i ＝ 0)
      return false
    endif
  endfor
  return true
```

**解答群**
```
ア n
イ n ÷ 2 の商
ウ n ÷ 2 の商 ＋ 1
エ n － 1
オ n の平方根の小数点以下切捨て値
```

**解説**  
素数判定は `√n` 以下の数で割り切れるかを確認すれば十分。  
n = a × b とすると、a と b のどちらかは必ず `√n` 以下になるため。

---

### 問題ID: `orig_cat1_q6`

```yaml
id: orig_cat1_q6
source: original_cat1
category: アルゴリズム
subcategory: 論理演算・ビット演算基礎
difficulty: 初級
answer: イ
frequency: 中
```

**問題文**  
次の記述中の `[空欄]` に入れる正しい答えを選べ。

プログラムを実行すると、変数 `result` の値は `[空欄]` になる。

**プログラム**
```
整数型: a ← 12   // 2進数: 00001100
整数型: b ← 10   // 2進数: 00001010
整数型: result
result ← a and b   // ビット単位の論理積
resultの値を出力する
```

**解答群**
```
ア 2   イ 8   ウ 14   エ 22   オ 6
```

**解説**  
```
  00001100 (12)
AND 00001010 (10)
= 00001000 (8)
```

---

## 🟩 カテゴリ②: データ構造及びアルゴリズム

---

### 問題ID: `orig_cat2_q1`

```yaml
id: orig_cat2_q1
source: original_cat2
category: アルゴリズム
subcategory: スタック・トレース
difficulty: 初級
answer: ウ
frequency: 高（頻出データ構造）
```

**問題文**  
クラス `Stack` を使った手続 `stackOp` を呼び出したとき、最後に出力される値はどれか。  
スタックはLIFO（後入れ先出し）構造とする。

**クラス仕様**
| メソッド | 戻り値 | 説明 |
|---------|--------|------|
| `Stack()` | - | 空のスタック生成 |
| `push(整数型: n)` | なし | nをスタックに積む |
| `pop()` | 整数型 | スタックの一番上の値を取り出して返す |
| `isEmpty()` | 論理型 | スタックが空なら true |

**プログラム**
```
○stackOp()
  Stack: s ← Stack()
  s.push(3)
  s.push(7)
  s.push(1)
  s.pop()          // 戻り値は使用しない
  s.push(5)
  s.push(2)
  s.pop()          // 戻り値は使用しない
  s.pop()の戻り値を出力する
```

**解答群**
```
ア 1   イ 2   ウ 5   エ 7   オ 3
```

**解説**  
操作トレース:
1. push(3) → [3]
2. push(7) → [3,7]
3. push(1) → [3,7,1]
4. pop() → [3,7]（1を取り出し）
5. push(5) → [3,7,5]
6. push(2) → [3,7,5,2]
7. pop() → [3,7,5]（2を取り出し）
8. pop() → 5 を出力

---

### 問題ID: `orig_cat2_q2`

```yaml
id: orig_cat2_q2
source: original_cat2
category: アルゴリズム
subcategory: キュー・FIFO・トレース
difficulty: 初級
answer: エ
frequency: 高（頻出データ構造）
```

**問題文**  
クラス `Queue` を使った手続 `queueOp` のトレース。  
キューはFIFO（先入れ先出し）構造とする。

**クラス仕様**
| メソッド | 戻り値 | 説明 |
|---------|--------|------|
| `Queue()` | - | 空のキュー生成 |
| `enqueue(文字列型: s)` | なし | sをキューの末尾に追加 |
| `dequeue()` | 文字列型 | キューの先頭から取り出して返す |
| `size()` | 整数型 | キュー内の要素数を返す |

**プログラム**
```
○queueOp()
  Queue: q ← Queue()
  q.enqueue("X")
  q.enqueue("Y")
  q.enqueue("Z")
  q.dequeue()           // 戻り値は使用しない
  q.enqueue("W")
  while (q.size() が 0 と等しくない)
    q.dequeue() の戻り値を出力
  endwhile
```

**解答群**
```
ア X, Y, Z, W   イ Z, Y, X, W   ウ W, Z, Y   エ Y, Z, W   オ X, W, Z
```

**解説**  
操作トレース:
1. enqueue: [X]
2. enqueue: [X,Y]
3. enqueue: [X,Y,Z]
4. dequeue → X を取り出し: [Y,Z]
5. enqueue: [Y,Z,W]
6. whileで順に出力: Y → Z → W

---

### 問題ID: `orig_cat2_q3`

```yaml
id: orig_cat2_q3
source: original_cat2
category: アルゴリズム
subcategory: 再帰・フィボナッチ数列
difficulty: 中級
answer: ウ
frequency: 高（再帰は頻出）
```

**問題文**  
関数 `fib` はフィボナッチ数列の第n項を返す。  
`fib(6)` を呼び出したとき、戻り値はいくつか。

**プログラム**
```
○整数型: fib(整数型: n)
  if (n ≦ 1)
    return n
  endif
  return fib(n－1) ＋ fib(n－2)
```

**解答群**
```
ア 5   イ 7   ウ 8   エ 13   オ 21
```

**解説**  
フィボナッチ数列: 0, 1, 1, 2, 3, 5, 8, 13, 21...  
fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5, fib(6)=8

---

### 問題ID: `orig_cat2_q4`

```yaml
id: orig_cat2_q4
source: original_cat2
category: アルゴリズム
subcategory: バブルソート・トレース
difficulty: 中級
answer: イ
frequency: 高（ソートは毎回出題レベル）
```

**問題文**  
次のバブルソートのプログラムを `data = {5, 2, 8, 1, 4}` で実行したとき、  
外側ループが `i = 2` を終えた時点での配列の状態はどれか。

**プログラム**
```
○bubbleSort(整数型の配列: data)
  整数型: i, j, tmp
  for (i を 1 から data の要素数－1 まで 1 ずつ増やす)
    for (j を 1 から data の要素数－i まで 1 ずつ増やす)
      if (data[j] ＞ data[j＋1])
        tmp ← data[j]
        data[j] ← data[j＋1]
        data[j＋1] ← tmp
      endif
    endfor
  endfor
```

**解答群**
```
ア {1, 2, 4, 5, 8}   イ {2, 1, 4, 5, 8}   ウ {1, 2, 5, 4, 8}
エ {2, 4, 1, 5, 8}   オ {1, 4, 2, 5, 8}
```

**解説**  
i=1終了後: {2, 5, 1, 4, 8} → 最大値8が末尾に確定  
※詳細: (5,2)→交換で{2,5,8,1,4}、(8,1)→{2,5,1,8,4}、(8,4)→{2,5,1,4,8}  
i=2終了後: {2,1,4,5,8} の状態になる（5が末尾2番目に確定）

---

### 問題ID: `orig_cat2_q5`

```yaml
id: orig_cat2_q5
source: original_cat2
category: アルゴリズム
subcategory: 二分探索・穴埋め
difficulty: 中級
answer: エ
frequency: 高（探索アルゴリズムは頻出）
```

**問題文**  
昇順に整列された配列から二分探索で値を探す関数 `binarySearch` の穴埋め。  
配列の要素番号は1から始まる。

**プログラム**
```
○整数型: binarySearch(整数型の配列: data, 整数型: target)
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
  return －1
```

**解答群**
```
    [空欄a]     [空欄b]
ア  mid        mid
イ  mid        mid－1
ウ  mid＋1     mid
エ  mid＋1     mid－1    ← 正解
オ  mid－1     mid＋1
```

**解説**  
- `data[mid] < target`（目標値は右半分）→ `low = mid + 1`（midは既に確認済み）  
- `data[mid] > target`（目標値は左半分）→ `high = mid - 1`（midは既に確認済み）

---

### 問題ID: `orig_cat2_q6`

```yaml
id: orig_cat2_q6
source: original_cat2
category: アルゴリズム
subcategory: 連結リスト・要素追加
difficulty: 中級
answer: ウ
frequency: 中（リスト操作は頻出）
```

**問題文**  
単方向リストの先頭に要素を追加する手続 `insertHead` の穴埋め。  
クラス `Node` のメンバ変数: `val`（文字型）, `next`（Node型、次の要素の参照）

**プログラム**
```
大域: Node: listHead  // リストの先頭要素

○insertHead(文字型: newVal)
  Node: newNode ← 新しい Node のインスタンス
  newNode.val ← newVal
  newNode.next ← [空欄a]
  [空欄b] ← newNode
```

**解答群**
```
    [空欄a]       [空欄b]
ア  未定義の値    listHead.next
イ  listHead.next listHead
ウ  listHead      listHead       ← 正解
エ  未定義の値    listHead
オ  listHead      listHead.next
```

**解説**  
1. 新ノードの `next` に現在の先頭(`listHead`)を設定
2. `listHead` を新ノードで上書き
→ 新ノードが先頭となり、旧先頭は新ノードのnextに連結される

---

### 問題ID: `orig_cat2_q7`

```yaml
id: orig_cat2_q7
source: original_cat2
category: アルゴリズム
subcategory: 二分探索木・挿入とトレース
difficulty: 中級
answer: ア
frequency: 中（木構造は頻出）
```

**問題文**  
二分探索木に値を挿入する手続 `insertBST` を使い、空の木に `{5, 3, 7, 1, 4}` の順に挿入したとき、根から先行順（前順: 根→左→右）でたどると出力される順序はどれか。

クラス `TreeNode` のメンバ変数: `val`（整数型）, `left`（左子の参照）, `right`（右子の参照）

**挿入後の木の構造**
```
      5
     / \
    3   7
   / \
  1   4
```

**解答群**
```
ア 5, 3, 1, 4, 7  （先行順・前順）
イ 1, 3, 4, 5, 7  （中順・昇順）
ウ 1, 4, 3, 7, 5  （後行順・後順）
エ 5, 7, 3, 4, 1
オ 3, 1, 4, 5, 7
```

**解説**  
- **先行順（前順）**: 根→左→右 → 5,3,1,4,7  
- **中順（間順）**: 左→根→右 → 1,3,4,5,7（昇順になる）  
- **後行順（後順）**: 左→右→根 → 1,4,3,7,5

---

### 問題ID: `orig_cat2_q8`

```yaml
id: orig_cat2_q8
source: original_cat2
category: アルゴリズム
subcategory: クイックソート・再帰・穴埋め
difficulty: 中級〜上級
answer: イ
frequency: 高（ソートの難問として頻出）
```

**問題文**  
クイックソートの関数 `quickSort` の穴埋め（`[空欄a]`, `[空欄b]`）。  
ピボットは配列の先頭要素とする。

**プログラム**
```
○quickSort(整数型の配列: data, 整数型: left, 整数型: right)
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
  quickSort(data, j＋1, [空欄b])
```

**解答群**
```
    [空欄a]   [空欄b]
ア  left      j
イ  left      right   ← 正解
ウ  left＋1   right
エ  j＋1      right
オ  left      right－1
```

**解説**  
ピボットが `data[j]` に配置された後:  
- 左サブ配列: `data[left]` 〜 `data[j-1]` → `quickSort(data, left, j-1)`  
- 右サブ配列: `data[j+1]` 〜 `data[right]` → `quickSort(data, j+1, right)`

---

### 問題ID: `orig_cat2_q9`

```yaml
id: orig_cat2_q9
source: original_cat2
category: アルゴリズム
subcategory: 文字列処理・パリンドローム（回文）判定
difficulty: 中級
answer: エ
frequency: 中（文字列処理は頻出）
```

**問題文**  
関数 `isPalindrome` は文字列が回文（前から読んでも後ろから読んでも同じ）なら `true`、そうでなければ `false` を返す。  
プログラム中の `[空欄]` に入れる正しい答えを選べ。

**プログラム**
```
○論理型: isPalindrome(文字列型: str)
  整数型: i, len
  len ← strの文字数
  for (i を 1 から len ÷ 2 の商 まで 1 ずつ増やす)
    if ( [空欄] )
      return false
    endif
  endfor
  return true
```

**解答群**
```
ア strのi文字目の文字 ＝ strの(len－i)文字目の文字
イ strのi文字目の文字 ＝ strの(len－i＋1)文字目の文字
ウ strのi文字目の文字 ≠ strの(len－i)文字目の文字
エ strのi文字目の文字 ≠ strの(len－i＋1)文字目の文字   ← 正解
オ strのi文字目の文字 ≠ strの(len÷2)文字目の文字
```

**解説**  
例: "racecar"（len=7）  
- i=1: 1文字目 'r' と 7文字目 'r' を比較 → len-i+1 = 7  
- i=2: 2文字目 'a' と 6文字目 'a' を比較 → len-i+1 = 6  
不一致なら回文でないので `false` を返す。

---

### 問題ID: `orig_cat2_q10`

```yaml
id: orig_cat2_q10
source: original_cat2
category: アルゴリズム
subcategory: バグ発見・選択ソート
difficulty: 中級
answer: ウ
frequency: 高（バグ発見問題は頻出）
```

**問題文**  
次の選択ソートのプログラムには不具合がある。どのような入力を与えると問題が発生するか。

**プログラム（バグあり）**
```
○selectionSort(整数型の配列: data)
  整数型: i, j, minIdx, tmp
  for (i を 1 から data の要素数 まで 1 ずつ増やす)   // ← バグ
    minIdx ← i
    for (j を i＋1 から dataの要素数 まで 1 ずつ増やす)
      if (data[j] ＜ data[minIdx])
        minIdx ← j
      endif
    endfor
    tmp ← data[i]; data[i] ← data[minIdx]; data[minIdx] ← tmp
  endfor
```

**バグの説明**: 外側forループの上限が `data の要素数` になっているが、正しくは `data の要素数 - 1` であるべき。

**設問**: このバグが原因で結果に影響が出るのはどのような配列か。

**解答群**
```
ア 要素数が1の配列
イ 既に昇順にソートされた配列
ウ すべての要素が同じ値の配列
エ 要素数が偶数の配列
オ このバグは実際には結果に影響しない
```

**解説**  
最後のi = data の要素数 の時、内側forループは `j を n+1 から n` となり0回実行されるため `data[i]` と `data[minIdx]`（= data[i]）の交換が発生するが結果は変わらない。  
→ 実は最終回の処理は常に自己交換で結果に影響しない → **オ**が正解。

※注: 問題として出題する場合は「バグの影響を問う」形式に変更推奨

---

## 🟨 カテゴリ③: プログラミングの諸分野への適用

---

### 問題ID: `orig_cat3_q1`

```yaml
id: orig_cat3_q1
source: original_cat3
category: アルゴリズム
subcategory: ハッシュ法・チェーン法
difficulty: 上級
answer: ウ
frequency: 高（カテゴリ③の代表的出題）
```

**問題文**  
ハッシュ表を使ったデータ格納のプログラム穴埋め。  
ハッシュ関数は `key mod tableSize` とし、衝突時はチェーン法で処理する。  
プログラム中の `[空欄]` に入れる正しい答えを選べ。

**プログラム**
```
整数型: tableSize ← 7
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
  table[idx] ← key
```

**解答群**
```
ア key ÷ tableSize の商
イ key ＋ tableSize
ウ key mod tableSize ＋ 1   ← 正解（1始まりのため+1）
エ key mod tableSize
オ key × tableSize mod 7
```

**解説**  
配列要素番号が1始まりの場合、`key mod tableSize + 1` でインデックスを計算する。  
（0始まりなら `key mod tableSize` でよい）

---

### 問題ID: `orig_cat3_q2`

```yaml
id: orig_cat3_q2
source: original_cat3
category: アルゴリズム
subcategory: 統計処理・中央値・パーセンタイル
difficulty: 上級
answer: オ
frequency: 高（データサイエンス系は出題増加傾向）
```

**問題文**  
昇順にソートされた配列から中央値（メジアン）を返す関数 `median` の穴埋め（`[空欄a]`, `[空欄b]`）。  
要素数が偶数の場合は中央2つの平均値、奇数の場合は中央の値を返す。

**プログラム**
```
○実数型: median(整数型の配列: sortedData)
  整数型: n ← sortedDataの要素数
  if ( [空欄a] )
    return (sortedData[n ÷ 2] ＋ sortedData[n ÷ 2 ＋ 1]) ÷ 2.0
  else
    return [空欄b]
  endif
```

**解答群**
```
    [空欄a]              [空欄b]
ア  n mod 2 ＝ 0         sortedData[n ÷ 2]
イ  n mod 2 ＝ 0         sortedData[n ÷ 2 ＋ 1]
ウ  n mod 2 ≠ 0         sortedData[n ÷ 2 の商]
エ  n mod 2 ＝ 1         sortedData[(n＋1) ÷ 2 の商]
オ  n mod 2 ＝ 0         sortedData[(n＋1) ÷ 2 の商]   ← 正解
```

**解説**  
- 偶数（n=4）: [1,2,3,4] → (2+3)/2 = 2.5  
  - n÷2=2番目, n÷2+1=3番目 の平均
- 奇数（n=5）: [1,2,3,4,5] → 中央は3番目  
  - (n+1)÷2 = (5+1)÷2 = 3番目

---

### 問題ID: `orig_cat3_q3`

```yaml
id: orig_cat3_q3
source: original_cat3
category: アルゴリズム
subcategory: 文字列圧縮（ランレングス符号化）
difficulty: 上級
answer: イ
frequency: 高（文字列処理の応用として頻出）
```

**問題文**  
ランレングス符号化（連続する同じ文字を「文字+回数」で表現）を行う関数 `rle` の穴埋め。  
例: `"AAABBC"` → `"A3B2C1"`

**プログラム**
```
○文字列型: rle(文字列型: str)
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
  return result
```

**解答群**
```
    [空欄a]                              [空欄b]
ア  strのi文字目の文字 ≠ current         current ← strのi文字目の文字; count ← 1
イ  strのi文字目の文字 ＝ current         current ← strのi文字目の文字; count ← 1   ← 正解
ウ  strのi文字目の文字 ＝ current         count ← 1
エ  count ＞ 1                           current ← strのi文字目の文字; count ← 0
オ  strのi文字目の文字 ＝ current         current ← strのi－1文字目の文字; count ← 1
```

**解説**  
- 同じ文字が続く場合: `count` を増やす
- 違う文字が来た場合: 現在の `current` と `count` を `result` に追加し、`current` と `count` をリセット

---

## 🟥 カテゴリ④: 情報セキュリティ

---

### 問題ID: `orig_sec_q1`

```yaml
id: orig_sec_q1
source: original_sec
category: 情報セキュリティ
subcategory: マルウェア対策・インシデント対応
difficulty: 中級
answer: エ
frequency: 高（マルウェア対策は頻出テーマ）
```

**問題文**  
A社の従業員Xさんが以下の状況に遭遇した。最も適切な初動対応はどれか。

**状況**  
- Xさんが社内PCでメールを確認中、差出人不明のメールに添付されたzipファイルを開いた
- 開封直後から社内PCの動作が著しく遅くなった
- ウイルス対策ソフトのリアルタイム保護が無効になっていた
- Xさんは現在、社内ネットワーク（LAN）に接続している

**解答群**
```
ア ウイルス対策ソフトを再インストールして全スキャンを実行する
イ 社内PCをシャットダウンしてから情報システム部に報告する
ウ 自分でzipファイルを削除して業務を継続する
エ 直ちに社内LANから切断（ネットワークケーブルを抜くかWi-Fi無効化）し、
   情報システム部に報告する
オ 上司に口頭で報告した後、しばらく様子を見る
```

**解説**  
マルウェア感染が疑われる場合の最優先は**横展開（ラテラルムーブメント）の防止**。  
ネットワーク切断が最初にすべきアクション。シャットダウンはフォレンジック証拠を消す可能性があるため二番目。

---

### 問題ID: `orig_sec_q2`

```yaml
id: orig_sec_q2
source: original_sec
category: 情報セキュリティ
subcategory: バックアップ・ランサムウェア対策
difficulty: 中級
answer: ウ
frequency: 高（バックアップは頻出）
```

**問題文**  
B社では以下のバックアップ方針を採用している。ランサムウェア対策として最も効果的な改善策はどれか。

**現状のバックアップ方針**
- 毎日夜間に全データをNASにバックアップしている
- NASは社内ネットワークに常時接続されている
- バックアップデータのリストアテストは年1回実施

**解答群**
```
ア バックアップを1日2回に増やす
イ NASの容量を2倍に増強する
ウ バックアップの一部を社内ネットワークから切り離したメディア（オフラインバックアップ）に保存する
エ バックアップソフトウェアをバージョンアップする
オ リストアテストの頻度を年2回に増やす
```

**解説**  
ランサムウェアはネットワーク接続されたNASにも感染・暗号化する恐れがある。  
3-2-1バックアップルール（3つのコピー、2種類の媒体、1つはオフサイト/オフライン）が有効。

---

### 問題ID: `orig_sec_q3`

```yaml
id: orig_sec_q3
source: original_sec
category: 情報セキュリティ
subcategory: 脆弱性管理・パッチ適用
difficulty: 中級
answer: ア
frequency: 高（脆弱性管理は頻出）
```

**問題文**  
C社の情報システム部が公開サーバのCVSSスコア9.8（Critical）の脆弱性を発見した。  
以下の選択肢の中で、最初に実施すべき対応として最も適切なものはどれか。

**解答群**
```
ア 一時的に対象サーバをネットワークから切り離すか、
   WAF等で当該脆弱性を悪用する通信をブロックする暫定対策を実施する
イ 次回の定期メンテナンス（3ヶ月後）にパッチを適用する
ウ ベンダーにパッチのリリース時期を問い合わせて待機する
エ 脆弱性スキャンツールを購入してから詳細調査する
オ セキュリティポリシーの改訂を先に行う
```

**解説**  
CVSSスコア9.8はCritical（緊急）であり、悪用リスクが極めて高い。  
パッチ適用前に暫定対策（ネットワーク遮断・WAFルール追加）を即時実施することが求められる。

---

### 問題ID: `orig_sec_q4`

```yaml
id: orig_sec_q4
source: original_sec
category: 情報セキュリティ
subcategory: 情報の転送・メールセキュリティ
difficulty: 中級
answer: イ
frequency: 中（メールセキュリティ、複合機の初期設定問題として出題）
```

**問題文**  
D社では以下の環境でメールを運用している。セキュリティ上の問題として最も適切な指摘はどれか。

**D社の環境**
- 複合機から社内ファイルサーバへスキャン文書をメールで送信している
- 複合機の送信元メールアドレスは出荷時のデフォルト設定（`machine@vendor.example.com`）のまま
- ベンダーが公開しているマニュアルには複合機の初期ID・パスワードが記載されている
- 複合機の管理画面にはデフォルトのパスワードでアクセス可能な状態が継続している

**解答群**
```
ア メールサーバのディスク容量が増加する
イ 複合機の管理画面に初期パスワードでログインされ、設定を変更・盗聴される恐れがある
ウ 複合機の電力消費が増加する
エ メールの送受信が遅延する
オ ファイルサーバへのアクセスログが取得できない
```

**解説**  
初期設定のまま（デフォルトパスワード未変更）の複合機は、攻撃者が容易に管理画面にアクセスできる。  
これはIoT機器やネットワーク機器の「初期設定の放置」という典型的なセキュリティリスク。

---

### 問題ID: `orig_sec_q5`

```yaml
id: orig_sec_q5
source: original_sec
category: 情報セキュリティ
subcategory: ログ管理・監査
difficulty: 中級
answer: カ
frequency: 中（ログ管理は出題あり）
```

**問題文**  
E社の情報セキュリティ担当者が、ログ管理について以下の現状を整理した。  
改善すべき問題点として最も重要なものを選べ。

**E社のログ管理の現状**
1. Webサーバのアクセスログを30日間保存している
2. ファイルサーバへのアクセスログを取得していない
3. ログの保存先は同一サーバ上の別フォルダ
4. ログのレビューは問題発生時のみ実施
5. 管理者権限でのログイン記録は取得している

**解答群**
```
ア Webサーバのログ保存期間が30日と短い
イ ログのレビューが問題発生時のみである
ウ 管理者権限のログイン記録が冗長である
エ Webサーバのアクセスログの容量が増大する
オ 5つの現状はすべて適切である
カ ファイルサーバのアクセスログが取得されておらず、
   かつログが同一サーバ上に保存されている点が問題である
```

**解説**  
- ファイルサーバのアクセスログ未取得 → 不正アクセスの検知・証跡が残らない  
- ログを同一サーバに保存 → 侵害時にログも改ざん・消去される恐れ（ログはリモート・専用サーバへ転送すべき）

---

### 問題ID: `orig_sec_q6`

```yaml
id: orig_sec_q6
source: original_sec
category: 情報セキュリティ
subcategory: 物理・環境セキュリティ・入退室管理
difficulty: 初級
answer: ウ
frequency: 中
```

**問題文**  
F社のサーバ室について、情報セキュリティ監査で指摘される可能性が最も高い問題はどれか。

**F社のサーバ室の状況**
- ICカードによる入退室管理を実施（入退室ログあり）
- サーバ室の鍵を紛失した場合の手順書が整備されている
- 清掃業者は監視なしでサーバ室に立ち入ることができる
- 無停電電源装置（UPS）が設置されている
- 空調設備が適切に稼働している

**解答群**
```
ア ICカードで管理しているためログが残り問題ない
イ UPSが設置されているため電源は安全である
ウ 清掃業者が監視なしで立ち入りできる点が問題である
エ 空調設備が稼働しており問題ない
オ 鍵紛失時の手順書があるため問題ない
```

**解説**  
物理セキュリティの原則として、重要区域（サーバ室）への立入りは最小権限が必要。  
清掃業者等の第三者が監視なしで立入できる状態は、情報資産への物理的なリスクとなる（機器の持ち出し、USB差し込みなど）。

---

## 📊 出題頻度・傾向まとめ

### アルゴリズム分野

| テーマ | 頻度 | カテゴリ | 難易度傾向 |
|--------|------|---------|-----------|
| 変数・代入・トレース | ★★★ | ① | 易 |
| 条件分岐（if/elseif） | ★★★ | ① | 易〜中 |
| for/while繰返し | ★★★ | ① | 易〜中 |
| 配列の最大値・最小値探索 | ★★★ | ① | 易 |
| 素数・数学系関数 | ★★☆ | ① | 中 |
| ビット演算・シフト | ★★☆ | ① | 中〜難 |
| 再帰（階乗・フィボナッチ） | ★★★ | ② | 中 |
| スタック・キュー操作 | ★★★ | ② | 中 |
| バブルソート・トレース | ★★★ | ② | 中 |
| 二分探索・穴埋め/バグ | ★★★ | ② | 中 |
| 連結リスト操作 | ★★☆ | ② | 中 |
| 木構造（走査・BST） | ★★★ | ② | 中〜難 |
| クイックソート・マージソート | ★★☆ | ② | 難 |
| 文字列処理（比較・変換・圧縮） | ★★★ | ② | 中 |
| ハッシュ法 | ★★☆ | ③ | 難 |
| 統計・中央値・パーセンタイル | ★★☆ | ③ | 難 |
| ランレングス圧縮等 | ★★☆ | ③ | 難 |

### セキュリティ分野

| テーマ | 頻度 | 重要ポイント |
|--------|------|------------|
| マルウェア感染・初動対応 | ★★★ | ネットワーク切断→報告 |
| バックアップ（3-2-1ルール） | ★★★ | オフライン保持が鍵 |
| 脆弱性管理・パッチ適用 | ★★★ | CVSSスコアで優先度判断 |
| アクセス制御・最小権限 | ★★★ | 職務分離とセットで出題 |
| 初期パスワード・デフォルト設定 | ★★☆ | IoT・複合機が典型例 |
| ログ管理・監査 | ★★☆ | 改ざん防止・保存場所が論点 |
| 物理・入退室管理 | ★★☆ | 第三者への最小権限 |
| テレワーク・BYOD | ★★☆ | クラウドIP制限・2FA |

---

## 🔧 Webアプリ実装メモ（コーディングエージェント向け）

### データ構造提案（前ファイルからの拡張）

```typescript
interface Question {
  id: string;               // 例: "orig_cat2_q4"
  source: QuestionSource;
  category: "アルゴリズム" | "情報セキュリティ";
  subcategory: string;
  difficulty: "初級" | "中級" | "上級";
  frequency: "高" | "中" | "低";   // ← 新フィールド
  question: string;
  program?: string;
  choices: Choice[];
  answer: string;
  explanation: string;
  traceTable?: TraceRow[];   // ← トレース表（任意）
  tags: string[];            // ← 検索用タグ
}

type QuestionSource =
  | "r06"           // IPA令和6年度公開問題
  | "sample"        // IPAサンプル問題
  | "original_cat1" // カテゴリ①オリジナル
  | "original_cat2" // カテゴリ②オリジナル
  | "original_cat3" // カテゴリ③オリジナル
  | "original_sec"; // セキュリティオリジナル

interface TraceRow {
  stepLabel: string;       // 例: "i=1, j=2"
  variables: Record<string, string | number>; // 変数名→値
}
```

### 推奨タグ（`tags` フィールドに利用）

```json
// アルゴリズム系
["for", "while", "配列", "関数", "再帰", "ビット演算",
 "スタック", "キュー", "ソート", "探索", "木構造",
 "連結リスト", "グラフ", "ハッシュ", "文字列処理",
 "トレース", "穴埋め", "バグ発見", "計算量"]

// セキュリティ系
["マルウェア", "バックアップ", "脆弱性", "アクセス制御",
 "ログ管理", "初期設定", "物理セキュリティ", "テレワーク",
 "最小権限", "職務分離", "インシデント対応"]
```

### 学習モード提案

| モード名 | 説明 |
|---------|------|
| **トレース練習モード** | 変数の変化を1ステップずつ確認しながら解く |
| **穴埋めモード** | `[空欄]` を選択肢から選ぶ標準モード |
| **バグ発見モード** | バグの条件を特定する問題に特化 |
| **弱点克服モード** | 間違えた問題のカテゴリを自動検出して集中出題 |
| **模擬試験モード** | 20問/100分のタイムアタック形式 |

---

## 📚 参考にした調査先

| サイト/資料 | 用途 |
|------------|------|
| [IPA試験要領・シラバス](https://www.ipa.go.jp/shiken/syllabus/index.html) | 出題範囲の根拠 |
| [SE+受験ナビ サンプル問題分析](https://www.seplus.jp/dokushuzemi/ec/fe/fenavi/guide/analytics_sample_exam/exam_b_programming/) | カテゴリ別難易度分析 |
| [TAC 科目B攻略法PDF](https://www.tac-school.co.jp/library/00006dougaChannel/xFCfInGlsK8.pdf) | 出題傾向・攻略アドバイス |
| [OCHA-IT 対策問題](https://ocha-it.jp/fe-b-test-2/) | バブルソート・クイックソート問題参考 |
| [技術評論社 アルゴリズムトレーニングブック 目次](https://gihyo.jp/book/2024/978-4-297-14271-1) | 頻出テーマ網羅確認 |
| [SE+ セキュリティ重要用語](https://www.seplus.jp/dokushuzemi/ec/fe/fenavi/guide/new_security/) | セキュリティ出題範囲 |
