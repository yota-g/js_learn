window.name = 'John';

const a = () => console.log('Bye ' + this.name);
const person = {
    name: 'Tom',
    // hello: function() {
    //     console.log('Hello ' + this.name);
    // }
    //ES6から無名関数のfunctionが省略できる。無名関数がhelloプロパティに格納されている事になる。
    hello() {
        console.log('Hello ' + this.name)
        a(); //アロー関数を呼び出してもこの関数のレキシカルスコープはグローバルコンテキストになる。
        //なのでaのthisはJohnになる。　１つ上の階層のthisを取りに行くという事になる。
        //const b無名関数の宣言をhello関数の中にもってくるとthisはTomになる。helloのメソッドのthisになる。　
        const b = () => console.log('ByeBye  ' + this.name); 
        b();
    }
}
person.hello();
//アロー関数ではthisがセットされないが挙動がどうなるかを確認する
const person2 = {
    name: 'Tom',
    hello: () => {
        console.log('Hello ' + this.name);
    }
}
person2.hello();
//personオブジェクトはグローバルコンテキストに定義されている。thisの参照先はwindowオブジェクトになる。
//person2.hello: () => { thisなし}　thisのキーワードを外側のレキシカルスコープに探しにいく。そこで見つかるのがwindowオブジェクトになる。アロー関数の場合、thisを取らないので、スコープチェーンを使用して外側のレキシカルスコープにthisを探しにいくという現象が起きる。windowオブジェクトのthisをとる

//無名関数の場合は、オブジェクトのメソッドの呼び出された場合は、呼び出し元のオブジェクトのthisが使用され、関数の場合はグローバルオブジェクトが呼び出される。

//アロー関数はそのコンテキストないでthisを取らないので、呼び出し先はオブジェクトでも関数でもグローバルオブジェクトのthisになる。そのコンテキストのthisは無視される。

function c () {
    const d = () => console.log('See you ' + this.name);
    d(); 
}
c();
//d のレキシカルスコープはc になるが関数がただ呼ばれただけだと関数のthisはwindowオブジェクトを呼ばれるだけなので、dのthisもwindowオブジェクトになる。
