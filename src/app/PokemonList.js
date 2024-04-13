'use client';
import Link from 'next/link';
import Image from 'next/image';
const pokeApi = process.env.NEXT_PUBLIC_POKEAPI;

const PokemonList = (props) => {
  const { pokemons } = props;
  return (
    <div className="grid grid-cols-4 gap-6">
      {pokemons.map((pokemon, index) => (
        <div key={index} className='bg-white text-black'>
          <Link href={`/pokemon/${pokemon.id}`}>
            <h3 className='p-2 text-lg font-bold'>{pokemon.name}</h3>
            <Image width="300" height="300" src={pokeApi + pokemon.image} alt={pokemon.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;