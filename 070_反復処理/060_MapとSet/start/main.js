//MapとSet
//データを管理するための入れ物のこと　コレクションと呼ぶこともある。
//arryとオブジェクトの違いを確認する。
//オブジェクトとMapの違い。
//オブジェクトの場合はキーは文字列になるが、Mapの場合は、制約がない。
//数値、オブジェクト、関数なども取れる。
//オブジェクトのときはfor inはできるが、Mapの場合は、for inが使用できない。
//objectではfor ofは使用できないが、Mapでは使用できる。
//読み書きはマップの方がいい。

//ArrayとSetの違い
//Arrayは重複値を持つことができるが、Setの場合は重複値を持つことができない。　
//重複を持ちたくないときはSet
//for..inはArrayは可能だがSetは不可能。
//for..ofはArrayとSetともに使用可能。　

const map = new Map();
const key1 = {};
map.set(key1, 'value1');
//ket1にvalue1という値をセットできる。　
console.log(map.get(key1));
console.log(map);

const key2 = function() {}
map.set(key2, 'value2');
console.log(map.get(key2));
//関数であっても値を取得することができる。
//もちろんプリミティブ型の値の文字列や数値でもkeyの値として使用できる。
let key3 = 0;//初期値を設定するのではなく、setの時にkey3 = 0と書いても動作は同じになる。
map.set(key3, 'value3');
console.log(map.get(key3));
//変数に入っている値がプリミティブ型の時は、値そのものへの参照を持っているので、key3のところを0
console.log(map.get(0));
//と書いてもvalue3は取得することができる。
//ただ、 オブジェクトをkeyにするときはその時のkey1はオブジェクトへの参照を保持しているので参照を利用して値をセットしているだけなのでオブジェクトを指定しても新しいオブジェクトが生成されているだけなので、値が取得されないので注意が必要。
//mapから値を削除した時は、map.delete(key情報)　
map.delete(key3);
// このような形で削除を行う。　

for ( const m of map){
  console.log(m);
}
//配列でkeyと値が取得出来る。配列に変数を入れて分割するとそれぞれkeyと値をとることができる。

for ( const [k, v] of map){
  console.log(k, v);
}
//こうすることでkeyとvalueをそれぞれ取得出来る。
//mapの場合はfor inは使用できないので
for( const k in map){
  console.log(k);
}
//このようにしても表示されない。
//Mapの構造を確認する。
//[[Entries]]という 中にkeyとvalueを持っている。
//objectとは違ってEntriesという特殊な値がある。
//オブジェクトのように自身のプロパティに持っているわけではなく、あくまで、Entriesという特殊な格納場所があってそこに格納されている事になる。
//オブジェクトとは管理の仕方が違うということを覚えておく。

const s = new Set();
//setをインスタンス化
s.add(key1);
s.add(key1);
s.add(key2);
s.add(key3);
//こうするとsetには重複した値は含まれないので、確認してみると
for ( let k of s){
  console.log(k);
}
//オブジェクトが1つだけ格納されていることがわかる。
//key1が2つ入っていないことが確認できる。　
//Setから値を削除するにはdeletを使用する。
s.delete(key3);
//Setに値が含まれているかを確認するには、s.has(key3)とすると確認できる。　
console.log(s.has(key2));
console.log(s.has(key3));//deleteで削除したのでfalseと表示される。
//hasメソッドはMapでも使用できるので覚えておく。

//  Setは配列のように添字を指定して、特定の値を取得できないので、そうしたい場合は配列に戻すこと。　
const arry = Array.from(s);
// このようにするとarryが配列に戻った値になる。　
console.log(arry);
//スプレッド構文を使用しても配列にすることができる。
const arry2 = [...s];
console.log(arry2);
//setを変換したものと同じように新しい配列に格納することができる。