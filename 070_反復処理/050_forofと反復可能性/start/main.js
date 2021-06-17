//for...of イテレータをもつオブジェクトの反復操作を行う。
//反復操作を行う際に使用するオブジェクト String Array Map, Set arguments etc...
//これらはfor ofで反復が可能。
const arry = ['a', 'b', 'c'];
arry[4] = 'e';
//間の3が設定されていない状況で行っても、設定されていない値がundefinedと表示されて配列が実行される。
//値を返却する。
Object.prototype.method = function() {}
//Objectのprototypeにメソッドを追加してもfor ofでは出現しない。
Object.defineProperty(arry, 0, {
  enumerable: false
})
//for ofの場合は、enumerableを参照していないので、falseにしても表示される。
const d = Object.getOwnPropertyDescriptor(arry, 0);
console.log(d);
//値はaでenumerableがfalseでもfor ofが表示されることがわかる。
//for ofはあくまでオブジェクトに格納されているイテレーターに従うということを覚えておく。
for(let v of arry){
  console.log(v);
}
//配列が持っているイテレータの挙動にfor ofは従っている。
// 配列のprotoのSymbol(Symbol.iterator)というプロパティがあって、これは特殊で、 これがfor ofの実行時にこれが使用されている。
//Symbol.iteratorを書き換えることでfor ofのループの挙動は変わる。