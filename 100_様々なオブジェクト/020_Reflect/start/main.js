//Reflect・・JSエンジンの内部の汎用的な関数を呼び出すメソッドが格納されている。
//直接呼び出せる。 
//get , set ,deleteProperty, constructなどを間接的に呼び出すことができる。objectのドット記法で意図的に内部メソッドにアクセスできる。　
//内部のメソッドをreflectに格納することでReflectを通して内部のメソッドを使うようにできる。
//Proxyと合わせて使用するため。


class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj1 = new C(1,2);
console.log(obj1);
//obj1は一般的なインスタンス化のやりかた。
const obj2 = Reflect.construct(C, [2,3])//と同様のメソッドを内部メソッドとして使用している。
//これを使用してインスタンス化をすることができる。
//クラスが第一で第二が配列で引数を入れるとインスタンスが作れる。
console.log(obj2); //演算子で表現していたのを関数表記にすることができる。

console.log('a' in obj1);
console.log(Reflect.has(obj1, 'c'));//とすると上の中身の確認と同じようになる。
//このようにするとコールバック関数にしたいときに便利。演算子の表記は簡略化してコードの表記を明瞭にするが、関数表記で書きたい時がある。関数表記だとコールバック関数にかけるが、inの表記は関数として表記を囲む必要がある。１つ作業が減るので関数として扱いたい時は、このように扱えることを覚えておく。
console.log('c' in obj1);
//これはインスタンス化を行わずに使用するもの。オブジェクトに格納されている静的メソッドをReflectに移設するという意味。ObjectのdefinePropertyとして使用していたがrerlectとしても使用できる。Objectに汎用的なメソッドが格納された場合は以降Reflectにも使用されるという風に動いている。Reflectの方が使用を推奨されている。
// Relect.defineProperty;
//Objectでは処理いエラーが発生したらtry＆エラーで処理を記載する必要があるが、Reflectはエラーになったらfalseが返るようになる。戻り値がtrueがあれば実行されるというようにできる。
// if (Reflect.defineProperty){
// }else {
// }
//falseの場合はelseの方を実行するということができる。　

//Reflectでよく使われるgetとsetの確認をする。

const bob = {
  name: 'Bob',
  _hello: function () {
    console.log(`hello ${this.name}`);
  }
}

const tom = {
  name: 'Tom',
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    console.log(this);
    return this._hello();
  },
}
tom.hello; //getのhello()関数が表示される。returnに基づくものが表示される。
//helloはプロパティでそれを呼び出している。
//内部メソッド的には、
Reflect.get(tom ,'hello', bob);//を呼んでいることと同じ、使用するにはtomとhelloの引数が必要。
//第3引数にreceiverを入れるとどのような意味があるか。receiverに登録されたオブジェクトがgetメソッドの中で使用されるthisに束縛される。bobを入れるとthisがbobのオブジェクトに束縛されるようになる。
//第3引数はbindのような役割になる。第3引数が省略された場合は、第一引数と第三引数同じものとして認識される。