'use client';
import PokemonList from "./PokemonList";
import usePokemons from '../hooks/usePokemons'

export default function Home() {
  const [pokemons, loading, error] = usePokemons();
  if(error) {
    return <>Ups something bad happens</>
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-6">Pokemon List</h1>
        { !loading && pokemons ? <PokemonList pokemons={pokemons} /> : <p>Loading...</p> }
      </div>
    </main>
  );
}
