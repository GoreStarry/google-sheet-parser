/**
 *
 *
 * @class Sheets
 */
class Sheets {
  constructor(sheetListData) {
    this.sheetsMap = sheetListData.reduce(
      (prevObj, { name, data }) => ({
        ...prevObj,
        [name]: Sheets.cleanEmptySheetRow(data),
      }),
      {}
    );
  }

  getSpreadsheetsTagName = () => Object.keys(this.sheetsMap);

  getRawSpreadsheetsMap = () => {
    return this.sheetsMap;
  };

  static cleanEmptySheetRow = (sheet) => {
    return sheet.filter((sheetRow) => sheetRow.some((val) => val));
  };
}

module.exports = Sheets;
