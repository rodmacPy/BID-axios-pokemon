import { useFetch } from './hooks/useFetch';
export const App = () => {
  const { data, getFetch } = useFetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
  const mostrarPokemones = () => {
    getFetch();
  }
  return (
    <div className='container'>
      <h1>Pokemones</h1>
      <button onClick={mostrarPokemones}>Fetch Pokemon</button>
      <ul className='pokemons'>
        {data?.map(pokemon =>
          <li key={pokemon.name}>{pokemon.name}</li>
        )}
      </ul>
    </div>
  )
}
