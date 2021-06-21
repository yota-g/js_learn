//コールバック関数を用いた非同期処理。

function a(b) {
  setTimeout(function task1() { 
    console.log('task1 done');
    b();
    //この場合グローバルコンテキストにbがあるので引数を渡さなくても実行される。
  });

  console.log('fn a done');
}

function b() {
  console.log('fn b done');
}

// a();

// b();
//こうするだけでは、a bの順では実行されない。aにはsetTimeoutがあるから。
//setTimeに第二引数はないが、待機は発生しないが、タスクキューを通じで実行される為、コールスタックがはけるまでは実行されずに実行が待機される。
//aが終わった後にコールスタックの中でaが実行された後にbが実行される。
//その後に、非同期のsetTimeoutが実行される。
//aが全て終わったとにbを実行するにはどうするのか。

a(b);
//関数aの引数にbを渡すしてsetTimeoutのconsole.logの後にb()を入れてあげることで後でtask1が実行されてからbが実行されるようになる。
