const fs = require("fs");
const xlsx = require("node-xlsx");

function createNewXlsxFile(mapTabData, { path, file_name } = {}) {
  var buffer = xlsx.build(
    Object.entries(mapTabData).map(([name, data]) => ({ name, data }))
  ); // Returns a buffer

  fs.writeFile(`${path}/${file_name}.xlsx`, buffer, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("XLSX File written");
    }
  });
}

module.exports = createNewXlsxFile;
