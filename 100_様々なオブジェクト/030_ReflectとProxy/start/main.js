//reflectとproxyでは、get ,set, deleteProperty, construct を内部メソッドから引用しているので、対になって同じようなメソッドを用意することができるのでreflectとproxyは同じようなメソッドを格納していることになる。２つを活用することで便利な記法を書くことができる。

// const targetObj = { a: 0 };
const targetObj = { a: 0,
  c: 0,
get value (){
  console.log(this);
  // return this.a;
  return this.b; //こうするとundefinedとvalueを取得した時に表示される。
  //これはget経由だとtargetObjに対して、bを呼んでいるのと同じことになる。
  //targetObj.bとpxy.valueが同じ意味になる。なのでundefinedとなる。
  //value内でthisを呼んでみるとProxyではなく、ただのオブジェクトになっている。この場合は、Proxy経由で呼び出しを行っているのでpxy.value戻り値がオブジェクトに格納されていないものの場合、-1を返したい。
  //どのように実現するか。Reflect.getの第三引数にreceiverに変えてあげることで実現可能。
  //receiverにはProxyオブジェクトが格納されているので、Proxy経由で値を取得することができる。
}
}; //getterでtargetObjを取りに行った場合を考える。
//getを呼ぶとaの値を返却するように設定できる

// const handler = {
//   get: function(target, prop, receiver) {
//     console.log(`[get]: ${prop}`);
//     if(target.hasOwnProperty(prop)) {
//       return target[prop];
//     } else {
//       return -1;
//     }
//   }
// }
// const pxy = new Proxy(targetObj, handler);
// console.log(pxy.b);

//Reflectで書き換えるとどうなるか。
const handler = {
  get: function(target, prop, receiver) {
    // console.log(receiver); // Proxyが取得できていることが確認できる。
    console.log(`[get]: ${prop}`);
    if(target.hasOwnProperty(prop)) {
      return Reflect.get(target, prop, receiver);//getでvalueが呼ばれた時の値をreveiverに束縛する。そうすると取得されるのはtargetObjのオブジェクトからProxyのオブジェクトになる。Proxyのオブジェクトに対してbの値を取得しにいくと、再びgetのトラップが呼ばれるので次に呼ばれた際にpropの値に格納されるのがpropのbとなり、falseとなって-1が返ってくる。　
      //receiverにすることでvalueのthis.bはpxy.bを呼び出しているのと同じことになる。そうすることで再度Proxyのgetが実行される。
    } else {
      return -1;
    }
  }
}
const pxy = new Proxy(targetObj, handler);
console.log(pxy.a); //target[prop] をFeflect.getに変更しても同じ結果を取得することができる。
console.log(pxy.value); //propにvalueが渡って、返却する値がaになる。b にするとpropの部分にvalueが渡るのでそのままだとオブジェクトが設定されていない場合はundefinedと表示されてしまう。
console.log(pxy.b);