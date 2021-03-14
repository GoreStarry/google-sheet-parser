const xlsx = require("node-xlsx");
const fs = require("fs");
const path = require("path");

const Sheets = require("./Sheets");

/**
 * @param {Object} config { download_path, DOWNLOAD_XLSX_FILE_NAME }
 * @return {Sheets}
 */
function newSheetsFromDownloadXLSX({ download_path, DOWNLOAD_XLSX_FILE_NAME }) {
  const data = xlsx.parse(
    fs.readFileSync(
      path.resolve(download_path, `${DOWNLOAD_XLSX_FILE_NAME}.xlsx`)
    )
  );

  return new Sheets(data);

  // fs.writeFileSync(
  //   `${__dirname}/download/${PROJECT_NAME}/${DOWNLOAD_XLSX_FILE_NAME}.json`,
  //   JSON.stringify(data)
  // );
}

module.exports = newSheetsFromDownloadXLSX;
