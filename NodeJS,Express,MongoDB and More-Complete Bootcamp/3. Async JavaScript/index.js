const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('Could not find file!');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write a file!');
      resolve('Success writing a file!');
    });
  });
};

readFilePro(`${__dirname}/dog.txt`).then((data) => {
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((result) => {
      console.log(result.body.message);

      fs.writeFile('dog-img.txt', result.body.message, (err) =>
        console.log('Dog image saved!')
      );
    })
    .catch((error) => {
      return console.log(error.message);
    });
});

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((result) => {
//       console.log(result.body);

//       fs.writeFile('dog-img.txt', result.body.message, (err) =>
//         console.log('Dog image saved!')
//       );
//     })
//     .catch((error) => {
//       return console.log(error.message);
//     });
// });
