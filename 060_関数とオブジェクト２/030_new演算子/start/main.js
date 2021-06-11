//new演算子　コンストラクター関数からインスタンスを作成するために使用する演算子。
//コンストラクターないの記述で少し動きが変わる。
//コンストラクター関数の戻り値がオブジェクトの場合
//return {...}となっている時は、　 returnのオブジェクトを新しいインスタンスオブジェクトに{...}で返す。
//コンストラクター関数の戻り値がオブジェクト以外の場合、戻り値が定義されていない場合、
//この場合はコンストラクターのprototypeのプロパティを__proto__にコピーをして、そしてそのコンストラクターprototype内のthisを返すことになる。

function F(a,b ) {
  this.a = a ;
  this.b = b;
  return {};
}

//returnがオブジェクトだった場合、
const  instance = new F(1,2);
console.log(instance);
//こうすると{}と値が返ってくる。
//returnの値がプリミティブだった場合は、　例えば return 1 
//F { a: 1, b: 2}と返ってくる。引数をもったオブジェクトが生成される。
//オブジェクト以外の挙動はそのような反応になる。
//returnの定義がされていない場合でもそのようになる。

function F1 ( c, d ) {
  this.c = c;
  this.d = d;
  // return {} //returnがある場合はeというprototypeが存在しないことになる。{}と__proto__と表示されるがprotoの中身が変わる。
  // return {}
}

F1.prototype.e = function() {}

const instance2 = new  F1(2,3);
//{ c: 2, d:3} と__proto__:object   returnがついていない場合はこのような表示になる。
console.log(instance2);


//new演算子と同じ動きをする関数を作る。
//new演算子を呼び出すところから作る。

function newOpe ( F, ...args){
  // console.log(args); //引数を表示する。
    //この状態だと配列に値が入っていない。
  //thisが呼び出し元のインスタンスとなる場合を考える。
  //thisのオブジェクトをprototypeの参照を保持した状態で生成する方法。
  const _this = Object.create(F.prototype);
  console.log(_this); 
  //prototypeが__proto__ のオブジェクトに格納された状態のオブジェクトとなる。
  //Object.createはF1.prototypeを__proto__にコピーして、さらにからのオブジェクトを_thisに作成するメソッド。
  //このからのオブジェクトである_thisをFが実行される時のthisにしてあげることでこのFを実行することでF1の値がからのオブジェクトに設定される。 returnがない場合は、.applyしても結果がundefinedとなる。
  const result = F.apply(_this, args); //第一引数は_thisを第二引数以下はF を実行する時の配列を渡す。
  //このようにするとFを実行するとF1で使用されているthisは第一引数の_this、関数F1に渡ってくる引数はargsの配列で渡すことができる。
  // console.log(result, _this); 　//resultがundefinedになるのはF1のreturnがないからundefined
  //resultはundefineとなり、＿thisにはオブジェクトのプロパティcとdが渡ってきている。
  //_thisの値が変わっているのは、関数の引数にオブジェクトを渡した場合は、そのオブジェクトの参照が渡るので、F1関数に変更が実引数で渡したオブジェクトには変更が渡ってくるので値が変わる。
  if (typeof result === "object" && result !== null){
    return result; //{}のからのオブジェクトが生成されるようになる。
  }
  //typeofはnullでもobjectを返すので注意する。 JSでのできた時の仕様。null以外というのを指定しないといけない。
  return _this
  //戻り値に配列の数値が返ってきて、__proto__にeの関数が返ってきている。
  //これが関数の返り値がオブジェクトじゃない時の挙動。
  //returnの値がオブジェクトだった場合の挙動を考える。
}

//第一引数はコンストラクターが渡ってくるので引数を設定して、その次からは、コンストラクター関数の引数によって変わるのでレストパラメータである...を使って可変調の配列にすることができる。
//argsに配列で渡ってきたものを次々に入れることができる。

const insta = newOpe (F1 , 1, 2);
//第一引数にコンストラクター関数をもってきて、その次の引数からどんどんとってくるようにする。
console.log(insta);
