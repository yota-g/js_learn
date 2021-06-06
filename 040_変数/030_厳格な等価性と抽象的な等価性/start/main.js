//厳格な等価性と抽象的な等価性について、
//値を比較した時に等価として認めることができるかできないかを判断する基準。
//厳格な等価性 a === b 型の比較あり
//抽象的な等価性 a == b　型の比較なし
let a = '1';
let b = 1;

console.log( a === b); //等価でなければfalseが返ってくる。
console.log( a == b );

function printEquality (a , b) {
  console.log( a === b);
  console.log(a == b);
}

let c = true

printEquality(b , c); // 厳格な等価性の場合は型が違うのでfalseになる。
//抽象的な等価性の場合はどちらかに型変換がされるので、true をnumに変更すると1になるので、trueになる。

console.log ( b === Number(c)); //抽象的な場合の型変換はこのような処理になっている。
let d = 2 ;

printEquality( c , d);//この場合は両方ともfalse
printEquality(a , c);//この場合は抽象的な等価性の方がtrueになる。

let e = "";
let f = 0;
printEquality( e, f);
//抽象的な等価性がtrueになる。 厳格的にはfalse。変換する際は、文字列を数値に変換するようになっている。
//""をnumberにすると0になる。

let g = "0";
printEquality(f ,g);
//数値と文字列は抽象的にはtrue、厳格的にはfalse。
//基本的には厳格な等価性を使用する方がいい。
