const request = require('request');

let breedName = process.argv.slice(2);
breedName = breedName.toString();
let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

const fetchBreedDescription = function(breedName, callback) {
  callback(url , (error, response, body) => {
    if (error !== null) {
      console.log('error:', error); // Print the error if one occurred
    }
    if (breedName === '') {
      console.log('Please enter a breed');
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  });
};

fetchBreedDescription(breedName, request);

module.exports = { fetchBreedDescription };