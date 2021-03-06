//アロー関数に関して、ES6になって追加されたもの。
//無名関数を記述しやすくした省略記法。
// () = > {};という書き方

function a (name) {
  return 'hello' + name ;
}

//関数aを関数式にした場合、この場合は関数名は無名が通常
const b = function (name) {
  return 'hello' + name ;
}
//この無名関数をアロー関数に変更する。
// const c = name => {
//   return 'hello' + name;
// }
const c = name => 'hello ' + name ; //1行で表示できる。これがアロー関数で変数のcに代入される。
//こうすることでアロー関数に変更できる。
//引数が１つの時は()省略可能
console.log( c('Tom')); //アロー関数の引数にわたされる
//実行行が1行の時は{}とreturnが省略できる。
//引数を２つ取りたい時はカッコを省略できない。引数を取らない時も省略できない。　
const d = ( name , name1 ) => 'hello ' + name + name1;
console.log(d('Tom' , ' Bob'));
//引数がない時に面倒な時（）ではなく＿をダミーを入れると()を省略することができる。
//基本的には（）を使用する。
//1行以上の場合は{}を記載して、return を書いて戻り値を書くこと。


//無名関数とアロー関数の挙動の違い。
//無名関数ではthis/arguments/new/prototypeを使用できるが、アロー関数は保持しないので使用できない。
// アロー関数は無名関数の簡略記法だが厳密に機能が同じわけではない。
//thisの挙動に特に注意。

