const downloadGoogleSheetsToXlsx = require("./downloadGoogleSheetsToXlsx");
const newSheetsFromDownloadXLSX = require("./newSheetsFromDownloadXLSX");
const generateJsonFileFromObj = require("./generateJsonFileFromObj");
const Sheets = require("./Sheets");
const Spreadsheet = require("./Spreadsheet");
const createNewXlsxFile = require("./createNewXlsxFile.js");
const reverseJsonBackToSheet = require("./reverseJsonBackToSheet.js");

module.exports = {
  downloadGoogleSheetsToXlsx,
  newSheetsFromDownloadXLSX,
  generateJsonFileFromObj,
  Sheets,
  Spreadsheet,
  createNewXlsxFile,
  reverseJsonBackToSheet,
};
