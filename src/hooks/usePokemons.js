import { useState, useEffect } from 'react';
import { getPokemonList } from '../services';

export default function usePokemons(){
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const doGetPokemons = async () => {
    try {
      const response = await getPokemonList();
      if(!response) {
        throw new Error('Unable to fetch pokemons');
      }
      setPokemons(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false)
    }
  }
  useEffect(()=> {
    if(pokemons.length === 0) {
      doGetPokemons();
    }
  }, [pokemons]);
  return [pokemons, loading, error];
}