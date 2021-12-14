import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';


const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

const PokemonPage = () => {
    const { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState([]);
    console.log('Primer render');

    const getPokemonFromApi = async () => {
      console.log('LLamar a la api de pokemon', pokemonId);

      
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
          res => res.json()
        );
        console.log(response)
          const newElement = {
            id: response.id,
            name: capitalize(response.name),
            image: response.sprites.back_default,
            ability: capitalize(response.abilities[0].ability.name),
          };
          setPokemon(newElement);
    };
  
    useEffect(() => {
        getPokemonFromApi();
    }, []);
  
    return (
      <div>
        <figure className='productsContainer__product'>
        <h1>{pokemonId} </h1>
        <h1>{pokemon.name} </h1>
        <h1>{pokemon.ability} </h1>
        <img src={pokemon.image} alt ={pokemon.name} style={{height:200}} />
        </figure>
      </div>
    );
}
export default PokemonPage;