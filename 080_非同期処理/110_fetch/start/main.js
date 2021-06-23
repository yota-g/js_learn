// jsonはjsの配列オブジェクトに似ている。
//違いは、jsonの中ではシングルクォートで囲むことができない。
//必ずダブルクォートを使う。
//オブジェクトを定義するときはプロパティをダブルクォートで囲まないといけない。
//格納されている要素の最後にカンマをつけていてはダメ。エラーになるので気をつける。
//それ以外はJSと同じようにデータを扱える。
//サーバーが一般的にこのようにブラウザに返す。サーバー上のものを使用しないのでJSのfetchで取得する。　
// //グローバルオブジェクトの場合のfetchはwindowを省略可能。
// console.log(fetch ('users.json'));
// //()内にリクエスト先のurlを記載する。
// //こうすることで今回は同じ階層なのでjsonファイルを取得できる。
// //promiseが返ってきているのがわかる。fetch にthenを使用できることがわかる。
// fetch('users.json').then(function(response){
//   // console.log(response);
//   return response.json();
// }).then( function(json){
//   console.log(json);
//   //jsonファイルのオブジェクトがjsの配列の中にオブジェクトとして変換されたものが渡ってくることがわかる。
//   for (const user of json ){
//     console.log(`i'm ${user.name}, ${user.age} years old`);
//   } //このデータを用いて何らかの加工を加えてあげるということをする。
// });
//responseはサーバーから返ってきたデータを保持している。　okがtrueになっているとサーバーからのデータ取得ができたことがわかる。　
//statusのサーバーの状態を表示している。
//protoにはいろんなメソッドが確認できる。取得したデータによって使いわかる
//返ってきたデータ形式がjsonなのでjsonのメソッドを使ってjsonのデータを取得できる。
//これを取得して加工して使用するというように使用する。

//fetchがpromiseのオブジェクトを返すのと、responseはjsonのオブジェクトが格納されているresoponseオブジェクトであり、呼び出すにはjsonメソッドを呼び出す。またjsonメソッドはpromiseを返す。thenの戻り値として、thenは１つ前のthenの処理を待つ。
// console.logでどのようなオブジェクトが返ってきているのかを見ることで使いわけることができる。

//asyncで描き直す。
async function fetchUsers(){
  const response = await window.fetch('users.json');
  const json  = await (response.json());
  for ( const user of json ){
    console.log(`I'm ${user.name}, ${user.age}`);
  }
}

fetchUsers();
//ブラウザが用意している物でもpromiseを返すことがあるのでどのようなものが帰っているのかconsole .logで確認する。