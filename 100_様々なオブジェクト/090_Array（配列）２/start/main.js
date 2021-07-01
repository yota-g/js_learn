//part2・・・よくある操作。一つずつの要素に対して何らかの操作をしたいというのがある。
//forEachを使用する
const arry = [1, 2, 3, 4, 5];
arry.forEach(function(v, i, arry ) {
  console.log(v);
  // console.log(i);
  // console.log(arry);
}); //callバック関数で一つずつの要素に対して、操作を行うことができる。
//今回の引数のfunctionの引数vはarryの配列から１つずつ渡される要素が渡される。第二引数には、インデックスが渡ってくるのでiを渡しておく。第三引数には配列自体が渡ってくるのでarryと今回はする。
//配列の各要素には何らかの処理をすることが多いので配列のオブジェクトにはforEachが格納されている。

//配列のを元に新しい配列にしたい場合は,Mapを使用する。
const newArry = arry.map(function(v) {//(v, i ,arry)出なくてもいい。
  console.log(v);
  return v* 2; //returnに配列の引数である第三引数を渡すと配列の各要素に対して配列が格納されたものが返ってくる。
});
//mapのコールバック関数はforEachを使った場合と同じなので、配列がループされてvとして渡ってくる。
//newArryに値を格納したい場合は、returnに続けて値を記述するとその値がnewArryの要素として登録される。
//第２第３引数は使用しなければ使用しなくてもいい。
console.log(newArry);
//newArryはarryとは別の配列となる。

//filterについて確認。フィルターを使っても新しい配列ができるので新しい変数を定義する。
const filterArry = arry.filter(function(v,i ,arry){
  return i >= 1;
});
//同じようなコールバックを入れる。フィルターの場合の操作はreturnに続く値がtrueなら新しい配列に格納される。
// return i ====1
// こうすると2の値だけが格納されることになる。
//return i >= 1とすると１以上のインデックスに含まれた要素が新しい配列に格納される。
console.log(filterArry);
//メソッドがプロトタイプに含まれていないと使用できないので注意が必要。