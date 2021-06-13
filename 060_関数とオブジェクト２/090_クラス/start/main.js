//クラス　コンストラクター関数をクラス表記でかけるようにしたもの。
//すでにあるものを簡単にかけるようにしたものをシンタックスシュガーという。
//これをクラスに変える。
class Person {
  constructor (name ,age) {
      this.name = name;
      this.age = age;
  }
  hello () {
    console.log('hello' + this.name);
  }
  //constructorの中にこのように記載することで関数のPersonと同じものにできる。
  //prototypeのメソッドはconstructorと同列に追加してあげることで使用できるようになる。
}
//このようにクラスで定義するのと下記のようにコンストラクター関数で定義するのは実質的に同じになる。
//Personの関数コンストラクターのシンタックスシュガーが上記のクラスになる。
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log('hello ' + this.name);
// }

const bob = new Person('Bob' , 23);
//呼び出し方も同じ。
console.log(bob);
//オブジェクトが生成されていることがわかる。
// あくまでJSではインスタンス化されたものはオブジェクトになる。　
//prototypeは使用しないが裏側で動いている動作を理解できることは非常に大切。　