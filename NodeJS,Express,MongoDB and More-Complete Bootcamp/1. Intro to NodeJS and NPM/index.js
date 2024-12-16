const fs = require("fs");
const http = require("http");
const url = require("url");

// FILES WITH NODEJS

// const hello = "Hello World!";
// console.log(hello);

// // Blocking / Synchronous

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8"); // takes two arguments - first the path to file, second the encoding type

// const textOut = `This is what we know about the avocado:\n${textIn}.`;

// fs.writeFileSync("./txt/output.txt", textOut);

// console.log(textOut);

// // Async code below:

// console.log("ASYNC CODE BELOW: ", `\n`);

// fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
//   console.log("Finished reading...", data);

//   fs.writeFile("./txt/final.txt", data, "utf-8", (error) => {
//     if (error) console.log(error);
//   });
// });

// console.log("Reading file...");

// ---------SERVER WITH NODEJS------------ //

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/overview" || pathName === "/") {
    res.end("This is the overview page!");
  } else if (pathName === "/product") {
    res.end("This is product page!");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "Test-Header": "Testing custom headers",
    });
    res.end("<h1>Page Not Found!</h1>");
  }
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
