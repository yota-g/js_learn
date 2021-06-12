//

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
console.log(bob);
const result = bob.hasOwnProperty('name');
console.log(result);
//このは存在するのでtrueになる。
const result2 = bob.hasOwnProperty('hello');
console.log(result2);
//この場合は、あくまでオブジェクトのプロパティとして存在するかを確認するときに使用する。
// helloはプロトタイプに保存されているものになるのでfalseになる。オブジェクトに保存されているわけではない。
//自身の中に含まれているのを確認しているだけで、Object全体を調べているわけではない。今回のhelloはObject自身に含まれているのでbobと比較するとfalseになる。　
//自分自身のオブジェクトのプロパティとして、引数で与えられた名前が存在するかを確認するもの。

console.log('name' in bob);
// これはtrueになる。bobというオブジェクトが保持している
//inを使った場合はprototypeチェーンも登って調べていくので
console.log('hello' in bob);
//この結果はtrueとなる。
//実装していないものは、prototypeにもないのでfalseになる。
//ObjectにhasOwnPropertyがあるかも
console.log('hasOwnProperty' in bob );
//prototypeチェーンを遡って、オブジェクトのメソッドとして見つかるのでtrueとなる。
//hasOwnPropertyは自分自身のプロパティとして存在するか。
//inの場合は、プロトタイプチェーンまで含めて、指定されたメソッドが存在するかを確認できる。

