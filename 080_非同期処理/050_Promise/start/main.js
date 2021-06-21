//Promiseに関して、
//非同期処理をより簡単に、可読性が上がるように描けるようにしたもの。
//コールバック関数の可読性が低くなるため、できたもの。

//promiseの書き方。
//new Promiseでプロミスをインスタンス化して、そしてそのPromiseをthen,catch,finallyメソッドを使って制御を加えてあげる。
// new Promise(function(resolve, reject){//Promiseの引数として、コールバック関数を記載する。　resolveとrejectの2つの引数を持っている。
  // resolve('hello'); //resolveが呼ばれた場合は、thenメソッドの中のcallback関数が実行される。//thenの中のコールバック関数ではresolveに渡した引数が渡されることとなる。
//   reject('bye'); 
// }).then(function(data) {
//   console.log(data); //-> "hello" resolveに渡された引数が表示される。//thenメソッドが完了すると次にあるcatchメソッドがスキップされてfinallyメソッドが実行される。
// }
// ).catch(function(data){
//   console.log(data); //-> byeとなる。
// }
// ).finally(function() {
//   console.log('終了処理');
// }//finallyでは終了処理を記載していく
// );
//rejectはPromiseのコールバック関数で何らかのエラーが発生した時にそれをPromiseに通知する関数となる。
//rejectが呼ばれた時はcatchメソッドのコールバック関数が呼ばれる。
//rejectで渡した引数が渡ってくる事になる。catchメソッドのコールバック関数が実行された後にfinallyメソッドに渡したコールバック関数が実行される。finallyに渡したコールバック関数は必ず実行される。
// finallyのコールバック関数には共通の処理を記載する事になる。
//finallyメソッドで使用するコールバック関数は引数を取れない。
//.thenはresolveを待つ、catchはrejectをまつ。そして、finallyはthen,catchをまつ。
//then,catch, finallyは全て非同期で実施される。　

new Promise(function(resolve, reject){
  console.log('promise');
  // resolve('hello'); // こうするとthenが呼び出される。 thenより先にglobal.endが先に実行されている。 非同期なのでコールスタックが空になってから実行される。
  // reject("bye"); //rejectはnew Promiseのコールバック内でしか使用できない。
  //特定のthenの中でcatchの処理を実行したい場合は、throwを使用する。
  setTimeout(function(){
    resolve("hello")
  },1000);//1秒後に thenやcatchを実行することができるように設定できる。
}).then(function(data) {
  console.log('then '+ data); //resolveが呼ばれていないと表示されない。
  return data ;  //次のthenに引数を渡したい時は、returnで引数を返してあげないといけない。
}).then(function(data) {
  console.log('then' + data); //thenメソッドをつなげると順番に処理される。thenをいくら繋げても多階層にはならない
  // throw new Error(); //ここのthenで何らかのエラーが出た時というのを伝えるとcatchに処理が移行する。
  //それ以降のthenは呼ばれない。
  // return data;
}).then(function(data) {
  console.log('then');//多階層にならないのでコールバックを呼び出すメソッドとして適している。
  // return data;
}).catch(function(data) {
  console.log('catch:'+ data); //rejectを受け取ると表示される。 //rejectに渡した引数が表示される。
}).finally(function() {
  console.log('finally'); //thenの後、catchの後、throwからcatchに処理が渡された後に表示される。
}) //finallyには引数を渡しても表示されないので、渡せないことが確認できる。
console.log('global end');
//このglobal endを記載しておくことでthen,catch,finallyが非同期で処理されていることがわかる。
//thenに引数を渡せる。 finallyは引数を受け取れない。 thenに引数を渡すにはresolveに引数を渡してあげる必要がある。　
//resolveやrejectを呼び出さないと実行されないので、Promiseにコールバック関数を埋め込むことができる。