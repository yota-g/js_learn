/**
 * 問題：
 * Person.helloメソッドをsetTimeoutで１秒後に
 * 実行しようとしましたが、"hello Bob"と表示されませんでした。
 * 
 * setTimeoutに渡す方法がおかしそうなのですが、
 * どのようにすればよいでしょうか？
 * 
 * ※２通りの方法で実装してみてください。
 */
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  hello() {
      console.log('hello ' + this.name);
  }
}

const bob = new Person('Bob', 23);
setTimeout(function() {
  bob.hello();
}, 2000);
// setTimeout(bob.hello.bind(bob) , 2000);
//このbobの呼び出し方は、Person.prototype.helloを呼び出しているのと同じ。
//オブジェクトを経由してhelloメソッドを見つけているわけではない。


//setTimeout(bob.hello, 1000)
//この場合だとthisをhelloに取りにいった場合は、thisがwindowオブジェクトなのでhelloとしか表示されない。
//Personからとったインスタンスにしたいので、Bobをhelloの中の引数を束縛する方法でbindで引数をbobとする方法がある。
//helloを実行した時のメソッド内のthisがbobになるので正しく表示される。

//2つめは、先程のんは、引数として、bob.helloを呼び出し関数として実行しているのでthsiがwindowを参照してbobが表示されなかった。
//functionを無名関数として定義して、bobのメソッドを使用するとbobのhelloメソッドが実行されている事になる。