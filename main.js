//1.Local Modules
// const add = require("./modules/add.js");
// const sum = add([1, 2, 3]);
// console.log(sum);
//2.Built in
//a-path module decoded
// require("./built-in/path-module.js");
//b- callback pattern
// require("./callback-pattern");
//c-events module decoded
// require("./built-in/event-module.js");

//Character sets like ascii and unicode provides pre-defined set of numbers for characters. Also Character encoding is representing number in character set as binary data before storing it into computer.
//UTF-8 converts number to byte (8bits)

//d- Streams and Buffers
// Stream is sequence of data from one point to another over time. (file transfer)
// Data is transfered in chunks rather than sending entire data.
// Buffer helps us to decide when is the right time to send data for processing.

// const buffer = new Buffer("Tatheer");
// console.log(buffer.toJSON());

//Asynchronously Javascript.
//Javascript is a synchronous blocking single threaded language.s

//fs module
// const fs = require("fs");
// const fileContent = fs.readFileSync("./file.txt", "utf8");
// console.log(fileContent);
// fs.writeFile("./newFile.txt", "file", () => {});
// fs.writeFile("./newFile.txt", "file1", { flag: "a" }, () => {});
//fs promise module.
// const promiseBasedFs = require("node:fs/promises");
// promiseBasedFs
//   .writeFile("./promise-file.txt", "Hello")
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));
//Streams
// const fs = require("fs");
// const readFileViaStream = fs.createReadStream("./file.txt", {
//   encoding: "utf8",
// });
// const writeFileViaStream = fs.createWriteStream("./filestram.txt");
// readFileViaStream.on("data", (chunk) => {
//   //   console.log(chunk);
//   writeFileViaStream.write(chunk);
// });
// There are Duplex,readable,writable and tranform steams
