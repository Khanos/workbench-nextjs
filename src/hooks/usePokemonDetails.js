import { useState, useEffect, useCallback } from 'react';
import { getPokemonDetails } from '../services'

export default function usePokemonDetails(id){
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const doGetPokemonDetails = useCallback(async () => {
    try {
      const response = await getPokemonDetails(id);
      if(!response) {
        throw new Error('Error fetching pokemon details')
      }
      setDetails(response);
    } catch (error) {
      setError(error.message || error)
    } finally {
      setLoading(false)
    }
  }, [id]);

  useEffect(() => {
    if(!details) {
      doGetPokemonDetails();
    }
  }, [details, doGetPokemonDetails]);

  return [details, loading, error];
};