function a(name, name1) {
    console.log('hello  ' + name +" " + name1);
}

const b = a.bind(null, 'Tim');
// b();

a.call(null, 'tim', 'taro');
// a.apply(null , 'tim')
//callとapplyの違い bindとcallは即実行される点以外はbindと同じ。　
//callの場合の第二引数以下は関数の引数を定義することができる。
//applyの場合は、第二引数に文字列を渡すとエラーになる。渡すのは配列になる。　
a.apply(null, ['tim','rebecca'])
//配列か文字列を渡すかの違いがある。　applyは配列のそれぞれの要素として引数を渡すことになる。　
//配列で格納されているときはapplyを使用して、それぞれの引数が独立しているときはcallを使用する。
//dataでは配列をよく使うのでapplyがよく使われていた。　

//call, aplyとthisについて。bindと似ているが違う。
//bindを使用した時点でthisや引数の参照先を変更するだけで、使用時点では実行しない。
//新しい関数を作るだけ。
//call, applyはthisや引数の参照先を変更。同時に関数を実行する。
//methodを呼んだ時点で実行される。　その点がbindと異なる。
function c () {
    console.log('hello' + this.name );
}
const tom =  {name : 'Tom'};
const d = c.bind(tom); //新しい関数が生成されるだけでd();をしないと実行されない。　
d();
c.apply(tom); //記入するだけですぐに実行される  関数が実行まで行われる。
c.call(tom);

//applyの実戦での使用方法
const arry = [1,2,3,4,5];

console.log(Math.max(1,2));
//配列を入れるのはめんどくさいのでapplyを使用して実行先の関数に入れるということができる。
//applyを適用することで配列が展開されるので、
const result = Math.max.apply(null , arry)
console.log(result);
//第一引数のthisは必要ないのでnullを設定して第二引数に配列を入れることで 配列の大きな値を取得することができる。
//このような使用方法がある。 でも個の使用方法はES6ではしない。
//ES6ではspred演算子が導入されたことにより、applyを上記のように使用する機会が減った。　
const result2 = Math.max(...arry); 
//ドットを配列の前に3つつけることで配列を展開してmaxの引数として１つずつ渡していくという操作に変わる。
//基本的にはこっちを使用する。
console.log(result2);


