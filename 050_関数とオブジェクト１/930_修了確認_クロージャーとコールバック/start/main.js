/**
 * 問題：
 * コールバックとクロージャーの仕組みを使って、
 * setTimeoutで1秒後に"hello Tom"と表示されるような
 * hello関数を作成してみましょう。
 * 
 * 条件としてはhello関数の引数には必ず
 * nameの引数を取るものとします。
 * 
 */

function hello( name ) {
  return function () {
    console.log('hello ' + name);
  }
}

/**
 * 実行文は以下の通りです。
 */
setTimeout(hello('Tom'), 1000);
//setTimeoutの引数には関数が入る。今回は()がついているので実行されているのでreturnが表示されてしまう。
//今回だと第一引数はfunction() {
  //console.log('hello ' + name);
// }が渡されているのと同じになる。 関数が返ってきている事になる。
//だからreturnの部分を関数にすることでsetTimeoutを実行することができる。
