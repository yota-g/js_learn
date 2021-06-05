// 即時関数
//クロージャーと似たものが出てくるので理解を深める。
//即時関数・・・関数定義と同時に一度だけ実行される関数。
// let result = (
//   function (仮引数) {
//     return 戻り値;
//   }
// )(実引数 );
//上記のようなものが代表的な書き方。
// 関数を()で囲って、実引数で渡したのは仮引数に代入されてそれが関数のスコープの中で使用することができ戻り値がresultに返される。
//実行結果が呼び出し元に返却される。

//即時関数 = IIFEと呼ばれることもある。

function a () {
  console.log('called');
}

a();

(function () {
  console.log('called');
})(); //=(a)(); と同じ意味
//（）は関数の実行とグループ化の意味がある。
//関数の実行は関数の後ろに()をつける。a();のように。
//グループ化は、let b = (1 + 2) * 3; というように優先させて計算するというように使用する。
//()の中のものを優先して計算させる以外には特に意味を持っていない
//ということは関数宣言した場合は、(a)();としても意味がないので結果的にa(); と同じ意味になる。
//即時関数でなんで()が必要なのか。
//関数宣言をそのまま（）なしで実行した場合にfunctionのsynaxエラーが出てしまう。
//なので、関数宣言は名前とつけて宣言しないといけないが、一度だけ使用する関数に名前をつけて実行するのがめんどくさいのでわざとシンタックスエラーがでないようにしている。
// 関数式　
let b = function () {
console.log('called');
}
// の場合は()で囲む必要がない。
//関数式の場合は、いらないが即時関数として使用する場合は一般的には囲むようにしている
//宣言された時に実行されているということをわからせるようになっている。
//即時にreturnが記載されているとその値が返されることになる。
// let c = (function (d)
// { 
//   console.log('called' + d);
//   return 0 ;
// })(10);
//console.logが表示される。
//即時関数の使用機会は関数スコープを使用して、関数中でしか使用できない変数、関数を明確に分けたい時に使用する。

// console.log(c);
//return が返ってくる。

let c = (function () {
  console.log('called');

  let privateVal = 0;
  let publicVal = 0;

  function privateFn() {
    console.log('privateFn is called') ;
  }
  function publicFn() {
    console.log('publicFn is called' + privateVal ++);
    //このようにするとprivateValは即時関数が呼び出された際に一回しか初期化されないので、publicFnが呼び出される度に値が増加していくことになる。
    //privateVal は外からいじれず、publicFnを通してでしか変更できない。
    //+ publicVal++にした場合もリセットされないが他の引用で変更できてしまうので値に違いが出てしまう。　
  }
  //return の中でオブジェクトを作り入れると外から使用できるようにできる。
  return {
    publicVal, //pubilcVal : publicVal変数と値が一致するときは省略可
    publicFn
  }
  // こうするとreturnのオブジェクトの部分が変数cに格納される。
})();

console.log(c);
//オブジェクトを呼び出せる。
c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();

console.log(c.publicVal);
//privateは関数内部でしか呼べない
//こうすることで即時関数の中と外で呼べるものを区別することができる。
