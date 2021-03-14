/**
 *
 *
 * @class Sheets
 */
class Sheets {
  /**
   * Creates an instance of Sheets.
   * @param {*} sheetListData
   * @memberof Sheets
   */
  constructor(sheetListData) {
    this.sheetsMap = sheetListData.reduce(
      (prevObj, { name, data }) => ({
        ...prevObj,
        [name]: Sheets.cleanEmptySheetRow(data),
      }),
      {}
    );
  }

  /**
   *
   *
   * @memberof Sheets
   */
  getSpreadsheetsTagName = () => Object.keys(this.sheetsMap);

  /**
   *
   *
   * @memberof Sheets
   */
  getRawSpreadsheetsMap = () => {
    return this.sheetsMap;
  };

  /**
   *
   *
   * @static
   * @param {Array} sheet
   * @memberof Sheets
   */
  static cleanEmptySheetRow = (sheet) => {
    return sheet.filter((sheetRow) => sheetRow.some((val) => val));
  };
}

module.exports = Sheets;
