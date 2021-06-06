//コールバック関数とthisに関して、

window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();
//person.helloを他の関数の引数に与えた場合はどうなるのか。
function fn(ref) {
    ref();
}

fn(person.hello);
// 実行結果がhello Johnとなるwindow.nameが参照されている。
//これはメソッドを他の変数に代入していることと同じなので、let ref = person.hello のようなもの。　
 //refが参照している関数が実行されることになる。
//なのでfnの中に入れられたperson.helloはfunctionの機能のみを参照していることになる
//そのため実行すると関数が実行され、関数の実行ではwindowオブジェクトにthisが格納されていることとなる。
//refにperson.helloの関数がコピーされたものを参照させている。
//refを実行するのでrefは直接関数を実行するのでthisはpersonではなくwindowオブジェクトになる。

//オブジェクトのメソッドで実行される場合は、thisは呼び出し元のオブジェクト。
//関数として実行されるときはthisはグローバルオブジェクトをとる。
//引数で渡した段階でそれはすでに関数となるのでグローバルオブジェクトが取れる。
