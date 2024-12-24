/** 共通関数 */

/** 在庫管理行データ作成 */
exports.createRows = function(file){
    const array = [];

    /** ファイル内の要素数 */
    const length = file.length;
    /** ファイル内の要素数分、処理を行う。 */
    for(let idx = 0; idx < length ; idx++){
        array.push({
            id:file[idx].ID,
            name:file[idx].名前,
            value:file[idx].ストック,
            memo:file[idx].メモ
        });
    }
    return array;
}




