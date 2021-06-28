//module Aからのものをimportして使用する。
import defaultVal, { publicVal as val , publicFn  as fn } from './moduleA.js';
//exportだけのものは{}で囲む。だが、　defaultは、変数の名前などがないので、なみカッコなしで定義する。名前は自分で自由に決められる。
//moduleを使う場合はwebpackをつかうと.jsを省略可能。使わないと省略できないので注意。
console.log(val);
//console.log(publicVal)
//しっかりと表示される。
fn();
//publicFn();
//関数も呼べる。　
//基本的なモジュールのimport/exportになる。
//モジュールでインポートしたモジュールの名前を帰るにはasで名前を変更できる。　
//ファイル内でのみ使用できる名前を指定できる。　
console.log(defaultVal);

//自分の使用したいものだけをimportすればいい。
//improtする部分の{}を消して、* as moduleAとするとmoduleAというオブジェクトに対して、moduleA.jsに定義したものが格納される事になる。　
//console.log(moduleA);で見ると定義したものがオブジェクトとして定義される。　
//*を使う場合は、module A .defaultとしてもdefaultでexportしたものが使用できる。