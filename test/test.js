require("dotenv").config();
const path = require("path");

const {
  downloadGoogleSheetsToXlsx,
  newSheetsFromDownloadXLSX,
  Sheets,
  Spreadsheet,
  generateJsonFileFromObj,
} = require("../dist/index.js");

const {
  GOOGLE_SHEET_URL,
  DOWNLOAD_XLSX_FILE_NAME,
  IS_OVERWRITE_XLSX: isOverWriteXLSX,
  PROJECT_NAME,
} = process.env;

const download_path = path.resolve(
  __dirname,
  `./download/${PROJECT_NAME}/${DOWNLOAD_XLSX_FILE_NAME}.xlsx`
);

(async () => {
  //Wrapping the code with an async function, just for the sake of example.
  // await downloadGoogleSheetsToXlsx({
  //   download_path,
  //   GOOGLE_SHEET_URL,
  //   DOWNLOAD_XLSX_FILE_NAME,
  //   isOverWriteXLSX,
  // });

  const sheetsMap = newSheetsFromDownloadXLSX({
    download_path,
    DOWNLOAD_XLSX_FILE_NAME,
  }).getRawSpreadsheetsMap();

  const sameTypeSheetsList = Object.keys(sheetsMap).map((name) => {
    return new Spreadsheet(sheetsMap[name], {
      type: "column",
      isFirstRowOrColumnAsKey: true,
    }).get();
  });

  generateJsonFileFromObj(sameTypeSheetsList, {
    path: path.resolve(__dirname, "../test/generated"),
    file_name: "個別地點",
  });

  console.log(sameTypeSheetsList[2][0]["生詞簿"]);

  // const sheet = new Spreadsheet(sheetsMap["Metro 地點資訊與順序"], {
  //   type: "row",
  //   isFirstRowOrColumnAsKey: false,
  //   keyList: ["name", "station", "year", "position"],
  // }).get();

  // const sheet = new Spreadsheet(sheetsMap["Metro 地點資訊與順序"], {
  //   type: "row",
  //   isFirstRowOrColumnAsKey: false,
  //   keyList: ["name", "station", "year", "position"],
  // }).get();
  // console.log(sheet);
})();
