//クラス継承・・・他のクラスのプロパティとメソッドを継承すること。
//まずは関数コンストラクターをクラスに変更する。

class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  hello() { 
    console.log('hello ' + this.name);
  }
}

class Japanese extends Person {
  //クラスの継承をするときは、extendsを使用することでPersonを継承することができる。
  constructor (name, age , gender ) {
    super(name, age) ;//superを実行することでPersonのコンストラクターが実行される。
    this.gender = gender;// Japaneseのクラス特有のものをsuperの後に追加していくことで追加できる。
  }
  //Japanese特有のメソッドをconstructorと同じ階層に追加して上げることで使用できるようになる。

  hello() {
    console.log('こんにちは　'+ this.name);
  }

  bye () {
    console.log('Sayonara ' + this.name);
  }
}
//classにすることでコード量が少なくなる。


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log('hello ' + this.name);
// }

// function Japanese(name, age, gender) {
//   Person.call(this, name, age);
//   this.gender = gender;
// }

// Japanese.prototype = Object.create(Person.prototype);
//これに関しては、extends  Personに対して、継承されるので定義する必要はない。

// Japanese.prototype.hello = function() {
//   console.log('Konnichiwa ' + this.name);
// }

// Japanese.prototype.bye = function() {
//   console.log('Sayonara ' + this.name);
// }

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
//オブジェクトが作成されてprotoが作成されていることがわかる。
taro.bye(); //これでメソッドが使用できることも確認できる。