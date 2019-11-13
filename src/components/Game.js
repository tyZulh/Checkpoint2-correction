import React from 'react'
import './Game.css'

const Game = ({data, index, remove}) =>{
  console.log(data);
  
  return (
    <div>
      <h1>
        {data.name}
      </h1>
      <img className='gameImg' src={data.background_image} alt={data.name}/>
      
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