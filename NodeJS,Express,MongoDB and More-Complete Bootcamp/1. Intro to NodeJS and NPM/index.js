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

function replaceTemplate(template, product) {
  let output = template.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%COUNTRY%}/g, product.country);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);

  if (!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  }

  return output;
}

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
  const pathName = req.url;

  // OVERVIEW page
  if (pathName === "/overview" || pathName === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    const cardsHtmlArray = dataObject.map((product) => {
      return replaceTemplate(templateCard, product);
    });

    res.end(templateOverview.replace("{%PRODUCT_CARDS%}", cardsHtmlArray.join('')));

    // PRODUCT page
  } else if (pathName === "/product") {
    res.end("This is product page!");

    // API
  } else if (pathName === "/api") {
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
