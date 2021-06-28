//外部にエキスポートしたいものに関しては、前にexportを使用する。

console.log('ESmodule called');

let privateVal = 1;
// export let publicVal = 10;
export let publicVal = { prop : 10}

export function publicFn() {
  console.log('publicFn called: ' + publicVal.prop);
  console.log('publicFN called private: ' + privateVal ++)
}

function privateFn() {

}
