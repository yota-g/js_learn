//for...inと列挙可能性
//オブジェクトプロパティにあったenumerableが列挙可能性の設定値　
//その値がtrueの場合はfor,,inの中で列挙されるが、falseの場合は、列挙されない。
//コードで確認する。
//for,,,inの中では、列挙プロパティーに対して、順不同で反復処理を実行する。
//基本的には追加した順で返ってくるが、それが担保されているわけではない。
//for...in中ではプロトタイプチェーン内も列挙対象となる。　
//for..inを使う場合で、自分自身に設定されているプロパティを実行したい場合はhasOwnPropertynメソッドを使用することとなる。
//Symbolで定義したプロパティはfor...inの列挙対象とならない。　ループの対象外。
//Symbolを定義する。
const s = Symbol();

const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	[s]: 'value4'
}
//Symbolが入ったsをオブジェクトに入れる変数をkeyに入れたい場合は[s]とカッコで囲むこと。

// Object.prototype.method = function(){}
//このように定義するとobjectのmethodも列挙対象に上がってくる。
//objのみのpropertyをあげたいときは、enumerableをfalseにするとObject のものが上がらなくなる。
// Object.defineProperty(Object.prototype, 'method', {
// 	enumerable: false
// })
//Objectのprototypeにobjを格納しているので引数で指定。　
//メソッドは第二引数に入れてどのような処理をするかをObjectで渡す。
//そうすることでfor .. inのリストの列挙対象から外すことができる。
// const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method');
//こちらの結果のenumerableがfalseになっているので列挙の対象から外れていることがわかる。
//オブジェクトのビルトインメソッドは基本的にはenumerableがfalseになっているので列挙されない。
//hasOwnPropertyもfalseになっている。
//definePropertyでenumerableをfalseにすると対象から外せることを覚えておく。
//Object.defineProperty(obj,'prop1, {enumerable: false})とするとprop1を外すことができる。
//基本的にprototypeを外したい場合は、hasOwnPropertyを使用する
for(let key in obj){
//このようにするとkeyが自分自身のオブジェクトプロパティかを確認できるのでそれをifで囲んで条件分岐をして行うことで区別できる。
	// if (obj.hasOwnProperty(key)){
	// 	console.log(key, obj[key]);
	// }
	//この条件分岐を行うことでプロトタイプにあるものがfalseになり弾かれるようにできる。
	console.log(key, obj[key]);
	//Symbolの値が表示されていないことがわかる。 enumerableがfalseでなくても表示されない。
}
const e = Object.getOwnPropertyDescriptor(obj, s);
console.log(e); //enumerableはtureなのがわかる。 SymbolはES5で使用しているものを使えるようにしているので、ここでSymbolを表示できるようにすると不要なものが表示されてしまう可能性があるので、表示されないようにできている。

//こうするとobjのプロパティが取得することができる。
//objにkeyを渡せばobjの値も取得することができる。
//これがfor inを使用した書き方。
