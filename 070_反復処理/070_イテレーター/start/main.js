//イテレーター
//反復操作を行う際に使用するオブジェクト
//記述には決められたルールに沿ってしないといけない。
//イテレータは
// function genIterator() {
//   return {
//     next: function () {
//       return {
//         done: true / false;
//         value: 値
//       }
//     }
//   }
// }
//少し深い階層になる
//まずgenIteratorで返却されている部分をiteratorと呼ぶ。
//イテレーターにはnextメソッドを必ず保持する必要があって、このnextメソッドはreturn値としてオブジェクトを返却する。　
//そのオブジェクトにはdoneというループを継続するかどうかのものをtrue/falseで渡す値と
//valueループ時渡ってくる際に渡ってくる値を格納するプロパティがある。　
//このようにイテレータを作成する時はnextメソッドをまず作成、そのnextメソッドはオブジェクトを返却し、そのオブジェクトはdoneとvalueになる。
//コードで記載する。
//この引数はループの上限値を設定するもの。　
function genIterator(max = 10){
  let i = 0;
  //このreturnで返すのがイテレーター
  return {
    next : function () {
      if ( i >= max) {
        return { done: true}
        //doneがtrueの場合は、valueを設定する必要はない。ループが終了するから
      } else {
        return {
          done: false,
          value: i++ 
        }
      }
    }
  }
}

const it = genIterator(10);
//これでitにイテレータが格納されたことになる。　
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
//こうすることで呼ぶ出す度にインクリメントしていくような関数であることがわかる。
// これで上限値をmaxとして設定できるようにイテレーターを変更していく。　
//maxを10にするとそれを条件とする条件分岐を作成する。
let a = it.next();
while(!a.done){
  console.log(a.value);
  a = it.next();
  //次のitの値になってその値がfalseなら継続するようになる。
} //doneの値がfalseの場合限ってnot演算子によってtrueになるのでループが継続。
//無限ループに入った場合は、タブを閉じて開き直すといい。
//こうするとループさせることができる。
// genIteratorというイテレーターを返す関数をシンボルのイテレーターに追加すると反復可能オブジェクトとなる。
const obj = {
  [Symbol.iterator] : genIterator.bind(null,10)//この状態のiteratorは上限値を与えてないものになる。これに対してforを当てると無限ループとなるので上限値のデフォルトを決めておくことが大切。
  //上限値を変更したい時はthisのところで学習したbindを使用する。　genIterator.bind(null, 100) //第一引数はthisの参照先のオブジェクトの指定なので今回は、指定しない。そして第二引数にiteratorに渡したい引数を渡す。
} 
for (const i of obj ){
  console.log(i);
}
//0から9までが出力される。
//setのインスタンス化をするときに初期値でイテレーターを入れるとインスタンスに対して初期値の設定を行うことができる　
const s = new Set(obj);
console.log(s);
//Setのオブジェクトに初期値の設定ができる。同じことはマップでもできるが初期値にイテレータを渡すとそれで初期設定できることを理解しておく。
