const path = require("node:path");

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./data.json"));
const filePath = ["base", "child", "file.js"];
console.log(path.join(...filePath));

// Resolve...
console.log(path.resolve("/folder", "index.js"));
console.log(path.resolve("/folder", "/folder2", "index.js"));
console.log(path.resolve("/folder", "/folder2", "/index.js"));
