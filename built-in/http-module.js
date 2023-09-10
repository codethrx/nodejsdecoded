console.log(`Creating a basic http server.`);
const http = require("http");

const server = http.createServer(function (req, res) {
  const superhero = { fname: "Bruce", lname: " Wayne" };
  res.writeHead(201, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superhero));
});
server.listen(4000, () => console.log(`Server runnign`));
