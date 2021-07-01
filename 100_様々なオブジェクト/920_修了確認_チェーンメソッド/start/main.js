/**
 * 問題：
 * 反復操作可能なオブジェクトIteratableObject
 * を作成してみましょう。
 * Arrayと同様に以下のメソッドが使用可能とします。
 * 
 * set(key, value)  *1
 * forEach
 * map
 * filter
 * 
 * *1:setはチェーンメソッドとしてつなげられるように実装してみてください。
 * 
 * また、for...ofを使用した際にはMapと同じ挙動を取るものとします。
 * 
 */
class IteratableObject {
	constructor(obj) {
		for(let prop in obj) {
			this[prop] = obj[prop];
		}
	}

	print(label = '') {
		console.log(`%c ${label}`, 'color: blue; font-weight: 600;', this);
		return this;
	}

	set (key , value){
		this[key] = value;
		return this;
	}

	forEach (callback) {
		for ( let [ k, v ] of this){
			//iteratorのおかげでfor ofが使用できるので反復させる。
			callback(v, k ,this);
		}
	}

	map (callback) {
		const newInstance = new IteratableObject(); //オブジェクト
		for ( let [ k, v ] of this){
			//iteratorのおかげでfor ofが使用できるので反復させる。
			newInstance[k] = callback(v, k ,this);
		}
		return newInstance;
	}

	filter (callback) {
		const newInstance = new IteratableObject(); 
		for ( let [ k, v ] of this){
			if(callback(v, k, this)){
				newInstance[k] = v; //条件に合うものに対してインスタンスを作成することができる。
				//callbackがtureの場合のみ実行される。
			}
		}
		return newInstance;
	}

	*[Symbol.iterator]() {// 通常のオブジェクトは反復操作がメソッドとしてないので、for ofを使えないが、クラスで定義してあげると反復可能なオブジェクトが作れるということを理解しておく。
		for (let key in this) {
			yield [key , this[key]];
		}//オブジェクトがプロパティでループを行い、呼び出し元に値を返すことになる。
	}

}

function prefix(v, i, obj) {
	return 'prefix-' + v;
}

const original = new IteratableObject({
	key1: 'value1',
	key2: 'value2',
	key3: 'value3',
});

original.forEach(v => {
	console.log(v);
});
　
// for (let [k, v] of original ) {
// 	console.log(k,v); //propと値が取れることがわかる。
// }

const result = original
	.map(prefix)
	.set('key4', 'value4')
	.filter(function (val, key) {
		return key === 'key4';
	});

console.log('%coriginal', 'color: blue; font-weight: bold;', original);
console.log('%cresult', 'color: red; font-weight: bold;', result);
/**
 * 期待する出力結果
 * original 
 * {key1: "value1", key2: "value2", key3: "value3"}
 * 
 * result 
 * {key4: "value4"}
 */
