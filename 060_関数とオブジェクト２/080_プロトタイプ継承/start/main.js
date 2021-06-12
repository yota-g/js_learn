//プロトタイプ継承から見ていく。
//別のコンストラクター関数のプロトタイプを受け継いで、機能を流用できるようにすること。
//コンストラクター間で機能の受け渡しができる。
//これと同じような感じで、継承がある。　別のコンストラクター関数を受け継ぐこと。
//ここにはプロトタイプ継承も含む。

//Personというコンストラクターを使用して、Japaneseというコンストラクターを作りたい場合は、Personをコピーして、それをJapaneseにするのは複数箇所に記述するので重複してしまう。
// 変更時の変更が大変で、コード量が増えてしまう。メンテナンスが大変。　
//その際に利用するのが継承。
//Personのプロトタイプをプロトタイプ継承でhelloメソッドを使用する。
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

function Japanese (name , age , gender ) {
  Person.call(this, name , age);//このthisはJapanesの関数コンテキストのthisを渡したいのでそのまま渡す。第二引数以下は関数の引数が入ってくるので、name ,ageを入れる。
  //こうすることでこの関数コンテキストのthisがPersonに渡っていき引数も渡すことができので、thisのnameとageを設定することができる。
  this.gender = gender;
}

//helloを継承するには、Obuject.createでプロトタイプ継承をする。
Japanese.prototype = Object.create(Person.prototype);
//PersonのプロトタイプがJapanese.prototypeとなる。
//Object.createでPerson.prototypeをもつプロトタイプにもつ空のオブジェクトを作成する。
// __proto__  の部分になる。そこにhello();が入る。
console.log(Japanese.prototype);
//ある関数のプロトタイプで別の関数のプロトタイプチェーンに追加することをプロトタイプ継承という。

//Personのコンストラクター関数の継承を行う。
//Personの中で設定されているname,ageをJapaneseで使用できるようにする
//Japaneseでcallメソッドを使用して呼び出す。
const taro = new Japanese('Taro' , 23, 'Male');
console.log(taro);
//このプロトタイプにはPersonが含まれている事になる。　
//Object.createでプロトタイプを継承しているから。


Japanese.prototype.hello = function() {
  console.log('こんにちは' + this.name);
}
//こうするとこちらのprototypeの方がPersonのprototypeより優先順位が高いので、こちらが表示される。　
taro.hello();
//継承したメソッドは上書きすることができる。自身のプロパティに存在するかを確認してから__proto__の中でメソッド名を探しにいく。見つかった時点で実行する。
//Japanese.prototypeはPerson .prototypeとは独立している。
console.log(taro);

//Japaneseのプロトタイプのみ追加することもできる。
Japanese.prototype.bye = function() {
  console.log('さようなら' + this.name);
}　
taro.bye();
console.log(taro);
//Japanseの__proto__にはhelloとbyeが追加されているが、継承元のPersonにはhelloしかない。
//またJapaneseのコンストラクターにのみにプロパティを追加することもできる。今回はgender