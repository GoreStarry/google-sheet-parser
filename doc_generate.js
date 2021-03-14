var documentation = require("documentation");
var fs = require("fs");

documentation
  .build(["./src/index.js"], {
    // shallow: true
  })
  .then(documentation.formats.md)
  .then((output) => {
    // output is a string of Markdown data
    fs.writeFileSync("./README.md", output);
  });
