window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}

fn(helloTom);
//ここをhello tomにしたい場合はどうするかを考える。
//bindを使用すると接続できる。
//bindの第一引数で渡したオブジェクトpersonをhelloの中で実行されるthisの参照先として設定し、その設定した関数を新しい関数としてhelloTomに返却している。
//helloTomを実行した場合は必ずbineで指定したオブジェクトがthisの参照先となるためコールバックで渡してもhelloTomと表示される。

function a(name) {
    // console.log('hello' + this.name)
    //thisを削除して、aに引数を渡して、nameという引数が渡るようにしてもbindは使用できる。
    //関数内でthisが使われていない場合は、第一引数を設定する必要はないので第一引数はnull、第二引数以下を関数の引数を渡すことで引数の値を束縛することができる。
    console.log('hello' + name);
    //この場合、bindの第二引数Timが関数の第一引数を束縛して渡ってくるので、hello Timと表示される。
}

// const b = a.bind({name: 'Tim'});
const b = a.bind( null, 'Tim');
//bindeの引数をオブジェクトにnameプロパティを渡して、この時に表示されるのをTimとすると、a関数の中で参照される値をbindの中の引数のオブジェクトにしてb に新しい関数を返却する。　
//bを実行した場合には、hello Tim と表示される。
b();
//b('Tom');としてもTimと表示される。
//bに対して引数うを渡したとしても、bindの第二引数の方が優先される。
// person.helloでpersonのなかの関数を参照しているが、bindを使用することで他の関数として、メモリ空間にthisの値が固定されて生成される。それがbindの中に入れた引数で決まる。そこにpersonを入れることでpersonの中のthisの値を入れることができる。それに対して変数を設定。そうすることで変数を呼び出してもthisが固定されているのでそのthisを使用することができるようになる。
//bindではthisや引数を固定した新たな関数が作成されるということを覚えておくこと。
//bindによるthisの固定のことをbindによるthisの束縛という。　

//実行コンテキストによっては欲しいthisが渡ってこないことがあるが、その場合は、bindを使用してthisを固定するといい。　