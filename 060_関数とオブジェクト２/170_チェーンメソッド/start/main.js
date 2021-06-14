//チェーンメソッドについて、

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	hello(person) {
		console.log(`${this.name} says hello ${person.name}`);
		return this;
	}

	introduce() {
		console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
		return this;
	}

	shakeHands(person) {
		console.log(`${this.name} shake hands with ${person.name}.`);
		return this;
	}

	bye(person) {
		console.log(`Goodbye, ${person.name}.`);
		return this;
	}
}

const bob = new Person('Bob', 23);
const tim = new Person('Tim', 33);
//bobのhelloにtimを入れるとhello(person)を実行できる。
//これを1行ずつ呼んでいるのをチェーンメソッドを使用して行えば、１つの塊として呼び出すことができる。
// bob.hello(tim);
// bob.introduce();
// bob.shakeHands(tim);
// bob.bye(tim);
//１つのインスタンスに連続した処理を行うときにチェーンメソッドは使用される。
//チェーンメソッドの構成の仕方
//bob.hello(tim);はエラーにはならない。メソッドが見つけられるから。
bob.hello(tim)
	.introduce()
	.shakeHands(tim)
	.bye(tim)
//helloにintroduceをつけるとするとどのような状況だとエラーにならないかを考える。
//bobのhelloが完了した時点で戻り値がpersonのインスタンスであればエラーにはならない。
//Personのコンストラクターから生成されたbobがPersonのインスタンスということ。
//bob.introduceであればエラーにならないのでhelloメソッドの戻り値を設定するといい。
//ということはPersonを返すのでthisを戻り値に設定してあげるといい。
//returnでthisを返すということはthisが参照する先はコンストラクター関数から作成したオブジェクトのインスタンスになるので、bobの場合ならbobのインスタンス。　
//return thisで返すことでPersonのインスタンスを返していることになるので、エラーがなくなり問題なく表示されるようになる。
//これがチェーンメソッドを使う上で必要な事になる。　
//つなげたいメソッドが格納されているインスタンスを返してあげることで続けてメソッドを記載することができる。　
//return thisのおかげでチェーンメソッドを記述することができるようになる。
//