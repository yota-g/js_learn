//and条件とor条件
// &&　and条件
//　||　or条件
const a = 1;
const b = 1;
const d = 3;
console.log(a && b && d); //aとbがtruesyなのでdの結果をconsoleで表示する。3が表示される。
//1が返ってくる。 truthyな値。　console.log( a && b)の場合。
const c = 0;
console.log(a && c);　
//aがまずtrueかを確認してここがfalsy ならaの値を条件式の結果として表示、aがtureならbの値をこの条件式の結果として表示させる。 今回はcがfalsyなので0と表示されている。
console.log( a && c && d);//とするとcがfalsyなので、falsyの値である0が表示される。dは確認されない。
console.log(a || c); //1
console.log( c || a); //1
// and条件で0、or条件で1が返ってくる。　

//and条件はtruthyかfalsyかを確認して、falsyがあった場合には、それを返して、なかった場合は、一番最後の値をand条件の結果として返す。

console.log( a || b ); //1 a
console.log( d || a); //3 d
//or条件に関して、aがtruthyかどうかを確認して、falsyならbを取りに行って、aがtrutyならbを取りに行かずに、aの値がor条件の結果として返ってくる。
//trutyの値が見つからなかった場合は、最後の値が結果として表示される。
console.log( c || b || d);  //1 bが返ってくる。 b

//and条件とor条件一緒にしようしたい場合は、グループ化をしないといけない。
console.log( c || b && d);  
//3が返ってくる。左から順に実行されていく。
//実行されている順番が分かりづらいので変数を()で囲む
console.log( (a || b)  && c);//とすることでグループ単位で計算するというように設定できる。
const e = 0;
console.log( ( b || c ) && ( d || e)); //グループ毎に演算をしてから&条件で結果を表示するということがわかる。グループ条件化をしてから条件で判断するようにすること。

