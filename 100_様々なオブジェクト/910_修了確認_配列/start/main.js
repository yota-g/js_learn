/**
 * 問題：
 * Arrayを継承して以下のメソッドを実装してみましょう。
 * 
 * push(*1)
 * forEach
 * map
 * filter
 * reduce
 * 
 * *1:pushはチェーンメソッドとしてつなげられるように実装してみてください。
 */
class MyArray extends Array {
	constructor(...args) {
		super(...args)
	}
//arryの要素はthisに格納されている。
	print(label = '') {
		console.log(`%c ${label}`, 'color: blue; font-weight: 600;', this);
		return this;
	}

	push(val) {
		super.push(val);
		return this;
	}

	forEach (callback){ //引数にはコールバック関数で操作をするのでコールバック関数を入れておく。
		for(let i = 0 ; i < this.length; i++){
			callback(this[i], i , this);
		}
	}

	map (callback) {
		const newInstance = new MyArray();
		for (let i = 0 ; i < this.length; i++){
			const result = callback(this[i], i , this);
			newInstance.push(result);
		}
		return newInstance; //返ってくるのはあくまでmyarryのインスタンスpushを使用可能。保持していることになる。参照元が変わっても使用可能。
	}

	filter(callback){
		const newInstance = new MyArray();
		for (let i = 0 ; i < this.length; i ++){
			if(callback(this[i], i , this)){//trueの場合は新しい配列に値を入れる。
				newInstance.push(this[i]);
				//こうするとcallbackの条件がtureの場合に要素が格納される。
			}
		}
		return newInstance;
	}

	reduce (callback, accu) {
		const tmpArry = [...this];

		if(accu == undefined) {//ない場合は、undefined
			accu = tmpArry.shift();
			//１つ目の配列の要素を削除してそれをループに入れる。
			//thisの値をshiftすると元の値に影響が出るので配列をコピーしてから要素を削除して要素を取ってくるとreduceの要素を作れる。
		}
		for (let i = 0 ; i < tmpArry.length; i++){
			accu = callback(accu , tmpArry[i]);
		}
		return accu;
	}
}

function double(v, i, obj) {
	return v * 2;
}

const original = new MyArray(1, 2, 3, 4);

// const result1 = original
// .forEach(function(v,i,arry){
// 	console.log(v, i, arry);
// });

// const result2 = original
// .map(function(v, i, arry){
// 	return v * 2;
// })
// console.log(result2);

const result = original
	.map(double)
	.push(5)
	.print('place1')
	.filter(function (v, i) {
		return v > 2;
	})
	.print('place2')
	.reduce(function(accu, curr) {
		return accu + curr;
	}, 0)

console.log('%coriginal', 'color: blue; font-weight: bold;', original);
console.log('%cresult', 'color: red; font-weight: bold;', result);

