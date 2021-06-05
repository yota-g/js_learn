let a = 2;
window.a = 4;
function fn1() {
    // let a = 1;
    function fn2() {
        console.log(a);

        if (true) {
            // var a = 3;
            //ブロックスコープが働かず、上のconsole.log(a);の値がundefinedになってしまうので注意
        }

    }
    fn2();
}
fn1();
//スコープチェーンの定義・スコープが複数階層で連なっている状態。
//あるスコープが他のスコープを含んでいる状況をスコープチェーンという
//スコープチェーンが作成されている状況でのJSの挙動の確認をする。
//fn1とfn2に同じ変数を定義した時、fn2の変数が引用される。
//ソースコードにブレイクポイントを入れてもそのfn2が適用される。fn2に定義しなかった場合、fn1の変数が引用される。一番内側の自スコープから変数を探して、一つずつ外側に変数を探すが、見つけた段階でその変数を返すのでこれがスコープチェーンでの変数の獲得。
//グローバルスコープとスクリプトスコープに同じ変数名を入れた場合はどうなるのか。
//a = 2が表示されることになる。グローバルスコープはスクリプトスコープの外側であることがわかる。
//スクリプトが定義されていないとグローバルスコープの変数が表示される。JSでは同じ名の変数が高い階層にある場合は内側のスコープから探してグローバルスコープまで探してない場合はエラーを表示するということになる。
//多階層にして、それぞれの階層に同じ変数名を入れて一番高い階層でconsole.log(a); let a = 3;とした場合は、エラーば表示される。
//ホイスティングの回にやったときにletを使った変数の宣言より前に値を取得しようとするとエラーが発生するため。変数名をつける時は注意が必要。
//varとif(){}ブロックスコープが作成されない場合は気をつけないといけない。

