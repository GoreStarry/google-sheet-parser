const fs = require("fs");

/**
 * @param {Object} objData
 * @param {Object} config { path, file_name }
 */
function generateJsonFileFromObj(objData, { path, file_name } = {}) {
  fs.writeFileSync(`${path}/${file_name}.json`, JSON.stringify(objData));
}

module.exports = generateJsonFileFromObj;
