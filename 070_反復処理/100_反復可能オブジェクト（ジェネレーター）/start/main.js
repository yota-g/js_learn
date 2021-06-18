//反復可能オブジェクトの実装　ジェネレーター
//

const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function* () {
	for (let key in this){
		yield [key, this[key]];
	}
}
//ジェネレーターの場合はこれで記述できていることになる。
//実際に確認する
for ( let [ k, v] of items){
	console.log( k, v);
}
//iteratorを設定することでfor ofを使用することができるようになる。
