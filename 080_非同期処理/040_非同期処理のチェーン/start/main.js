//非同期処理のチェーン　複数の非同期処理を繋げていく方法を確認する。
function sleep(callback, val) {
  setTimeout(function() {
    console.log(val ++ );
    callback(val); //こうするとcallbackの引数にvalが渡ってくるので
  }, 1000)
}
sleep(function (val){ //sleepの中でさらにsleepを呼ぶとするとどうなるのか。
  sleep(function (val) {
    sleep(function (val) {
      sleep(function (val) {
      },val) //非同期の処理を順番に実行することができる。
    },val)
  },val)//2回目呼び出されるvalに1が表示されるようになる。
  // console.log('callback done');
}, 0)
//コールバック関数を複数繋げたい場合はどうするか。
//コールバック関数は非同期のチェーンをつなげる事になる。
//注意すべきことは、階層が深くなり、中でどんどん読んでいくため。
//コードの可読性が悪くなる。コールバック関数は、非同期のチェーンをつなげるのに適していないことがわかる。
//ES6ではこのようなことを防ぐためにpromiseというコードをつなげるためのオブジェクトが導入され、可読性が高いコードが描かれるためそれについて学習する。

