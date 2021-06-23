//マクロとマイクロの絡み合った例を確認する
//マイクロタスクの中のsetTimeoutがマクロタスクに渡される。コールスタックが終了した時点では、マイクロタスクには何も入っていないので、マクロタスクが実行される。setTimeoutにresolveが入っているのでsetTimeoutが実行されないとresolveが実行されない。　その後マイクロタスクにjob1が登録されてその後スタックがなくなるとjob1がコールスタックに入ることとなる。
new Promise(function promise(resolve) {//マイクロ
  console.log('promise');

  setTimeout(function task1() {//マクロ
    console.log('task1');
    resolve(); 
  });

  setTimeout(function task2(){
    console.log('task2'); 
  //   queueMicrotask(function job5(){ //これはプロミスでお着替えさせることができる。
  //     console.log('job5'); 
  //   });
  const p = Promise.resolve(); //この処理はグローバルコンテキストが実行された後に実行したい非同期処理のこと。
  p.then(function job4(){
    console.log('job4');  //こうするとマイクロタスクにqueueがタスクをつめるとの同じ挙動になる。
  });
  }); //setTimeoutを.thenではなく、Promiseの中にあげたとしても２つ目のマクロタスクはマイクロタスク全てが完了するまでtask2は実行されない。
}).then(function job1() {
  console.log('job1');
  // setTimeout(function task2(){
  //   console.log('task2'); //マイクロタスクの中で実行されているので、マイクロタスク全てが終了後にマクロが実行される。
  //   queueMicrotask(function job5(){
  //     console.log('job5'); //こうなるとtask2が実行された後にjob5が実行される。マクロタスクの実行を待ってjob5が実行される。
  // }); 
  // });

  queueMicrotask(function job4(){
      console.log('job4');
  }); //job1実行中にマイクロタスクにjob4が追加されてjob2,3よりは先に実行される。
}).then(function job2() {
  console.log('job2');
}).then(function job3(){
  console.log('job3');
})

console.log('global end');

//マクロタスクは１つずつ、マイクロタスクはその実行時にある全てが実行される。
