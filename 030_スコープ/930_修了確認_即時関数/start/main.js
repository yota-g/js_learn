/**
 * 問題：
 * クロージャーの問題で作成した以下のcalcFactoryを即時関数
 * で書き直してみてください。
 */
let calc = ( function (val) {
    return {
        plus: function(target) {
            const newVal = val + target;
            console.log(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function(target) {
            const newVal = val - target;
            console.log(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function(target) {
            const newVal = val * target;
            console.log(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function(target) {
            const newVal = val / target;
            console.log(`${val} / ${target} = ${newVal}`);
            val = newVal;
        }
    }
}) (10);
//即時だから実引数には値を入れておくこと。
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);