//super　関数コンテキスト内で使用できる特別なもの。
//使用条件は限られている。
//superは継承元の関数を呼び出すためのキーワード
//classのconstructorの中で他のクラスを継承した中で使える。
//継承元のメソッドをsuperを使用して、呼び出すことができる。

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}
//classのconstrutorは関数コンテキストで実行されているのが前提。関数コンストラクターが裏側で動いている。
//superをsourceのwatchで確認しようとしてもno availableとなって確認できない。
//superは特殊なものと考える。
class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age);
    //Personを他のJapanseクラスで継承した中でsuperでPersonのコンストラクターを呼び出す際にsuperを使用する。
    //superを使用する前にJapanseクラス特有のthis.を定義するとエラーにある。
    //superを使用して、親のコンストラクターを初期化したい場合は、一番初めに書く必要がある。
    //superは親のコンストラクターを呼び出すだけでなく、親のメソッドも呼び出すことができる。
    this.gender = gender;
  }

  hello() {
    super.hello(); //これはPersonのメソッドを呼び出している事になる。親を呼び出した後に何らかの処理を入れることもできる。 メソッドの場合は先に呼び出しても後で呼び出しても位置には関係がない。
    console.log('Konnichiwa ' + this.name);
    super.hello();
    //superはクラスを継承したconstructor内またはメソッド内で使用することができる。
    // 例外的にオブジェクトの中で使用することができる。
  }

  bye() {
    console.log('Sayonara ' + this.name);
  }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.hello(); //helloとkonnichiwaの両方を表示できている事になる。superのおかげで。
taro.bye();

//superの例外的なオブジェクトからの呼び出し方法

const american = {
  hello() {
    console.log('hello ' + this.name);
  },
};

const bob = {
  name: 'Bob',
  hello() {
    super.hello();
    // console.log('こんにちは　 ' + this.name);
  },
};
bob.bye = function () {
    // super.hello();
    //このオブジェクトの中で使用しようとしてもエラーになる。
    //使用できない。
}
Object.setPrototypeOf(bob, american);
//第一引数にオブジェクト、第二引数に引き継がせたいものを指定する。指定されたものがbobのオブジェクトに入る。
// bobのオブジェクトの中のprototypeにamericanが入ることになる。
console.log(bob); //protoの中にamericanから始まるhelloが入っていることが確認できる。
//この状態でbobを呼び出すと
bob.hello();
//bobの中のconsoleを消しても継承することでamericanのhelloが表示されるようになる。
//オブジェクトリテラルの中でも使用することができる。オブジェクトリテラル内でしか使えない。　
//実際問題superはclassの中でしか使用されない。
