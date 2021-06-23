//Await/Async・・promiseを更に直感的に記述できるようにしたもの。
//AsyncはPromiseを返却する関数の宣言を行う。必ずpromiseが返ってくる。　
//awaitはpromiseを返却する非同期処理が完了するまでまつ。

function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })

//asyncで簡略化できる 関数の前にasyncを宣言
// async function init() {
//   let  val = await sleep(0); //awaitで関数が実行された結果は変数に入れることができる。
//   console.log(val); //valに格納されているのがthenメソッドのコールバック関数の引数になる。
  //resolve(val)に渡された変数が表示される。
  //awaitをつけないとnew  Promiseのインスタンスが返ってくるのでプロミスのオブジェクトが表示される。
  //awaitをつけることでresolveが渡す引数を返す。
  //let val = await sleep(0);ではresolveが呼ばれるまで待機状態になるまで、console.log(val)が先に実行されることはない。
// }

// init();
//で実行するとsleepの関数が実行される。
//awaitを使ってPromiseのチェーンを作っていく。

//asyncグローバルコンテキストでは実行できず、関数コンテキストで実行するべき。
//関数の外にawaitを書くとエラーになる。asyncの中で描かないといけない。　
//async自体もpromiseのインスタンスを返すので、このinitをconsole.logで見ると
async function init() {
  let val = await sleep(0);
  val = await sleep(val);//promiseのチェーンをこのように使用することができる。
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  // console.log(val);
  //中にthrowがあるとcatchにわたる
  throw new Error(); //errorを表示することができる。
  return val;
}
//内部的にはpromiseと同じ挙動をとる。 awaitで受けれるのはpromiseのインスタンス、asyncが返すのはpromiseのインスタンス。

// init();
// asyncとawaitの使い方
//関数の中でawaitが使用されている場合は、関数は必ず非同期で処理される。
//呼び出しの関数にも非同期であることを伝えないといけないので、その場合は、関数に必ずasyncをつけないといけない。
//つけないとエラーになる。
// console.log(init());
// init().then(function(val) {
//   console.log('hello' + val); //asyncに valを戻り値と設定するとvalを代入できる。 //asyncが完了後に実行される。
// });
//promiseのインスタンスが返ってきていることがわかる。　asyncの関数内では戻り値は書いていないが
//returnは書いていないので空のPromiseが返ってくるので、promiseのインスタンスが表示される。
//promiseがかえるのでthenをつなげることができる。
init().then(function(val) {
  console.log('hello' + val); //asyncに valを戻り値と設定するとvalを代入できる。 //asyncが完了後に実行される。
}).then(function(e){
  console.error(e);
});
