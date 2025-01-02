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

const getDocPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const result = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(result.body.message);

    await writeFilePro('dog-img.txt', result.body.message);
    console.log('Random dog image saved to file!');
  } catch (error) {
    console.log(error.message);
  }
};

getDocPic();

// readFilePro(`${__dirname}/dog.txt`).then((data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((result) => {
//       console.log(result.body.message);

//       fs.writeFile('dog-img.txt', result.body.message, (err) =>
//         console.log('Dog image saved!')
//       );
//     })
//     .catch((error) => {
//       return console.log(error.message);
//     });
// });

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
