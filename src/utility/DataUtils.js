/** 共通関数 */

/** 在庫管理行データ作成 */
function createRows(func){
    let array;
    // 非同期通信funcの結果を見る。
    const response = func;
    func.then((response) => {})
    .then((response) => {        
        array = new Array(response.length);
        /** ファイル内の要素数分、処理を行う。 */
        for(let idx = 0; idx < array.length; idx++){
            array[idx] = {            
                    name:response[idx].name,
                    value:response[idx].stock,
                    memo:response[idx].memo
            };
        };})
    .catch((error) => console.log(error))  //エラーが発生したとき
    .finally();  //いずれの場合も実行する
}

/** 在庫管理行データ削除 */
exports.deleteRows = function(id,data){
    // 削除対象を省いた配列
    const newArray = data.filter((item) => item.id != id);

    // jsonから対象削除
    console.log(newArray);
}
