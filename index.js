const { fetchBreedDescription } = require('./breedFetcher');

let breedName = process.argv.slice(2);
breedName = breedName.toString();
let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    //console.log('Error fetch details:', error);
  } else {
      console.log(desc);
    }
});