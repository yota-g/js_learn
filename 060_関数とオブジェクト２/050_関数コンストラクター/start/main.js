//関数コンストラクター　関数は実行可能なオブジェクトである。
//大文字から始まるFunctionのことを関数コンストラクターとよぶ。
//使用するには、new演算子を前につける必要がある。
const fn1 = new Function('a', 'b', 'return a + b'); //一番最後の引数には関数宣言のbody部分を記載。

//関数宣言で同じことを表すとすると、
function fn2(a, b) {
  return a + b;
}
//これを関数コンストラクターで表すとFunctionのような部分になる。
//fn1を使用して関数を実行する
const result = fn1(1,2);
console.log(result);
//これが関数コンストラクター　関数コンストラクターから関数を作成できる。
//関数宣言を使用しても関数コンストラクターから生成されたinstanceということになる。
//fn2でinstanceofでどのコンストラクターから生成されているかを確認すると、
console.log(fn2 instanceof Function );
//元のコンストラクターがFunctionになる。
//fn2もFunctionコンストラクターから生成されたインスタンスであるということが言え、fn2は結局オブジェクトということが言える

//new Functionで関数を生成する作業は内部的にグローバルスコープで行われるため、関数の本文に外部変数が含まれていた時に、スクリプトスコープかグローバルスコープに変数を探しにいくことになる。
let d = 0;
function fn () {
  let d = 1;
  const fn3 = new Function('a', 'b', 'return a + b * d' );
  return fn3;
}
const f = fn();
console.log(f(1,2));
//この実行結果は1になる。
//Functionに外部変数を入れるとグローバルスコープとスクリプトスコープにしか参照しないので、let d = 0;を参照してしまう。
//今回はスクリプトスコープのdを参照している。　
// 関数コンストラクターのもう一つの注意点。
//new Functionコンストラクターで作成しているオブジェクトは、あくまで関数オブジェクトなので、コンストラクターを使ってnewを作るのとは違う。

const obj = new function (){
  this.a = 0;
}
const fn4 = new Function ('return;');
console.log(obj, fn4);
//objはあくまで無名関数から生成したオブジェクトインスタンスなのでobjectリテラルで囲まれて表示されるが、
//fn4はあくまで関数を作成するためのコンストラクターなので、関数のオブジェクトを表示する。
//objのようにしたいのであれば、
const fn5 = new Function('this.a = 0;');
const obj2 = new fn5();
console.log(fn5);
//というようにfn5から新たにインスタンスを作成してあげることで関数からインスタンス化されたオブジェクトを表示することがある。JSの大文字と小文字は明確に使い分ける必要がある。
//関数コンストラクターは一般的には使用しないようにする。
//脆弱性の原因になるので注意。動的なコードを文字列から生成する時にまれに使うが基本的には普通に関数宣言を使って関数を定義するようにする。
