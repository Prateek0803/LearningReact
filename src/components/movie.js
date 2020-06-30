import React from 'react'

const Movie = ({name,prices})=>{
    return(
        <div>
            <h3>{name}</h3>
            <p>{prices}</p>
        </div>
    )
}

export default Movie;