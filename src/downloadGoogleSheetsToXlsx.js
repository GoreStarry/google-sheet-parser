const path = require("path");
const Downloader = require("nodejs-file-downloader");

function downloadGoogleSheetsToXlsx({
  download_path,
  GOOGLE_SHEET_URL,
  DOWNLOAD_XLSX_FILE_NAME,
  isOverWriteXLSX,
}) {
  //Wrapping the code with an async function, just for the sake of example.

  const downloader = new Downloader({
    url: `${GOOGLE_SHEET_URL}export?format=xlsx`, //If the file name already exists, a new file with the name 200MB1.zip is created.
    directory: download_path, //This folder will be created, if it doesn't exist.
    fileName: `${DOWNLOAD_XLSX_FILE_NAME}.xlsx`,
    cloneFiles: !isOverWriteXLSX,
  });

  try {
    return downloader.download(); //Downloader.download() returns a promise.
  } catch (error) {
    //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
    //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
    console.log("Download failed", error);
  }
}

module.exports = downloadGoogleSheetsToXlsx;
