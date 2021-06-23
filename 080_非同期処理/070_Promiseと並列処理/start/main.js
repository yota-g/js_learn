//promiseと並列処理・・どのようにして行えばいいのか。
//

function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, val * 500); //表示が増えるごとに表示される速度が伸びる
  });
}

//Promiseの並列しょりを行うには、
// Promise.all([sleep(2), sleep(3), sleep(4)]).then(function(data){
//   console.log(data);
// });
//反復可能オブジェクトでpromiseのインスタンスを入れてあげる。
//Promise allが反復可能オブジェクトの配列に格納されたsleep（Promiseのインスタンス）がすべて完了するまで次のメソッドを待つことになる。　それぞれ非同期処理の完了時間は変わってくるが、これが全て完了したら次のthenメソッドが実行される。 並列処理で配列を同時処理して終了した後にthen以降のメソッドを実行することができる。
//thenの引数に渡ってくるのはsleepが実行された後のresolveに代入された値が渡ってくる。　

//Promiseチェーンの中でpromise allを使いたい場合を考える。

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return Promise.all([sleep(2), sleep(3), sleep(4)]) //thenの中に入れることが可能。この処理が終わるまで次の処理は実行されない。　ポイントは反復可能オブジェクトの中にpromiseのインスタンスを返すことがポイント
// }).then(function(val) {
//   console.log(val); //Promise allの戻り値が戻ってきていることがわかる。　
//   return sleep(val);//配列が返されるので場所を指定すると表示できる。
// })

//Promise.raceを確認する
// Promise.race([sleep(2), sleep(3), sleep(4)]).then(function(data){
//   console.log(data);
// });
//raceは配列の中のどれか１つが完了した時点で次のthenメソッドに処理が映る。
//この場合はsleepの2が最初に完了するので2が完了すると同時にthenが実行されて3が表示される。
//これがrace

//Promise.allSetteledを使用するとどうなるか
Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then(function(data){
  console.log(data);
});
//表示方法が変わる dataの中に渡ってくる値がvalueの中にresolveで渡した値が入って、そのstatusにはfulfilledが渡ってくる。　これはfulfilledはresolveが呼ばれたタイミングのporomiseのステータスになる。 rejectだと異なる値になる。rejectedになる。
//全ての非同期処理が終わるのを待つが、その完了した非同期処理が成功したか失敗したかはわからないのがallSettled
//allとの違いはrejectが渡るとcatchに渡るが、allSettledにはcatchには渡らない。thenしか呼ばれない。  コンソールでも赤色のエラーが表示されない。　allの場合は、並列処理を入れていても１つが終わったらthenが実行される。
//表示されたもののstatusを確認することでrejectかresolve確認しないといけない。

