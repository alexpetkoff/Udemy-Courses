// const add = require('./helpers.js').add
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Hello from nodeJS server!')
// })

// server.listen(3000)

// console.log(add(2, 2))

// const express = require('express');

// const app = express();

// app.get("/", (req, res) => {
//     res.send('Hello from ExpressJS');
// });

// app.listen(3000);

const fs = require('fs');
const fileName = "target.txt"

fs.watch(fileName, () => console.log('File changed!'));