//JSONについて確認する。 JSON.parseを使用すると、JSONからオブジェクトを作成することができる。
//JSON.stringifyを使用するとオブジェクトをJSONにすることができる。
//JSONはあくまで文字列。なので上のものを使用して変換を行う。
const obj = {a: 0, b: 1, c: 2};
// const json = JSON.stringify(obj);
//jsonにJSON形式の文字列が格納される。
// console.log(json);
//オブジェクトに見えるが文字列。　プロパティが""で囲まれている。
// console.log(typeof json);
//文字列であることが格納されているのがわかる。

//stringifyは第二引数に関数や配列を入れると特定の条件で、JSONの文字列を出力することができる。
function replacer(prop, value) {
  if (value <1) {
    return ; //valueに1より小さい数字が含まれていないものが表示される。
  } //JSONに不必要なものを排除するうことができる。
  return value;
}
const json = JSON.stringify(obj, replacer);
console.log(json);
console.log(typeof json);
//replacerは配列としても使用できるので、
const json2 = JSON.stringify(obj, ["a", "b"]);
//含めたいプロパティを第二引数に配列として記載することでそれだけに絞ってJSONを作成することができる。
console.log(json2);

//parseについて確認する
const obj1 = JSON.parse(json2); //JSONをオブジェクトに変更できる。
console.log(obj1);
//こうするとオブジェクトが表示されるようになる。
//objectとjsonを簡単に変換することができる。 jsonはサーバー側との通信、ローカルストレージにデータを格納する際に使用する。オブジェクトのままデータを保存できないから。