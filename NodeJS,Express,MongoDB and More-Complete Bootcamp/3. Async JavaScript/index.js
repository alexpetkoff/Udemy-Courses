const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((result) => {
      console.log(result.body);

      fs.writeFile('dog-img.txt', result.body.message, (err) =>
        console.log('Dog image saved!')
      );
    })
    .catch((error) => {
      return console.log(error.message);
    });
});
