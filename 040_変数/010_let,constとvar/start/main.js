//変数に関して。変数の参照の動作。
// let constとvarの違い。
//ES6から使用できるようになったのがletとconst
//それ以前はvarしかなかった。
//letは再宣言×　再代入○　スコープ　ブロック　初期化×
//const          ×　　　　×　　　　　　　ブロック　　　×
//var         　○　　　　○　　　　　　　関数　　　　undefined
//再宣言は一度設定した変数を再度宣言すること.
//初期化はホイスティングのこと。
//初期化をした場合varの場合は、undefinedになるが他はならない。

//再宣言
// let a = 0;
// let a = 0;
// let constはエラーが出る。

var b = 0 ;
var b = 9 ; 
// varはエラーが出ない。

// 再代入
let c = 0 ;
c = 3;

const d = 0;
// d = 9;
// constで再代入しようとするとエラーになる。

{
  let e = 0; //ブロックスコープが適用される。{}内でしか参照できない。
  var f = 0; //ブロックスコープが無視されるのでグローバルコンテキストに宣言されているのと同じ状態になる。
}
//var f = 0;とここに宣言した場合と同じになる。
// console.log(g); // エラーが発生する。
console.log(h); //undefinedが表示される。
let g = 0 ;
var h = 9;

//varは使用が非推奨。

//変数とデータ型
//変数のデータの種類
//boolean number string undefined(値を保持していない) null symbol(一意の値) biglnt(桁が多い数値 数値の後ろにnをつける) object(プロパティと値を対で入れる。)



