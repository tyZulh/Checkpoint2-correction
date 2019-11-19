import React from 'react'
import {Link} from 'react-router-dom'

import './Game.css'

const Game = ({data, index, remove}) =>{
  console.log(data);
  
  return (
    <div>
      <h1>
        {data.name}
      </h1>
      <Link to={`/jeu/screenshots/${data.id}`}>
        <img className='gameImg' src={data.background_image} alt={data.name}/>
      </Link> 
      
      <div>
        Genres : 
        {data.genres.map(genre => {
          return(
            <span>
              {genre.name} 
            </span>
          )
        })}
      </div>
      <input type='button' onClick={()=>remove(index)} value = 'ERASE'/>
    </div>
  )
}

export default Game