/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというジェネレーター関数を作成しましょう。
 * 
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 * 
 * 以下のように実行した場合には
 * const it = genStep({min: 4, max: 10, step: 2});
 * 
 * for(let value of it) {
 *   console.log(value); -> 4, 6, 8, 10
 * }
 * 
 * の値が順番にコンソールに表示されます。
 */
//オブジェクトで引数を宣言するときに実行するときにオブジェクトリテラルで必要なもののみを渡せばいい。分割代入できる。

function* genStep( {min = 0, max = 20 , step = 1} = {} ){
  for (let i = min ; i <=  max;  i += step) {
    yield i;
  }
  // return; //returnに値がない時は記載しなくてもおけ。
}
//使用するgenStepの関数の引数自体がない時はオブジェクト自体が渡って来なくなるのでエラーが出る。
//エラーを解消するにはデフォルトのオブジェクトリテラルに空の{}を設定しておくと良い。
const it = genStep({min: 4, max: 10, step: 2});
for(let value of it) {
  console.log(value); 
}