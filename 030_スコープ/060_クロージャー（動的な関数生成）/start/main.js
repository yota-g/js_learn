function addNumberFactory (num) {
  function addNumber (value) {
    return num + value;
  }
  return addNumber;
}

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);
//const add5に引数を入れることでnum = 5となり、それが関数のnumに全て代入される。その後returnでaddNumberが返ってきて、add5()に引数を渡すとaddNumberに引数を渡すことになって結果がでてくる。
//add5はvalueを引数に取ることになる。
const add10 = addNumberFactory(10);
const result2 = add10(10);
console.log( result2);
//関数を生成するFactoryに渡す数字によって値が変わるので動的な関数の生成という。
///変数add5,add10でブレイクするとそれぞれnumに代入した値が入ったものがaddの変数に何が入れられるかを表示してくれる。
//resultの方をブレイクポイントにするとvalueに何が代入されているかを確認することができる。　

// 2回宣言するけど、宣言したものを保持したままもう一つが宣言されることになるのでそれぞれの実行時に異なるものを持たせていると異なるものを保持しているので異なる結果を表示することができる。存在するのは設定した変数の中でのみでしか表示されない。異なる関数の場合は結果が異なる。

