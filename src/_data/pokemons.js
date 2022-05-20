const axios = require('axios');

module.exports = async () => {
  let pokemons = [];
  // Requesting the first 9 for quicker build time
  // Go on, change the 'limit' parameter to 1000, I dare you - go nuts!
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=9');
  for (const key of response.data.results) {
    const fetch = await axios.get(key.url)
    pokemons.push(fetch.data)
  }
  // In case you want to see it printed in the console :)
  // console.log(pokemons)
  return pokemons;
}