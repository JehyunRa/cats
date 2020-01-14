// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionDone) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) functionDone(data);
    else if (error) functionDone(data);
  });
};

module.exports = breedDetailsFromFile;