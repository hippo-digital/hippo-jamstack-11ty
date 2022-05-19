const axios = require('axios');

module.exports = async () => {
  let pokemons = [];
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  for (const key of response.data.results) {
    // console.log(key)
    // pokemons.push({name: key.name})
    const fetch = await axios.get(key.url)
    pokemons.push(fetch.data)
  }
  console.log(pokemons)
  return pokemons;
}