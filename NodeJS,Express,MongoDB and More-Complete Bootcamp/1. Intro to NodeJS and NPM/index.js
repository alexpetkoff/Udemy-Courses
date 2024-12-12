const fs = require('fs');

const hello = "Hello World!";
console.log(hello);

const textIn = fs.readFileSync("./txt/input.txt", "utf-8"); // takes two arguments - first the path to file, second the encoding type

const textOut = `This is what we know about the avocado:\n${textIn}.`;

fs.writeFileSync('./txt/output.txt', textOut);

console.log(textOut);  