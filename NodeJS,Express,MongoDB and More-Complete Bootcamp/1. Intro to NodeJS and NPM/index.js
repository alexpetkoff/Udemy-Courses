// Core Modules
const fs = require("fs");
const http = require("http");
const url = require("url");

const slugify = require("slugify");

// Custom Modules
const replaceTemplate = require("./modules/replaceTemplate");

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

const templateOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const templateCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const templateProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // OVERVIEW page
  if (pathname === "/overview" || pathname === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    // console.log(
    //   slugify("Fresh Avocados from our FARM!", {
    //     lower: true,
    //     replacement: "-",
    //     strict: true,
    //   })
    // );

    const cardsHtmlArray = dataObject.map((product) => {
      return replaceTemplate(templateCard, product);
    });

    res.end(
      templateOverview.replace("{%PRODUCT_CARDS%}", cardsHtmlArray.join(""))
    );

    // PRODUCT page
  } else if (pathname === "/product") {
    const product = dataObject[query.id];

    const output = replaceTemplate(templateProduct, product);
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(output);

    // API
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);

    // NOT FOUND page
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
