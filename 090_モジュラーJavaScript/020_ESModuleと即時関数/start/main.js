//即時関数を定義した状態から始める。

const moduleA = (function () {
  console.log('IIFE called');

  let privateVal = 1; //object（戻り値）に含まれていないので、外部からアクセスできない。
  let publicVal = 10;

  function publicFn() {
    // console.log('publicFn called: ' + privateVal++);
    console.log('publicFn called: ' + publicVal);
  }

  function privateFn() {
    //外からは実行できない。即時関数の関数スコープの中でしか呼べない関数になっている。
    //privateFnも外から実行できない。
  }

  return {
    publicFn,
    publicVal, //外から実行できる。
  };
})();

// moduleA.publicFn();
// moduleA.publicFn();
// console.log(moduleA.publicVal++);
// console.log(moduleA.publicVal);
//++を入れると数を変更することもできる
// 即時関数内で設定したpublicValは外で変更しても関数内の値は変わっていない。
// moduleA.publicFn(); //10が表示されることから変更されていないことがわかる。
//objectがモジュールAに格納された段階でpublicValという値は、プリミティブな値になるので、値自体コピーされたものになる。
//中で定義しているpublicValと外で使用されているpulicValの値の参照先が異なっている。
//なので外から変更しても中では変更されていない。

//レキシカルスコープ常に変数Aの定義があるので使用できる。
//即時関数で外部から変数を渡す場合は、実引数に変数を入れて仮引数を入れて、内部でその変数をすることが一般的。
//今回は渡ってくるmoduleAはオブジェクトなので分割代入するようにするとmoduleAは実引数に入れ、内部でオブジェクトを使用するというようにするのが一般的。
//function(moduleA)から{}になる。
//関数名を分割代入の公式にしたがって代入すると、
const moduleB = function ({ publicFn: fn, publicVal: val }) {
  // publicFn();
  // publicFn();
  // console.log(publicVal++);
  // console.log(publicVal);
  // publicFn();
  fn();
  fn();
  console.log(val);
  console.log(val);
  fn();
}(moduleA);//実引数に変数を入れて、仮引数にはオブジェクトを入れるようにする。
//変数名を変更して使用することもできる。
//ESmoduleの書き方で書いていく。