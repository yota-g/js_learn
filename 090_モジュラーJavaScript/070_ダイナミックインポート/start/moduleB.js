//ダイナミックインポートについて、新しいので対応しているかを確認する必要がある。　
//moduleAをインポートしたいとすると、exportと記載されているものを非同期でimportできる。
// import { publicVal, publicFn} from './moduleA.js'
;//これだと同期的に実行されるのでJSは上から一行ずつ実行していくことになる。
// publicFn();
// ダイナミックインポートに変えるとどうなるか。
// import('./moduleA.js').then(function (modules) {
//   console.log(modules);
//   modules.publicFn();
  //こうすることで呼び出すことができる。
// })
//インポートの関数を実行することとなり、ダイナミックインポートということになる。そこの引数にファイル名を渡して、戻り値はpromiseなので、
//modulesを表示するとAでエクスポートしたものがオブジェクトとなって渡ってくる。
//画面の表示時に必要ないものは、ダイナミックインポートで必要になった時に呼び出して、非同期で処理することができる。
//ブラウザの対応のチェックかウェブパックやバベルといったソフトウェアの組み合わせで対応していないブラウザで使用できるようにはできる。
//インポートの関数が実行された時に戻ってくるのはpromiseのオブジェクトなのでasyncとawaitに変更できる。

async function fn() {
  const modules = await import('./moduleA.js');
  console.log(modules);
  modules.publicFn();
}
fn();