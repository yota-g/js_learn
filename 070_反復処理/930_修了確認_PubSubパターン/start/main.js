/**
 * 問題：
 * my-library.jsに記載。
 */

function customFn1() {
	console.log('customFn1');
}
function customFn2() {
	console.log('customFn2');
}
function customFn3() {
	console.log('customFn3');
}
// Map , Set//1つのトリガーに関して２つ以上同じ関数が登録されていたときに一回にしたいのでSetを使用。こうするとバグの原因を防ぐことができる。
events.on('beforeInit', customFn1);
events.on('beforeInit', customFn2);
events.on('afterInit', customFn3);

new MyLibrary();
