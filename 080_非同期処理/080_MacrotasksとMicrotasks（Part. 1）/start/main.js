//macrotaskとmicro tasks
//マクロタスクはこれまでのレクチャーでタスクキューと呼んでいたもの。setTimeout
//マイクロタスクはタスクキュートは別で存在している非同期処理の待ちの行列 別名ジョブキュー
//promiseで登録した非同期処理などが含まれる。
//それぞれ挙動が異なる。
//どのように違うかをブラウザで確認する。

//マクロタスク
setTimeout(function task1() {
  console.log('task1');
});
// 非同期として扱われるが、待機時間はない。

//マイクロタスク
new Promise(function promise(resolve) {
  console.log('promise');
  resolve();
}).then(function job1() {
  console.log('job1');
}).then(function job1() {
  console.log('job1');
});//2つthenを繋げてもjob1が２つ先に表示される。

console.log('global end');
//promise global end job1 task1の順で表示される。
//非同期処理になるのでタスクキューに入る。これはグローバルコンテキスト終了後に呼び出される。
//次にpromiseのコールバック関数は、同期的に処理されるので一番初めにpromiseが表示される。その後にあるthenメソッドはグローバルコンテキスト終了後に表示される。なので2番目に表示されるのはglobal endでそして3番目がどちらかとなった時には、マイクロタスクのthenメソッドが表示される。　setTimeoutが先に書いているので先に実行されそうだが、マクロタスクであるsetTimoutはマイクロタスクよりも後で実行されることになる。
//そのため上に書いてもthenのメソッドが先に実行される。
//マイクロタスクとマクロタスクはそれぞれ別にタスクを管理している。
//コールスタック終了後はイベントループば、マイクロタスク→マクロタスクの順で確認が実行される。
//マイクロタスクが終了した後にマクロタスクが実行される。
//マイクロタスクとミクロタスクが同じイベントで発見された場合は、必ずマイクロが先に実行される。

//マイクロタスク・・順番が回ってきたら全てのジョブを実行。
//マクロタスク・・順番が回ってきたら１つずつタスクを実行。
//2つずつあったら、コールスタックがなくなるとマイクロタスクが全部実行されて、その後マクロタスクに格納されているジョブが１つだけ実行される。その間にマイクロタスクにジョブが追加された場合には、マイクロタスクを先に実行してからマクロタスクを実行することとなる。　
//これが挙動の違い。
//マクロタスクの代表例・・・setTimeout setInterval requestAnimationFrame
// マイクロタスクの代表例・・・　Promise, queueMirotask MutationObserver 
