/**
 * 問題：
 * 四則演算を行うメソッドを持ったオブジェクトを
 * クロージャーを用いて作成してみてください。
 * 
 * 四則演算を行うメソッド（plus, minus, multiply, divide）
 * を実行すると以下のようにコンソールに出力されます。
 * 
 * const calc = calcFactory(10); // 初期値を10として設定
 * calc.plus(5);      // 出力結果 "10 + 5 = 15"
 * calc.minus(3);     // 出力結果 "15 - 3 = 12"
 * calc.multiply(3);  // 出力結果 "12 x 3 = 36"
 * calc.divide(2);    // 出力結果 "36 / 2 = 18"
 * 
 * ※前に行った計算結果をもとに四則演算を行います。
 * ※四則演算は"+","-","*","/"を数値ではさんで計算を行います。
 */

function calcFactory (val) {
  return {
    puls : function puls (target ) {
      const newVal = target + val ;
      console.log(val + "+" + target + "="  + newVal );
      console.log(`${val}+${target}=${newVal}`); //見やすくなるテンプレート構文
      val = newVal
    },
    minus : function minus (target) {
      const newVal = val -  target;
      console.log( val + "-" + target + "="  + newVal );
      val = newVal;
    },
    multiply : function multiply (target) {
      const newVal = val * target;
      console.log(val + "*" +  target + "=" + newVal);
      val = newVal;
    },
    divide: function divide (target) {
      newVal = val / target ;
      console.log(val + "/" + target + "=" + newVal);
    }
  }
}
const calc = calcFactory(10);
calc.puls(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);