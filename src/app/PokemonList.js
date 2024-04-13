'use client';
import Link from 'next/link';
const pokeApi = process.env.NEXT_PUBLIC_POKEAPI;

const PokemonList = (props) => {
  const { pokemons } = props;
  return (
    <div className="grid grid-cols-4 gap-6">
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <Link href={`/pokemon/${pokemon.id}`}>
            <h3>{pokemon.name}</h3>
            <img src={pokeApi + pokemon.image} alt={pokemon.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;