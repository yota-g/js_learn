//モジュラーjs・・JSが肥大化し複雑になっているのでモジュールを使用してコードを整理して利用することが重要。
//モジュールの使い方と注意点について学ぶ。
//ES modulesと CommonJSのちがい
//モジュールはソースコードを機能毎に分割して、メンテナンスしやすくする仕組み。
//ESモジュールはエクマスクリプトに基づいた管理の仕組み。ES6から導入。
//CJSとEMSが代表的なモジュール。
//それぞれの違いについてみる。
//CJSはNode.js上で稼働するもの。 require/exportsで書き込み読み込みを外部ファイルへ行う。
//JSをモジュールで管理するのが最初なかったのでCommonJSが作成されたのでNode.jsを使用していたのでCommonJSが含まれている。

//ESModulesについて、ECMAScriptに基づくモジュール管理システム。　
//キーワードとしてimport / exportを使用してモジュールの露出を行う。
//モジュール管理はブラウザ側で実施。

//ESMとCJSの違いは、まずは露出を行うときのキーワードが異なる。
//モジュールシステムをまたいで使用することはできない。ESMはESMのみ。CJSはCJSのみで使用できる。
//ESMはブラウザ上で、CJSはNode.js上で使用される。
//現時点での最新のNode.jsでは、ESMも使用できるようになっているが実験的なもの。　
//安定的な稼働は保証されていない。　
//Node,js上で信頼性の高いものはCJS
//今後変わる可能性がある。ファイルの拡張子は、ESMは.mjsで、CJSは.cjsになる。
//基本的にはどちらもJSのモジュール管理の仕組みjsの拡張子で問題ないが、Node.jsがESMを動かそうとしていることが起因している。明示的にどちらのモジュールが動いているかを示す必要があるため。
//どの仕組みで動いているかを明示してあげることでさまざまなところで使用することができる。　


//importとexport 
//importは読み込み、exportは露出時に使用
//ESModuleを使用する時にはscriptのタイプをmoduleと指定する必要がある。
//moduleとtypeを指定するとESModuleの仕組みに乗っ取ってブラウザがjsファイルを解析する。
//ほかへexportするように設定する。
export let publicVal = 0;
export function publicFn(){
  console.log('publicFn called: ')
}
//exportをつけることで他で呼び出すことができる。
//exportのdefaultを使うキーワードもある。
export default 0;
//こうするとdefaultで読み込みされるのが0になる。
//defaultでimportする時は書き方が異なる。　


//CJS の場合の定義の仕方は、
//exports.publicFn = function...というように定義する。それをESModuleでインポートはできない。