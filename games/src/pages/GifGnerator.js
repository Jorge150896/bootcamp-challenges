import axios from 'axios'
import { useState } from 'react';

import './GifGenerator.css'
const GifGenerator = () => {

    const [query,setQuery] = useState('saitama')
    const[gifs,setGifs] =useState([])

    const handleGifs = async () => {
        const response = await axios.get('https://api.giphy.com/v1/gifs/search',{
            params: {
                api_key: process.env.REACT_APP_GIPHY_KEY_NAME,
                q:query,
                limit:10,
            },
        });
        setGifs(response.data.data)
    }

    return(
        <div className="gifGenerator">
           <div className='gifGenerator__search'>
           <input type="text" onChange={(e)=>setQuery(e.target.value)}/>
            <button onClick={handleGifs}>New Gifs</button>
           </div>

            <div className='gifs'>
                {gifs.map(({images,id})=>{
                    console.log(images)
                    return <img src={images.fixed_height_small.url} alt="" key={id}/>
                })}
            </div>

        </div>
    )
}


export default GifGenerator