//参照と引数に関して、
// function fn(a) {
// }

// let b = 0;

// fn(b);

//この場合の変数aがどの値をとるのかというとlet a = b;と同じ意味になる。　

let a = 0;

function fn1 (arg1){
  console.log( a, arg1);
  arg1 = 1;
  //ここの処理は let arg1 = a; arg1 = 1;という処理をしたことと同意義
  console.log( a, arg1);
}
//プリミティブ型を引数として代入するときはお互いに独立しているので影響を受けない。
fn1(a);

let b = { 
  prop : 0
}

function fn2 (arg2 ) {
  arg2.prop = 1;
  console.log( b, arg2);
  //参照先が同じになるのでbとarg 2のプロパティの値が同じになる。　
}

fn2(b);
console.log(b);
//参照先がスコープになるので、値が変更となるのは関係ないので値が変更されてしまう。

let c = {
  prop : 1
}

function fn3 (arg3) {
  arg3 = { newProp: 3}
  console.log( c , arg3);
}

fn3(c);
//arg3のオブジェクト参照先が変わるので違うオブジェクトが表示され、互いに影響しないようになる。　
//オブジェクトの場合は参照が渡っていくので注意が必要。
//元のオブジェクトに影響が出る