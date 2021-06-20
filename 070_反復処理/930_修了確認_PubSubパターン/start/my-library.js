/**
 * 問題：
 * MyLibraryという汎用的な使用を想定したライブラリのクラス
 * を作成したいとします。
 * 
 * 第3者に使用されることを想定しているため、このクラスを
 * 初期化した際（new MyLibrary()）にコンストラクター内で
 * ユーザーが何らかの独自の関数を実行できる仕組みを設けたい
 * と思いました。
 * 
 * そこで以下のように動作するeventsというオブジェクトを
 * 一つ作成する事にしました。
 * 
 * どのようにしてeventsオブジェクトを実装すれば良いか
 * 考えてみてください。
 * 
 * eventsオブジェクトはon、off、emitのメソッドを持っています。
 * 
 *********************************** 
 *
 * １．onの第一引数で実行場所、第二引数で実行したい関数を登録します。
 * events.on('beforeInit', customFn1);
 * events.on('beforeInit', customFn2);
 * events.on('afterInit', customFn3);
 * 
 *********************************** 
 *
 * ２．offで"on"と同じ実引数を渡すことで、onで登録した関数を解除できます。
 *
 ***********************************
 * 
 * ３．emitでonで登録した関数をすべて実行します。
 * （１）のように登録されていた場合には、new MyLibrary()
 * とすると以下の内容がコンソールに表示されるものとします。
 * 
 * customFn1
 * customFn2
 * library process
 * customFn3
 * 
 */
const events = (function () {
	const eventStack = new Map();
	//eventsの即時関数ないでの使用のみ
	//外部からは触られたくないので、即時関数でスコープを制限。
	return {
		on(type, fn) {
			//2回目以降にnew Setされてリセットされたくないので、eventStackでtypeを取得してundefinedでなければその値が返ってくるし、undefiinedであればnew Stackにするようにする。
			const fnStack = eventStack.get(type)  || new Set();
			//SetとすることでfnStackに渡ってきた関数を入れる仕組みにする。
			fnStack.add(fn);
			eventStack.set(type, fnStack);
		},
		off (type, fn) {
			const fnStack = eventStack.get(type);
			if ( fnStack && fnStack.has(fn) ){
				fnStack.delete(fn);
			}
		},
		emit(type){
			const fnStack = eventStack.get(type);
			//eventStackに格納されているfnStackが取得できる。
			//このfnStackがundefinedでなかった場合、この場合には、
			if(fnStack) {
				for ( const fn of fnStack){
					fn();
				}
			}
		}
		//emit(type, _this)とすればMyLibraryのコンテキストのthisを渡すことができてfnを呼ぶ際にfn.call(_this);とすることができる。
		//同じような感じで引数を渡すこともできる。
	}
})();
//こうすることでオブジェクトが返ってきてeventsに登録されるときにこれらのメソッドが使用できるように。

class MyLibrary {
	constructor() {
		events.emit('beforeInit');
	
		console.log('library process');
		
		events.emit('afterInit');
		//events,emit('afterInit' , this)とするとMylibratyのコンテキストを渡すことができる。
	}
	method() {
		// do something
	}
}

