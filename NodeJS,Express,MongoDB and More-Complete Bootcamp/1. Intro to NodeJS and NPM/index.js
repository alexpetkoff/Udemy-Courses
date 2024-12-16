const fs = require("fs");
const http = require("http");

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

const server = http.createServer((req, res) => {
  res.end("Hello from the server!");
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
