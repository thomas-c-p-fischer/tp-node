const { resolve, basename, extname } = require("path");

console.log(resolve("."));
console.log(basename(__filename));
console.log(extname(__filename))