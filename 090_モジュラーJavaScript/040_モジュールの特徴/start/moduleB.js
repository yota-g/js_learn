import './moduleA.js'
import './moduleA.js'

//scriptにtype moduleとつけるとそのファイルは非同期で読み込まれる。
//type = moduleとすることでdeferを書かなくても適用されている事になる。
// const h1 = document.querySelector('h1');
// const text = h1.textContent; 
// console.log(text);
//main.jsに記載したのを書いても同じ結果になる。　
//h1より前方にモジュールの読み込みがされていても読み込みがされている事になる。
//moduleとモジュールでないものの違いは、モジュールでないものは、　htmlで読み込んだ分だけ実行されるが、モジュールは何回読み込まれても一回しか実行されない。
console.log('moduleB.js')
//一回しか実行されないのはimportを使用しても同じようになる。
//importを2回してもmoduleAは一回しか読み込まれていないことがconsole.logで設定したmoduleA.jsが一回しか表示されていないことがわかる。
//importで何回呼ばれても一番最初で呼ばれたタイミングでのみmodule Aのコンテキスト部分が実行される事になる
//一回だけ実行されるのは即時関数の動きと同じ、定義した時に一度だけ実行されて、外部に露出されたもののみ実行される。

//モジュールに対応していないブラウザに関して、IEはモジュールに対応していない場合は、errorを出してあげないといけない。
//nomoduleというのとつけるとブラウザが対応していないものの場合のみその tagが実行される。

//scriptにmoduleをつけるとこのファイル内は自動的にstrictモードになる。