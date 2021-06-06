//and条件とor条件の応用編　
function  hello (name) { 
  // if (!name) {
  //   name = 'Tom'; //初期値をTomにしている。
  // }
  name = name ||  'Tom'; //こうすることでnameがtruthyの場合は、nameが表示され、falseの場合は、Tomが表示されるようになる。
  // if文よりも簡略的な書き方になる。
  console.log( 'hello' + name ) ;
}

hello( 'Bob' );
hello();//何も引数に渡さなかった場合は、undefinedと表示されてしまうので、不恰好になってしまう。
//if文を使って値がなかった場合に初期値を代入してあげる。
//そうすることで値がなかった場合に初期値が表示されるようになる。
//ES6からは引数にデフォルト引数を与えることができるので、条件分岐がいらないものも作れる
//function hello (name = 'Tom')とすることで初期値を設定することもできる。
//or条件の注意点。nameの値がfalseなら初期値が変えるが、数字を設定する場合は注意が必要
hello(0);//0はfalsyな値なので、今回だとTomが使用されてしまう。　そのためfalsyの値で値をしようしたい場合は気をつけること。

let name = 'Bob';
//nameがtruthyの場合のみhello()を呼ぶとする。
if ( name ) {
  hello(name);
}
//簡略化すると
name && hello(name);
//nameがtruthyの場合のみhelloが実行できる。
//andの特性をしようして2つ目の関数を使用するということもできる。

