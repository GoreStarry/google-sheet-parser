const downloadGoogleSheetsToXlsx = require("./downloadGoogleSheetsToXlsx");
const newSheetsFromDownloadXLSX = require("./newSheetsFromDownloadXLSX");
const parseJsonFromRawXlsx = require("./parseJsonFromRawXlsx");
const Sheets = require("./Sheets");
const Spreadsheet = require("./Spreadsheet");

module.exports = {
  downloadGoogleSheetsToXlsx,
  newSheetsFromDownloadXLSX,
  parseJsonFromRawXlsx,
  Sheets,
  Spreadsheet,
};
