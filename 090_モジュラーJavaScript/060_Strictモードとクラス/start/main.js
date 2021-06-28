class C {
  constructor() {
    function fn() {
      console.log(this);
    }
    fn(); //undefinedと表示される。
  }

  method() {
    function fn() {
      console.log(this);
    }
    fn(); //メソッド内でもundefinedと表示される。
  }
}

const c = new C();
c.method();
//クラスのコンストラクターやメソッドの中は自動的にuse strictになっているのでその点について確認。
//コンストラクターやメソッドの中はstrictモードがオンになっているので注意が必要。
//関数をクラスの外に持ってくるとstrictモードがオフなのでthisはwindowオブジェクトを取得する。
//ページにuse strictとすることでページ全体にクラスの外でもuse strictを効かせることができる。
function fn() {
  console.log(this);
}
fn();
