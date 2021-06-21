//タスクキュー・・実行待ちの非同期処理の行列
//タスクをキューで管理。非同期処理の実行順を管理
//キューの仕組みをFIFOという


const btn = document.querySelector('button');
btn.addEventListener('click', function task2() {
    console.log('task2 done');
});

function a() {
    setTimeout(function task1() {
        console.log('task1 done');
    }, 4000);

    const startTime = new Date();
    while (new Date() - startTime < 5000);
    //ここは同期処理、メインスレッドの占有

    console.log('fn a done');
}
//メインスレッドをfn aで占有しているのでそれを待ってからボタンを押した分が実行される。
//その後にsetTimeoutで4秒経ったものが表示される。
a();

