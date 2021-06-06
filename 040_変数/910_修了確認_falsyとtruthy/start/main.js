/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */
// console.log("0 == false", 0 == false);
// console.log("0 === false", 0 === false);
// console.log('"false" == false', "false" == false);
// console.log('"0" == 0', "0" == 0);
// console.log('Boolean("0") === false', Boolean("0") === false); //文字列の0は存在しているのでtruthyなのでfalse
// console.log('Boolean(0) === false', Boolean(0) === false);
// console.log('!Boolean(0) === false', !Boolean(0) === false);
// console.log('-1 == false', -1 == false);
//console.log('!10 === false', !10 === false);　//数値10のnot演算子がfalseと厳密に等価かというのは　trueになる。
//not演算子を使用するとbooleanに変換されるので、tuthyな値10対して、notにするのでfalseになって結果がtrueになる。

/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 * 
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
//if文で条件を表現してあげる。
let a = 1;
//引数に初期値を設定するとnullを入れると結果がnullとなってしまってnullに-1を入れれないから間違い。
function fn(num) {
    // num = num || -1;
    if  ( num === undefined || num === null ) {
        num = -1
    }
    console.log(num);
}
fn(a);
fn(0);
fn();

/**
 * 問題３：
 * 以下のコードを実行した際にコンソールに
 * 期待の出力を行うような関数greetingを
 * 作成してみてください。
 *
 * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
 * greeting("Bob"); -> 出力結果："hello, Bob"
 *
 */

// function greeting ( name , greet ) {
//     if ( !greet) {
//         console.log( `hello, ${name}`);
//     }else {
//         console.log (greet + ", " + name);
//     }
// }

function greeting ( name,  hi = 'hello') {
    // hi = hi || 'hello'
    console.log( `${hi}, ${name}`)
}

greeting("Bob", "hi"); 
greeting("Bob"); 