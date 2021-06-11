//instanceof  どのコンストラクターから生成されたオブジェクトかを確認する。
//コンストラクターから作られたインスタンスを確認する。

function F(a, b) {
    this.a = a;
    this.b = b;
    // const result = new Object(); //Objectのコンストラクターからインスタンス化を行いresultに対して、aというプロパティを追加してあげる。　
    // result.a = 1;//という感じになる。
    // return result //関数Fの結果としては、Objectのコンストラクターから生成されたインスタンスが返ってきていることになるので、instanceのprotoが参照しているのがObjectのprototypeになる。
    // return {a: 1};
    //returnがプリミティブの場合はinstance of F がtrueになる。
}

F.prototype.c = function() {}
//これはコンストラター関数とわかる。this.とprototypeから

const instance = new F(1,2);
console.log(instance);
console.log(instance instanceof F );
//instanceがどのコンストラクター関数から作られたのかを確認する
// instanceof Fと入力するとtrueが返ってくる。
//Fの戻り値にオブジェクトを生成してオブジェクトを生成するとどうなるか。
//そうするとinstanceof Fがfalseになる。
//instanceはFから作成されたものじゃなくなる。
console.log(instance.__proto__ == F.prototype);
//instanceofは上記のようなことを行っている。
//returnの中にオブジェクトをかくとreturnで返されているオブジェクトリテラルの部分がinstanceの変数となってしまうのでそれはあくまでオブジェクトのコンストラクターから作成されたinstanceになってしまう。
//オブジェクトリテラルを省略せずに書くと、
console.log(instance.__proto__ === Object.prototype);

//instanceofを使用した場合には、プロトタイプチェーンというのも遡って検証を行うので、オブジェクトのインスタンスであるかを確認するとtrueになる。
console.log( instance instanceof Object)
//instanceは結局Objectのプロトタイプを継承しているのでtureになる。
//instanceof でコンストラクターをさらけ出せるようになった。
function fn(arg) {
    //argにはオブジェクトまたは配列を入れる。
    // arg['key'] = value; //オブジェクトが渡ってきたらこれで追加するが
    // arg.push('value'); //配列が渡ってきたらpushで値を入れることになる。
    //配列とオブジェクトでは値の挿入の仕方が変わるのでinstanceofで作成元のコンストラクターを探してあげることで条件分岐をすることができる。
    if(arg instanceof Array) {
        arg.push('value');
    } else {
        arg['key'] = 'value';
    }
    console.log(arg);
}
//このようにすると配列とオブジェクトで条件分岐ができる。
fn({}); //オブジェクトが渡るとオブジェクトが設定され
fn([]); //配列が渡ると配列が設定される。

//コンストラクターによってもっているメソッドが変わってくるので、条件分岐にinstanceofをよく使う。
//コードの再利用性をよく使うオブジェクト型プログラミングでは、関数を定義して、その中でインスタンスの種類によって処理を変えるという手法をよくとる。

