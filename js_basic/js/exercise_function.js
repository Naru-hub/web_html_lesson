// 演習 「関数」
// 「りんごの値段を計算するプログラムの関数化」
// 佐藤さんが1個100円(税込)のりんごを、13個買いました。
// りんごの単価と値段を関数の引数に渡すと、合計金額を計算して返す関数を作成
// 作成した関数を呼び出して、
// 佐藤さんの支払金額はいくらになるか計算して、コンソールに出力する。
// 補足：関数の定義方法は、function命令を用いる。
// 参考：関数名はprice
// 参考：引数 単価はの変数名は、unitPrice
// 参考：引数 個数の変数名は、n

function Price(unitPrice,n) {
  return unitPrice * n;
}

console.log(Price(100,13));