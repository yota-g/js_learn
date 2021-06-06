//参照がコピーされた時のthisの挙動をみる。
window.name = 'John'
const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        a(); // hello Johnが呼び出される。これは単に関数の中でthisを呼んでいるだけなのでwindowオブジェクトを参照することになる.
        const person = {
            name : 'Tim', //ここが未定義だとthis.nameがundefinedになる。
            hello: function () {
                console.log( 'goodevening' + this.name) //このthisは1つ上の階層のpersonのname Timを参照する。
                a();
            }
        }　　
        person.hello(); //オブジェクトから呼び出したときは呼び出し元のオブジェクトから引用することができる。
    }
}
const ref = person.hello;//helloを()で実行するのではなく他の変数に代入する。
//そしてその変数を実行する。
ref();
//Helloと表示される。
//this.nameがあるのでpersonのnameの’Tom’を参照するのではないかと思うが、
//window.nameとして値を入れているとrefを実行したときにHello Johnとなる。
//これがmethodを他の変数にコピーした挙動となる。　

person.hello();

//person.helloをrefにコピーするとhelloというプロパティの参照している関数がコピーされる。
//そのコピーされた関数に対して、refが参照する事になる。　
//関数はオブジェクトの一種なので、関数の実態への参照がコピーされている。
//refから関数を呼び出すとpersonオブジェクトを参照せずに直接関数を呼び出すことになる。
//そうすると呼び出し元のオブジェクトがpersonではなくなるので、this.nameでTomが取れなくなる。

//では、なぜ、window.nameを設定すると値をとってくることができるのか。
//オブジェクトのメソッドして実行される場合は、thisで呼び出し元オブジェクトを参照。
//関数として実行されるときは、thisはグローバルオブジェクトを参照するものとなる。
//コンストラクター関数とクラスを使った時に例外があるが、基本的にはthisの参照先は上記のようになる。

function a () {
    console.log( 'Hello' + this.name)
}

//thisの値はsourcesのscopeのlocalに表示される。