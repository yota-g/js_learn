const wm = new WeakMap();
//関数内でプライベートにしたい変数は、wmに格納するようにする。
export class Person {
    constructor(name, age) {
        // this._name = name;
        //プライベート変数で外部からは使用しないようにというのを開発者に明示している。
        wm.set(this, {name})
        //こうすることでPersonのclass内でしか使用できない変数をつくることができる。
        //こうするとweakmap自体がexportされていないので参照することができなくなる。
    }

    hello() {
        // console.log(`hello ${this._name}`);
        console.log(`hello ${wm.get(this).name}`);
    }
}

//なぜweakmapを使用するかというと、オブジェクト毎にthisの参照先が変わるのでtim の他にpersonを作ってもbobとtimの参照するオブジェクトは変わってくる。　
//WeakMapで管理されたものから合致するオブジェクトの参照先を元にプライベート変数を取り出してくることになる。
//近々ブラウザで使用できるようになる。
