//イテレータを使用して反復可能オブジェクトを作成する。
//通常のオブジェクトでは　for ofを使用できないので、Objcect.entries(obj);
//を使用することで配列に変換して、それをfor ofを反復する。
//objのプロトタイプの変更は通常では、推奨されていないのでレクチャーの一貫
//不要なバブを産みかねないので注意する。
//objのプロトタイプに対してイテレータを返す関数を登録する。　


const items = {
	prop1: 'value１',
	prop2: 'value2',
	prop3: 'value3'
}

//オブジェクトのプロトタイプのシンボルのイテレーにイテレータを返す関数を設定する。
Object.prototype[Symbol.iterator] = function () {
	// console.log(this); //Objectのprototype内でitemsのオブジェクトを表示する。  itemsが表示されるのは、for文でitemsを入れているから。今回doneがfalseだから展開されていないだけ。
	const keys = Object.keys(this);
	//こうすることでプロパティのkeyの一覧をこうすることでプロパティが配列なってkeysという変数に格納できる。
	// console.log(keys); //objのプロパティのkeyが配列になったものを表示することができる。
	//変数のkeysを１つずつとっていきたいので変数のiを設定する
	let i = 0;　　//++で1ずつ増加させて、keysからkey情報を取得していって、それを元に値を取得していく。
	const _this = this;
	return {
		next() {
			let key = keys[i]
			i++;  //keysから次のプロパティの値が入ってくる。
			//取得したkeyからthisの値を取得する。
			// console.log(this);//ここでthisを使用するとSymbolのイテレータの中でthisを呼ぶのと異なる。 next: fと表示される
			// console.log(_this); //itemsが表示される。_thisはこのスコープ内で宣言されていないのでレキシカルスコープで探しに行って参照される
			//ここのthisはnextの中のthisになる。
			//なのでnextの入ったthisが取れてくる。
			//今回欲しいのは、Object.keysのthisと同じthisが欲しい。
			//上の階層で_this = thisと変数設定することで使用できる。
			return {
				value: [key, _this[key]], //こうするとkeyとvalueが配列に使用できる。
				done : i > keys.length //このようにしてイテレータを設定しておいて独自の処理を入れていく。
				//iの値がkeysのlenght以上になるとtureになるように設定できる。　
			}
		}
	}
}
//objに格納したものにどのようにObject にいれたprototypeを使用するか
//thisを使用する。thisの中にobjへの参照が入っているのでそれをconsole.logで確認。

// const items = Object.entries(obj);
for (let item of items) {
	console.log(item);
	//分割代入でk,vで表示させることもできる
}
//一度だけ無名関数が実行されているのでその内容が表示される。
//上記よりthisがitemsを格納していることがわかるので、itemsを広げてvalueに入れて展開することができる。　
//このthisを使用してプロパティのkeyを使用する。

//オブジェクトのプロトタイプに格納されているSymbolのiteratorをiteratorを返す関数を記載すると反復可能オブジェクトにすることができる。オブジェクトは全てのオブジェクトの継承元なのでここでイテレータをいじるとバグの原因となるので気をつけること。
//自分で作ったオブジェクトのプロトタイプを変更するときは反復可能なものを使用できるので活用する。
//consoleで確認しながらすると理解が深くできる


