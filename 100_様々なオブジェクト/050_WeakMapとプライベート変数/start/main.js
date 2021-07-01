import { Person } from './person.js';

const tim = new Person('Tim', 23);
const bob = new Person('Bob', 24);
tim.hello();
bob.hello();

//WeakMapを使用する際によく利用されるプライベート変数を学習する。
console.log(tim._name);
//_nameは外部からの使用はできないということを明示しているのに現状だと使用できてしまう。　
//Weakmapを使って完全にアクセスできないようにする。
//wmがexportされていないので参照できない。
//Personのthisに格納されていないプロパティに関してはインスタンス化してもアクセスできないのでwmはファイル内でのみ参照できるものになる。
//どのようにして使用するかは。wm.get(this)というように使用する
//これがweakmapに格納されたプライベート変数の格納方法。
//tim._nameが参照できないようになる。