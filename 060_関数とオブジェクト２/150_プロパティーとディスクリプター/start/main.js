'use strict';
//プロパティとディスクリプター
//一般的にはオブジェクトを設定した場合には、各プロパティは値を設定する事になる。
//Value以外にオブジェクトは設定値を持っていて、それをディスクリプターと呼ぶ。
//ディスクリプターとはvalue以外にconfigurableとenumerableとwritableがある。
//これらの値を設定することでこのプロパティの取る挙動を設定できる。
//これら４つの設定のことをディスクリプターと呼ぶ。
//プロパティの設定値
//valueはそのプロパティに設定された値。
//configurableは設定変更可能性。　設定が変更できるか。　
//enumerableは列挙可能性。　inなどのループが作成された場合に、そのプロパティが参照されるかを設定。
//writableは値の変更可能性。値の変更が可能か。
const obj = {prop: 0};
const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');
//変数の名前とプロパティの名前を渡してあげる
//このようにしてdescriptorの中身を確認すると
console.log(descriptor);
//ディスクリプターのオブジェクトが取れる。
//{value: 0, writable: true, enumerable: true, configurable: true}
// configurable: true
// enumerable: true
// value: 0
// writable: true
// __proto__: Object
//このようなディスクリプターが取れる。
//オブジェクトリテラルで設定した場合は全ての値がtureになる。
const obj2 = {};
Object.defineProperty(obj2, 'prop' , {
  //defineプロパティを用いて、プロパティを定義した場合デフォルト値がfalseになる。
  //wirtableをtrueに設定すると 値の変更が可能になる。
  writable: true,
  value : 0
})
Object.defineProperty(obj2, 'prop' , {
  enumerable: false
})
//configurableがfalseなので再設定ができない。　またfalseの場合はこのプロパティの削除もできない。
// delete obj2.prop; //エラーが表示される。configurableをtrueにするとエラーがプロパティを削除できる。　
const desc = Object.getOwnPropertyDescriptor(obj2, 'prop');
console.log(desc);
//設定の変更不可、列挙不可、値の書き換え不可。
obj2.prop = 1;
//writableをtrueにしたのでエラーがでなくなる。
console.log(obj2);
//取れてくるpropの値は0のまま。これはdefinePropertyでwritableがfalseだから。
//writableだfaleでもエラーがでない。ES5から'use strict'をページの最初に持ってくることでエラーにできる。
//descriptorの設定値で値の設定などが変わることを覚えておくこと。



