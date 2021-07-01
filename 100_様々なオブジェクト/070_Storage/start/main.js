//Storage・・ブラウザの保存領域にデータを格納するためのオブジェクト
//このstorageとういコンストラクターから生成されたlocalStorageというオブジェクトを操作することでブラウザの特定の保存領域に対してデータを保存することができる。
localStorage.setItem('key', 'value');
//これでブラウザの保存領域に対して、値が設定されたことになる。
//保存された値の確認方法は、Applicationのタブのlocal storageに値が保存される。　
//現時点ではkeyとvalueで保存したが変えても保存可能。
localStorage.setItem('key2', 2);
//この値を取得するには、
const result = localStorage.getItem('key2');
console.log(result);
//propが表示されるようになる。
//localStorageの使用は同期的に行われる。　
console.log('end');
//非同期だとendから表示されるけど同期的なので2が先に表示される。
//メソッドの名前を忘れた時は、webのconsole上でlocalStorageで表示する。
//そうすると格納されているメソッドを確認することができるのでその中でこれらが使えると一目瞭然でわかる。
//メソッドの名前から使い方は想定できるような形。　
//オブジェクトの登録と取得をlocalStorage経由で行う。
const obj = {a: 0};
const json = JSON.stringify(obj);
localStorage.setItem('key3', json);
const result2 = localStorage.getItem('key3');
console.log(result2);
//json形式で格納されたvalueを見て取れる。jsonの文字列をgetItemで取得し、表示すると
const obj2 = JSON.parse(result2);
console.log(obj2); //JSONをオブジェクトに変更されて表示されていることが確認できる。
