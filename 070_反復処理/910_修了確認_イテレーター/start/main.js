/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというイテレーターを生成する関数を作成しましょう。
 *
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 *
 * 以下のように実行した場合には
 * const it = genStep(4, 10, 2);
 * let a = it.next();
 *
 * while(!a.done) {
 *  console.log(a.value); -> 4, 6, 8, 10
 *  a = it.next();
 * }
 *
 * の値が順番にコンソールに表示されます。
 */
//無限ループを防ぐためにmaxに上限をつけておく
function genStep(min = 0, max = 20, step = 1) {
  let i = min - step;
  //こうすることでminも表示できる。
  return {
    next: function () {
      i = i + step; //こうすることでnextメソッドを呼び出すたびにiにstepを足すことができる。
      //i += stepでも可能
      if (i > max) {
        return { done: true };
      } else {
        return {
          done: false,
          value: i
        };
      }
    },
  };
}
const it = genStep(4, 10, 2);
let a = it.next();

while(!a.done) {
  console.log(a.value);
  a = it.next();
}
