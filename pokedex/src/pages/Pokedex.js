import { useEffect, useState } from 'react';
import Pokemon from '../components/Pokemon';

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemonsFromApi = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon').then(
      res => res.json()
    );

    response.results.forEach(async poke => {
      const response = await fetch(poke.url).then(res => res.json());

      const newElement = {
        id: response.id,
        name: capitalize(response.name),
        image: response.sprites.back_default,
        ability: capitalize(response.abilities[0].ability.name),
      };

      setPokemons(oldPokemons => [...oldPokemons, newElement]);
    });
  };

  useEffect(() => {
    getPokemonsFromApi();
  }, []);

  return (
    <Pokemon pokemons = {pokemons}/>
  );
};

export default Pokedex;
