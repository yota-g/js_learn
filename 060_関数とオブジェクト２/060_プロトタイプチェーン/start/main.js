//プロトタイプチェーン
//プロトタイプチェーン・・プロトタイプの多重形成をプロトタイプチェーンと言う。

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log('OwnProperty: hello' + this.name) ;
    //こうするとOwnPropertyが一番優先順位が高いので、自身のプロパティが一番に優先される。
  }
}

Person.prototype.hello = function() {
  console.log('Person: hello ' + this.name);
}//この状態だとPersonが表示されるがPersonをコメントアウトするとObjectが表示される。
//このように多重形成されたプロトタイプでは呼び出し先の優先順位が決まっている。
Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
//bobのオブジェクトが生成されている
//bobのオブジェクトには__proto__があって、その中に__proto__がある。
//__protp__が多階層で形成されている状態をプロトタイプチェーンと呼ばれている。
//このような状態になっていると
bob.hello();
//Personのportotypeを優先的に参照して、そのそれがなければObjectのprototypeを参照することができる。
console.log(bob);
//階層が浅いものが呼び出される。
//Personのオブジェクト中でprotoタイプが探されて、なかった場合にprotoの中にprotoがないかを探しに行って、その中にhelloを探しにいく。　helloがあるとそのhelloが実行される。
//自身のobject Person　Objectと言う順に推移していく。
//なければundefinedとなる。
//JSのObjectのプロトタイプなければundefinedとなる。
//JSの全てのObjectはObjectのプロトタイプから始まるので、最終的にこのオブジェクトのプロパティに該当の名前が見つからない場合には、undefinedが変えることとなる。

//hasOwnPropertyでプロパティが存在するかをチェックできる。
const result = bob.hasOwnProperty('name');
console.log(result);
//nameがあるのでtrueとなる。
const result2 = bob.hasOwnProperty('growth');
console.log(result2);
//growthがないのでfalseとなる。
//hasOwnPropertyはどのように検索しているかというとtypeチェーンでObjectのprotoから始まるものからしかhasOwnPropertyがないのでこのメソッドのhasOwnPorpertyが使用される。　
//Objectのメソッドが使いまわせるようになるのでメモリ的に効率的に利用できていることになる。
