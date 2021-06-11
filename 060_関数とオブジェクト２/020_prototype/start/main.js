// prototype・・オブジェクトに存在する特別なプロパティ
//コンストラクター関数を合わせて使用する。

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function () {
        console.log('hello' + this.name);
    }
}
//prototypeプロパティは特別なオブエクトになる。コンストラクター関数で使用したいメソッドを後ろにつける。
//関数はオブジェクト一種なのでドット記法を使用できるのでプロパティを使える。
// Person.prototype.hello = function () {
    // console.log('hello ' + this.name);
    //インスタンス化されたオブジェクトにhelloというメソッドが追加される。
// }

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

bob.hello();
// helloメソッドが呼び出されるのでメソッドを使用することができる。
 tom.hello();
//使用したいメソッドをprototype に入れておくとインスタンス毎にメソッドを実行できる。
//どのように動いているのかを確認する。
//sourcesでオブジェクトの中身を確認する。
//watchにbobを入れるとプロパティに値が設定され値て、__prot__にオブジェクトが追加されている。
//このオブジェクトの中身にhelloというメソッドが格納されていてこれはprototypeに追加したもののこと。
//prototypeに追加すると__proto__に参照がコピーされることとなり、こちらの参照をたどって各インスタンスからhelloの表示をする関数を呼び出すようになっている。

//__proto__はあくまでprototypeの参照のコピーになるので実態のオブジェクトは、一緒になる。
//bobとtomの参照先のオブジェクトの実態は同じになる。
//Person.prototype === bob.__proto__はtrueになる。
//Personのthisに対してhelloを登録した場合について考える。
//この場合でも問題なく動作する。
//console.logで確認してもhello()は表示される。
//thisとprototypeはおんなじ。
//prototypeとthisでの定義を違う方法でするのは、なぜかを見ていく。
//prototypeを使用するとprototypeで定義した関数とインスタンスの__proto__の参照する関数は同じ。
//これはメモリの効率化が関係する。
// prototypeオブジェクトの参照のみをコピーしているので、各インスタンスに渡すのは、オブジェクトの参照なので関数の参照先は同じものになるので余分なメモリを使用せずにすむ。

//prototypeを使わない場合を考える。
//この場合は、インスタンス毎にhelloというメソッドを追加しないといけない。
//余分なメモリを使用することになる。
// console.log(Person.hello === tom.hello); //thisで設定した場合はfalseになる。
//  JSを支える重要なシステムになる。
// インスタンス化した際にはprototypeの参照が__proto__にコピーされる。
