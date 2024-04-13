'use client';
import Link from 'next/link';
import Image from 'next/image';
import usePokemonDetails from '../../../hooks/usePokemonDetails'
const pokeApi = process.env.NEXT_PUBLIC_POKEAPI;


export default function PokemonDetails({params}) {
  const { id: pokemonId } = params;
  const [details, loading, error] = usePokemonDetails(pokemonId || 1);

  const showDetails = (details) => {
    return <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white p-5 text-black">
      <Link className='block w-auto mb-5 font-bold text-blue-600 hover:text-blue-400' href="/">Back to home</Link>
      <Image className="w-full" src={pokeApi + details.image} alt={details.name} width="200" height="200" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex justify-center">{details.name}</div>
        <ul>
          {details.stats.map((item, index) => {
            return (
              <li key={index}>
                <span className="font-bold">{item.name}:</span> {item.value}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="px-6 pt-4 pb-2">
        {details.type.map((type, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {type}
          </span>
        ))}
      </div>
    </div>
  };
  if(error) return <>Ups something bad happens</>
  return (
    <div className='flex justify-center items-center p-10'>
      {loading ? <>Loading</>: showDetails(details)}
    </div>
  );
};