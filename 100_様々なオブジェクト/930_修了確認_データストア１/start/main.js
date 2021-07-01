/**
 * 問題：
 * オブジェクトの状態をlocalStorageに保存してみましょう。
 * 以下の要件に従ってlocalStorageに状態を保持するオブジェクト
 * を作成してみてください。
 * 
 * １．オブジェクトの値が変更された場合に
 * オブジェクトをJSONに変換してlocalStorageに
 * 登録します。localStorageに登録する際のキー
 * は"test-data"としてください。
 * 
 * ２．プログラムが実行される際にlocalStorage
 * を指定のキーで検索し、JSONがすでに登録されて
 * いる場合には、そのJSONからオブジェクトを復元し
 * 初期値のオブジェクトとしてください。
 */
const KEY = 'test-data';

class DataSource {
  static getLocal(KEY){
    console.log('get from local');
    const result =localStorage.getItem(KEY);
    return JSON.parse(result);
  }
  static setLobal(KEY, target){
    console.log('set to local');
    const json = JSON.stringify(target);
    localStorage.setItem(KEY, json);
  } 
};


// const targetObj = {};
// const targetObj = getLocal(KEY) || {};
const targetObj = DataSource.getLocal(KEY) || {};
//今回はapplicationに値が格納されているので設定されているものが初期値として設定される。

// function getLocal(KEY){
//   const result =localStorage.getItem(KEY);
//   return JSON.parse(result);
// }

const pxy = new Proxy(targetObj, {
  set(target, prop , value, receiver ) {
    const result = Reflect.set(target, prop , value, receiver );
    //オブジェクトを更新してから新しいものを取得するようにする。setされた時点で新しいオブジェクトをセットするから。
    // const json = JSON.stringify(target);
    // localStorage.setItem(KEY, json);// Reflectより先に設定すると古いものがセットされる。
    DataSource.setLocal(KEY, target);

    return result;
  }
});
console.log('init', pxy);
pxy.name = 'Tom';
console.log('change', pxy);
pxy.name = 'Sun';
console.log('change2', pxy);