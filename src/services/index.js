const pokeApi = process.env.NEXT_PUBLIC_POKEAPI;

export const getPokemonList = () => {
  const url = new URL(pokeApi + 'index.json');
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const getPokemonDetails = (id) => {
  const url = new URL(pokeApi + `pokemon/${id}.json`)
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
  });
};