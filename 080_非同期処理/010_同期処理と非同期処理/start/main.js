function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms); //このms分だけメインスレッドでループが繰り返される。処理が終了後sleep doneと表示されるようになる。
  console.log('sleep done');
}
//msの引数を与えてメインスレッドをそのms分だけ占有することができる。
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  console.log('button clicked');
});

//同期処理でメインフレームが確保されている場合にボタンを押したときにボタンがどのように反応するかを確認する。
// sleep(3000);
//sleep doneと表示されるまでボタンの押した表示がされない。ある処理が行われていたらその処理の完了を待ってから次の処理が実行される事になる。
//ボタンをクリックしてsleepがされている場合は終了を待ってスタートする。
setTimeout( function(){sleep(3000);}, 2000);
// setTimeoutの間はボタンを押すことができて、それ以降にsleep3000が動いている間は表示されなくなる。　　
//終了後表示される。 

//sleep関数の処理が終了して、レンダリング後にクリックが表示される。
//このようなことがブラウザで起きている。

//setTimeoutの場合はこの処理が実行されるは、非同期処理としてメインスレッドから切り離される。
//2秒間たった後にsleepが実行される。setTimeの間は、メインスレッドが開くので画面の更新と入力が可能になる。
//非同期処理は、一時的にメインスレッドから処理が切り離される。そうすることでメインスレッドが一時的に実行できるようになる。ある時点でメインスレッドに非同期処理が戻ってきて実行される事になる。　
//非同期処理は、promise queueMicrotascなどのAPIを使用することで非同期処理ができる。クリック処理や、NWイベントやI/Oイベントなども非同期としてメインスレッドに渡ってくる事になる。