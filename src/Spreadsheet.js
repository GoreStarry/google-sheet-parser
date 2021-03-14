/**
 *
 *
 * @class Spreadsheet
 */
class Spreadsheet {
  constructor(
    originSheetListData,
    { type = "row", isFirstRowOrColumnAsKey = true, keyList = ["", ""] }
  ) {
    const targetData = isFirstRowOrColumnAsKey
      ? type === "row"
        ? originSheetListData.slice(1)
        : originSheetListData.map((rowData) => rowData.slice(1))
      : originSheetListData;

    this.keyList = isFirstRowOrColumnAsKey
      ? type === "row"
        ? originSheetListData[0]
        : originSheetListData.map(([keyName]) => keyName)
      : keyList;

    if (type === "row") {
      this.sheetListData = targetData.map((dataList) => {
        return dataList.reduce(
          (obj, val, index) =>
            this.keyList[index]
              ? {
                  ...obj,
                  [this.keyList[index]]: val,
                }
              : obj,
          {}
        );
      });
    }
    // type === "column"
    else {
      const columnDataLength = targetData.reduce((prevMaxLength, rowData) => {
        return rowData.length > prevMaxLength ? rowData.length : prevMaxLength;
      }, 0);

      this.sheetListData = [...Array(columnDataLength)].map((nulll, index) => {
        return this.keyList.reduce((obj, keyName, indexKey) => {
          return keyName
            ? {
                ...obj,
                [this.keyList[indexKey]]: targetData[indexKey][index],
              }
            : obj;
        }, {});
      });
    }
  }

  get = () => this.sheetListData;
  getKeyList = () => this.keyList;
}

module.exports = Spreadsheet;
