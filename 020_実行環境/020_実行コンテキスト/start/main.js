//コンテキスト・・前後関係、文脈、脈絡、コンテキスト、状況、環境
//プログラミングで実行されるコンテキストは、コードを実行する際の文脈と状況という意味合い。
//コードが実行されているときどんな状況で実行されているのかというのが実行コンテキスト。

//実行されている状況でコンテキストが変わる。　それを含めたのを実行コンテキストという。
//実行コンテキストは３つある。
//グローバルコンテキスト、関数コンテキスト、evalコンテキスト（これは非推奨）
//最初の２つはよく出てくる。
//ES６から導入されたモジュールを使用すると、グローバルコンテキストの代わりにモジュールコンテキストというものが生成される。
//  グローバルコンテキスト・・実行中のコンテキスト内の変数・関数が使用できる。
//宣言した変数と関数が使用できる。それにグローバルオブジェクトとthisが使用できる。
//関数コンテキスト・・実行中のコンテキスト内の変数・関数、arguments,super, this,外部変数が使用することができる。

let a = 0;
function b (){
  console.log(this, arguments,0);
}

console.log(a);
b();
// main.jsの直下に書かれたのがグローバルコンテキストになる。
//この状況をグローバルコンテキスト内で関数や変数を使用できる状況という。
//関数コンテキストは関数が実行される時に実行されるコンテキスト this,arguments,外部変数（関数の外で定義されたもの）が使用できる。
//今回はsuperは使用できない。
//thisとarugumentsは実行する環境で取れる値が変わるので注意が必要。

