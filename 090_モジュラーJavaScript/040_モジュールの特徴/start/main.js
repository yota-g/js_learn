//モジュールの特徴で気をつけるべき点
//h1のModule Lectureを取得するには、
// const h1 = document.querySelector('h1');
// const text = h1.textContent; //とすることで文字列が取得できる。
// console.log(text); //文字列が取得できていることを確認できる。
//htmlでmain.jsの読み込みをh1より上に持ってくるとtextContentが取得することができない。
//ブラウザは上から基本的に処理していくので、bodyの解析に入った時には、その際にscriptがあればそのscriptの解析が終わった後にその下のコードの解析に入っていくから。
//h1より上にmain.jsを定義しているとh1が存在していない状態でmain.js実行されるのでエラーとなる。
//scriptが見つかった時点で実行されるのを同期的は処理と呼ぶ。
//非同期にする場合は、deferを最初のscriptのタグの中に記載する。
//<script src="main.js" defer>のように記載すると取得可能になる。　htmlの構文解析が終わった後でscriptが実行されるようになる。
//deferに関してはhtmlのコードが読み込まれているのでtextContextを取得することができる。

console.log('main.js');