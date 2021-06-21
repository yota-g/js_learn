//Promiseチェーン・・Promiseを使って非同期処理を順次実行すること。

function sleep(val) {
  //resovleしか使用しない場合は第二引数を省略できる。　
  //returnでsleepに返すようにする。こうすることでsleepを実行することにthenを使用できるようにする。
  return new Promise (function (resolve){
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// sleep(0).then(function(val){
//   return sleep(val); //こうすることでnew Promiseがsleepが呼ばれた時に返ってくるので非同期の処理をつなげることができる。
  //非同期をつなげるためにはthenメソッドのなかのcallback関数のreturnにPromiseのインスタンスをセットすることを忘れないこと。Promiseが返って来ないと後続の処理ができない。promiseのチェーンが切れて、sleepの実行を待たずに走ってしまう。
// }).then( function(val){
//   return sleep(val);
// }).then(function(val){
//   return sleep(val);
// }).then(function(val){
//   sleep(val) ;
//   return val; //returnにnew Promiseが返ってきていないから次のコールバックは非同期の処理の完了を待たずに次のthenが同時に実行される。同時に表示されるようになる。
  //thenメソッドのreturnには、new Promiseのインスタンスを返しあげないと、Promiseのチェーンが切れてしまうので意図した挙動にならない。
// }).then(function(val){
//   return sleep(val);
// }).then(function(val){
//   return sleep(val);
// })
//ES6以降はPromiseを使用して、コールバックは多階層になるのでなるべくPromiseを使用する。
//無名関数はアロー関数で記載することもできる。


