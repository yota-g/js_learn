//falsy と truthy
//falsyな値とは、booleanで真偽値に変換した場合にfalseになる値のこと　
//falsyな値とは、false,null,0 undefined,0n, NaN,""がfalsyになる。
//truthyの値とは、falsy以外の値。
 
let a = 0;
// a = null, undefined, 0n, NaN. "". false でもfalseと表示される。
//変数の代入無しでもfalseと表示される。
console.log(Boolean(a));
//false 
//NaNは計算結果が数値として予期されるが結果が数値でない場合に表示されるもの。
//No a Numberの略 parseInt("")では""は数値では表せないので結果がNaNになる。そして、falseになる。

//  if 文の中に変数を入れるとtrueの場合にその処理が実行されて、それ以外はelseがあればelseで実行される。
//変数に!をつけると変数がtrueの場合にfalseになり、falseの場合にtrueになる。
//ifに入れて変数に値が入っているかを判断する場面は多いので覚えておく。
if (!a) {
  console.log('hello');
}else {
  console.log('bye');
}
//このような感じ 0だけ別に判定したい場合は別に条件分岐をしないといけない。



