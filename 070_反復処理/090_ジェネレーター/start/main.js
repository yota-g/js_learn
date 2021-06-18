//ジェネレーターについて
//イテレーターと生成するための特殊な関数。
//より簡略化して記述可能
//genIteratorより短くになる。
//functionの後ろに*を書くことでジェネレーター関数であることを示し、yieldを使用することでiteratorのオブジェクトを簡易的に表示している。
//return next....の部分を表現している。
//yield:値とは、iteratorのメソッドでdone: false, value: 値を表している。コードがかなり簡略化されている。
//ジェネレータ関数でのreturn 値はdone: tureでvalueが値であることを意味している。
//ループを終了させたい時はreturnを返す。　

// function* gen() {
//   yield 1;
//   yield 2;
//   return 3;
// }

//このような関数を作成した場合はgenを作成して使用する。
// const it = gen(); //このようにジェネレーター関数を使用することでイテレーターを返す。
//iteratorのnextを呼び出すことで同様の挙動をとるイテレーターを作成することができる。
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
//yield1 ,2, return 3の順で表示される。

//geniteratorがどんなんだったかを確認する。
// function genIterator(max = 10) {
//   let i = 0;
//   return {//ここからしたがiteratorの部分 nextを読んだときにオブジェクトを返して、ループが続く時はdoneがfalseで終了する時にはdoneがtrue。
//     next: function() {
//       if( i > max) {
//         return {done: true} 
//       }else {
//           return {
//             done: false,
//             value: i ++
//         }
//       }
//     }
//   }
// }
//これを使用する時には、
// const it = genIterator();
//イテレーターオブジェクトを取得し、実行するとgenで行ったのと同じものが表示される。
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//geniteratorをジェネレーターで表す
function* genIterator (max = 10) {
  let i  = 0;
  while (i < max){
    yield i++;
  }//maxになるまではyieldで値を返却して上限になった時にwhileのループを抜け出してreturnにいく
  return ; //returnに値を設定すると呼び出し元に値が返却されることになる。　必要ないので今回はreturn
  //return省略しても大丈夫。iterator自体が終了すればジェネレーター自体も終了することになる。　
  //その場合はdoneがtrueで値がundefinedのものが最後に渡ってくる。returnの値がない時もvalueにはundefinedが帰ってくる
}
const it = genIterator(10);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
let a = it.next();
while(!a.done){
  console.log(a.value);
  a = it.next();
}

// このジェネレーターをオブジェクトのシンボルイテレーターに追加するとオブジェクトを反復可能オブジェクトにできる。
const obj = {
  [Symbol.iterator] : genIterator　//ここに直接ジェネレータを記載することができる。
  //ジェネレータを入れる際は関数名を入れる必要はない。function*()省略すると*[Symbol.iterator](max-=10)とすることができる。
}
//ジェネレータの時は上記のようにオブジェクトを作成するのではなく、 ofの後ろにgenIterator()を入れると同じ動作になる。　そうして反復処理ができる。　genIterator自体が反復オブジェクトが使用できる。このように実行することで反復ができるようになる。　
for( const i of genIterator()  ){
  console.log(i);
}
// for (const i of obj) {
//   console.log(i);
// }
//反復可能オブジェクトが生成できる