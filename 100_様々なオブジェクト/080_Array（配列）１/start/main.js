//配列　part1

const arry = [1,2,3,4,5];
arry.push(6); //pushで配列の最後に数字を入れることができる。
const result = arry.pop(); //一番最後の数字が削除される。  削除されたものは戻り値として返ってくるので変数設定して確認する。
console.log(result); //削除された6が表示される。resultに6が格納されているのがわかる。
console.log(arry);
arry.shift();//とすると一番先頭の数字を削除する。この場合は、1が削除される。
console.log(arry);
const result2 = arry.unshift(0); //一番元に数字を追加することができる。
console.log(result2); //追加された配列の個数が表示される。
console.log(arry);
//spliceは指定した長さ分だけ配列を切り取ることができる。
const result3 = arry.splice(0, 2, 8 , 9); //指定された個数分のみ新しい配列として抽出される。
console.log(arry , result3);
//spliceの第三引数以降は切り取られたところに対して代入するものとなる。
//今回の場合は8と9を切り抜いたところに入れている。

//配列の結合はconcatと引数に結合した配列を入れることで結合される。
const arry2 = arry.concat([6,7,8]);
console.log(arry2);
//ES6からはスプレッド演算子を用いて結合できる。
const arry3 = [0, ...arry, 6,7,8] //配列に3点ドットに結合したい配列の変数を入れると結合することができる。
//スプレッド演算子の場合は、自由度が高く前方と後方に配列を入れることができる。　
console.log(arry3);
//スプレッド演算子の方が使用しやすい。
//これが配列の基本操作。