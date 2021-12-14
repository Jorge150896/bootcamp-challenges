import { Link } from 'react-router-dom';

import "../App.css"


const Pokemon = ({pokemons}) => {

    return(
        <div className="productsContainer">
            {pokemons.map(({id, name, image, ability}) =>{
            return(
        
               
                <figure className='productsContainer__product' key={id}>
                     <Link to={`/pokemon/${id}`}>
                    <img src={image} alt ={name} />
                    <p>{name}</p>
                    <p>{ability}</p>
                    </Link>           
                </figure>
               
                );
            } )}
        </div>
    )
}

export default Pokemon;
