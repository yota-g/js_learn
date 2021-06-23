//例外処理・・エラーが発生した際に飛ぶ特別は処理。
//try,catch.finallyで実行され、tryでエラーが発生した時はそれ以降は実行されず、catchの部分が実行される。

// try {
//   console.log('start');
//   throw new Error();
  //エラーを投げるとcatchのブロックにいきなり処理が映る
  // console.log('end');
  //startは表示されるがerrorが投げられているので、eの引数にオブジェクトが渡されてエラ〜メッセージが表示され、endは表示されずfinallyが表示される。
  //throwがない時はendが表示されてfinallyに処理が映る。
// }catch(e){
//   console.error(e);
// }finally{
//   console.log('bye'); //必ず呼ばれるもの
// }

//関数を描き直す。
// async function fetchUsers() {
//   const response = await fetch('users.json');
//   const json = await response.json();
//   for(const user of json) {
//     console.log(`I'm ${user.name}, ${user.age} years old`)
//   }
// }

async function fetchUsers() {
  const response = await fetch('users.json');
  if (response.ok){
    const json = await response.json();
    if (!json.length){//lengthが０だったときfalseなのでそれの条件がtrueになる。
      // throw new Error ('no data found');
      throw new NoDataError ('no data found');
      //try catchでできるようにする。
    }
    return json;
  }
}

async function init(){
  try {
    const users = await fetchUsers(); //asyncの中に入れないと使えない。fetchUsersは.jsonをとってくるだけにする。
    for(const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`)
    }
  }catch(e) {
    if ( e instanceof NoDataError){
      console.log(e);
    }else { //NoDataError以外はこっちになる。
      console.error('Oops, something went wrong');//条件分岐をしたい時にはカスタムエラーを作成することがある。
      //thorwでエラーが投げられた時に、tryが書いていないと実行されないので注意する。
    }
//記載やめると何も表示されなくなる。
    //使う場合にエラーのハンドリングを変えたい時は、if文を上の方に書いて分けるよりは、使用する人が適宜判断して使用する。
    //throwで飛ばすのは何かがおかしいですと伝えるだけ。それ以降の処理は、使う側で使用すること。
  }finally{
    console.log('bye');
  }
  console.log('end');
  //try catchでthrowを管理していないとendも表示されないようになってしまう。
}
init();
//同じようなものが表示される。
//カスタムエラーはErrow()を参照してカスタムすることができる。ちゃんとtry＆catchをしないといけない。
class NoDataError extends Error {
  constructor(message){
    super(message);
    this.name = 'NoDataError' //nameを設定していないとErrorが表示されてしまう。
    //例外処理の中で条件分岐を作成したい時にカスタムエラーを作成する。
  }
}
