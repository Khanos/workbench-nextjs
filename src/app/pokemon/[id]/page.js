'use client';
import Link from 'next/link';
import usePokemonDetails from '../../../hooks/usePokemonDetails'
const pokeApi = process.env.NEXT_PUBLIC_POKEAPI;


export default function PokemonDetails({params}) {
  const { id: pokemonId } = params;
  const [details, loading, error] = usePokemonDetails(pokemonId || 1);

  const showDetails = (details) => {
    console.log(details)
    return <div className='p-4 flex flex-col justify-center'>
      <Link href="/">Back to home</Link>
      <h3 className='text-lg'>{details.name}</h3>
      <img width='300' height='300' src={pokeApi + details.image} alt={details.name} />
      <ul>
        {details.stats.map((item, index) => {
          return <li className='text-base' key={index}>
            <span className='font-bold mr-2'>{item.name}:</span>
            <span className=''>{item.value}</span>
          </li>
        })}
      </ul>
      <div>{details.type.join(', ')}</div>
    </div>
  };
  if(error) return <>Ups something bad happens</>
  return (
    <div>
      {loading ? <>Loading</>: showDetails(details)}
    </div>
  );
};