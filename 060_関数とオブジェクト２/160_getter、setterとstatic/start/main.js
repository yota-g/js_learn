//setter/getterとstaticについて見ていく。
//さっきのディスクリプターに加えて、2つオブションを追加することができる。
//それがsetとget
//設定することでオブジェクトにある特別な機能を持たせることができる。

function Person1(name, age) {
	this._name = name;
	this._age = age;
}
//コンストラクター関数でのstaticメソッドの書き方に注目する。
Person1.hello = function () {
	console.log('hello');
}//とすることでPerson1にstaticメソッドを格納できる。
//コンストラクター関数にメソッド追加したものをstatic関数と読んでいるという事になる。
Person1.hello(); //helloと表示される。

//まずはdefinePropetyで設定しないといけない。
//今回はPerson.prototypeのnameに対して設定し
Object.defineProperty(Person1.prototype, 'name', {
	get: function () {
		console.log('get');
		return this._name + ' hello';// getが呼ばれた時の動作を記載していく。
	},
	set: function(val) {
		this._name = val;
  }
});
	//ディスクリプトで設定されるgetとsetのことをgetter,setterと呼ぶ。
//これの使用方法はインスタンスで使用する。
const p1 = new Person1('Bob', 23);
console.log(p1.name);
//こうするとgetが呼び出される。getter経由で値を取得している。 //getにhelloをつけるとそれも追加されて表示される。
p1.name = 'Tom'
console.log(p1.name);
//このようにするとsetterに代入したTomが渡されて変更されて表示される。
//getter とsetterの使用方法は、呼ばれたときに関数が実行されたときにgetが必ず実行されるので、何らかの処理をgetに何か処理を入れておくとgetが呼ばれる間にhelloを入れることもできる。
//何らかの処理を間に挟むときにgetterとsetterを使用する
//nameを変更したときに他の値も変更したい時は、setの中で他の値の変更を行うのもいい。
//Javaではsetter,getterは使用する。JSの場合は何か操作を挟みたいときに使用することが多い。
//difinePorpertyで設定するのがめんどくさいので簡略化して設定することができる。

class Person2 {
	constructor(name, age ) {
		this._name = name ;
		this._age = age;
	}
	get name() {
		console.log('hello');
		return this._name;
	}
	set name(val) {
		this._name = val;
	}
	static hello() {
		console.log('hello');
	}
}
//こうすることでPerson1のgetterとsetterのような表現を同じようにすることができる。
//staticはクラス内で使用できる静的なメソッドを定義するキーワード
Person2.hello();
//このようのPerson2のhelloを呼ぶことができる。
//インスタンス化を行わずに使用できるメソッドを静的メソッド（staticメソッド）と呼ばれる。
//インスタンス化を行っていないのでPerson2をオブジェクト化はしていない。 
//なのでstatidメソッドではthisを使用することはできず、thisを入れるとPerson２が表示されてしまう。
const p2 = new Person2('Bob',23);
console.log(p2);
//consoleに表示されるconstructorは上で示すクラスのconstructorのことを示していて、__proto__は省略できて、
console.log(p2.constructor);
//Person2のクラスが表示される。 p2のprotoにあるconstructorの中にhelloメソッドが入っているのがわかる。
console.log(p2.constructor === Person2);
//これが trueになる。
//コンストラクターは関数なのでconstructorとPerson2を比べてもtrueになる。
//コンストラクター関数にhelloを追加したのが実質的にstaticメソッドになる。
//setter,getterもプロトタイプの中にあるのでconsoleの中でprotoの部分で表示されている。
console.log(Person2);
