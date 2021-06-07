const person = {
    name: 'Tom',
    bye: function ()  {
        console.log('Bye ' + this.name);
    },
    hello: function (greeting) {
        console.log(greeting + ' ' + this.name);
        return greeting + ' ' + this.name;
    },
    /**
     * 問題４：
     * 1秒後に"hello Tom"
     * と出力されるような、メソッドを
     * personオブジェクトに追加してみてください。
     * 
     * 以下のように使用するものとします。
     * `person.hello1s()` 
     * -> 1秒後に"hello Tom"と出力
     * 
     * 3通りの方法で実装してみてください。
     * １．bind
     * ２．アロー関数
     * ３．thisを一旦変数に代入
     */
    hello1s : function () {
        // setTimeout( this.hello.bind(this, 'see')  ,1000);
        //setTimeout( () => {this.hello('hello')}, 1000) ; //hello1sのレキシカルスコープを参照するので、このhello1sの呼び出し元がpersonなのでpersonのnameを使用できる。
        const _this = this;
        _this.hello('hello'); //_thisは関数コンテキストを使用できるのでhello tomと呼び出せる。
    }
}

person.hello1s();

/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */
// setTimeout( person.hello.bind(person, 'hello'), 1000);
//引数で関数をとる
/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
// alert(person.hello("hello"));
//alertが受け取るのは文字列なので、今回は戻り値が変えるperson.helloメソッドを実行することで画面上に文字列が表示される。

/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
 */
// setTimeout(person.bye.bind(person), 1000);

//アロー関数を無名関数にする。