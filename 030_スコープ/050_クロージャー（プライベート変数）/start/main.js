//内側から定義されている関数からレキシカルスコープの変数への参照を保持しているのをクロージャーという。
//高い階層から低い階層に対して変数を参照すること。
//function fn1 () {
  // let a = 0 ;
  // function fn2 () {
    // console.log(a);
  // }
// }
// のような感じのことをクロージャーという
//プライベート変数の定義をできる。
//関数の外部から参照できないもの。
//動的な関数の生成。　クロージャーを使った実装。
//状況に応じて変化する関数。

//プライベート変数の定義方法
//呼び出すたびに値が増えるものを考える。
let num = 0;
increment();
increment();
increment();

function increment(){
  // let num = 0; とすると呼び出される度にnum が0になるので増加しない。
  num = num + 1;
  console.log(num);
}
//  このままだとnumをどこでも変更可能にしているので注意が必要。increment関数を使用せずともnumを変更できてしまう。
//そうすると途中で値が重複してしまうこともあるので、そこで関数の中にプライベート変数を設定することができる。
//外部から参照できないようにする。
//関数名にFactoryをつけるときは何かを生成する時につける。

function incrementFactory() {
  let num2 = 0;
  function increment2 (){
    num2 = num2 + 1;
    console.log(num2)
  }
  return increment2;
}
//こうすることで変数がincrementFactory の関数スコープでnumが存在することになるので、この内側のincrement2関数からnum2の値を参照可能になる。
//そしてincrementFactoryの戻り値でincrement2関数を返すようにする。関数も帰ることができる。

const increments = incrementFactory();

increments();
increments();
//開発のsourceでnum = +1のところでとめるとclosureの部分で値の変化を見ることができる。

