import './moduleA.js'
//ただ単にmoduleAを実行したいときはfromを書く必要はない。


console.log(this);
//undefinedと表示される。
//このモジュールのトップレベルのことをモジュールコンテキストと呼ぶ。
const b = 0;
function fn(){
  console.log(this);
  console.log(b);
}
fn();
//こちらでもthisはundefinedと表示される。
//モジュールを使わない場合は、windowのthisをとってこれたけど、使用した場合は、undefinedと表示される。

const obj = {
  fn
}
obj.fn();
//fnはオブジェクトのメソッドとして認識されるので呼び出し元のオブジェクトをthisは参照するようになる。
//モジュールのコンテキストで呼ばれた場合は、thisはundefiinedになるが、それ以外のobjectなどからの呼び出しは引き続きその呼び出しもとのthisを呼び出す。
//moduleはhtmlの呼び出しのtypeがmoduleになっている。

//windowオブジェクトの参照は可能。
console.log(window);

//モジュールスコープについて、このモジュール内で生成されるスコープになるのでこの中で宣言した変数や関数は基本的にこのファイル内で使用できる。
//ファイルの外から変数や関数を使用したい場合は、明示的にimport exportを使用しないといけない。

//moduleAでconst aを定義したところでexport　importがないと参照できない。
console.log(window.d);
//moduleAをインポートすることでAで設定したwindow.dのグローバル変数を使用することができる。
//module越しでwindowの変数をやりとるするのはやり方に合わない。
//やる場合は、exportとimportを使用するようにする。
