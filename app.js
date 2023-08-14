const fs = require("fs");
const lodash = require("lodash");
fs.readFile("data.txt", "utf-8", function (err, data) {
  if (err) throw err;
  console.log(data);
  const strings = data.split(` `);
  console.log(strings.length);
  const newString = lodash.reverse(strings);
  console.log(newString.join());
  console.log(lodash.uniq(strings));
  console.log(lodash.uniq(strings).length);
  console.log(lodash.uniq(strings).toUpperCase());
  // strings.
});
