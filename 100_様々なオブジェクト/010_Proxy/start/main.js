//知っておくと便利なオブジェクトを確認する。
//Proxyについて確認する・・・プロパティーの操作に独自の処理を追加するためのオブジェクト
//使用方法・・使用するにはインスタンスを作る必要がある。new..引数１にターゲットとなるオブジェクトを格納し、引数２にhandlerというオブジェクトを操作する際に実行されるメソッドが格納されているオブジェクトを渡す。
//これで作成されるのがプロキシのオブジェクト

const targetObj = { a: 0 };
//このオブジェクトの値の変更を許可しない場合は、setが呼ばれた時にerrorが発生するようにするといい。
//そうすると変更しようとするとエラーが発生するようになる。削除させたくない時はdeletePropertyにerrorを設定してあげることで削除を防げる。

const handler = {
  set: function(target, prop , value ,receiver) {
    //トラップと呼ばれている。get,deleteプロパティのメソッドが他にも登録できる。
    //オブジェクトのプロパティに動きがあった時に動くメソッドなのでトラップ
    //引数が４つ渡ってくる。targetはProxyの第一引数で渡したオブジェクト。第二は、propプロパティにアクセスされた際のプロパティの名前が渡ってくる。第３は新しい値が渡ってくるのでそれがくる。第四はreciever後ほど説明。
    console.log(`[set]: ${prop}: ${value}`);
    target[prop] = value;
    // throw new Error('cannot add prop.')
  },//getが値の取得の検知 getは値の取得なのでvalueは更新されないので削除
  get: function(target, prop , receiver){
  // console.log(`[get]: ${prop}`);
  console.log(receiver); //Proxyのオブジェクトが取れてくる。使用方法は後ほど確認。
    //default値を渡したい時はifを使って見つからなかった時の値を設定する用意にする。
    if(target.hasOwnProperty(prop) ){
      return target[prop];
    }else{
      return '-1';
    }
  }, //値の削除の検知ができる。receiverは渡ってこない。　
  deleteProperty: function(target, prop){
    console.log(`[delete]: ${prop}`);
    delete target[prop]; //値を削除
  }
}

const pxy = new Proxy(targetObj, handler);
pxy.a = 1; //valueとしてhandlerに代入される。
//setが値の変更を取得することがわかる。 propはtargetObjのプロパティを取得している。　
console.log(targetObj);
//handler内で値を変更してあげることでtargetObj自体のオブジェクトの値を変更することができる。　
//値の変更を確認して独自の処理を追加することができる。　
pxy.a;

// delete pxy.a;
console.log(targetObj); //aのプロパティが削除される。
//Proxyを使右ことで独自の操作ができる。
// pxy.b
console.log(pxy.b);
//-1が設定される。
//receiverはproxyの中で使用されるとnewインスタンスで作成したproxyのオブジェクトpxyがreceiverとして渡ってくる。
