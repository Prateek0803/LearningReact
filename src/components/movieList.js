import React, { useState, useContext } from 'react'
import Movie from './movie'
import { MovieContext } from './movieListContext'

const MovieList = ()=>{
  const [movies,setMovies] = useContext(MovieContext)
    const myStyle={
        fontFamily:'Arial',
        textAlign:'center'
    }

    return(
        <div style={myStyle}>
           {movies.map(movie=>(
               <Movie name={movie.name} prices={movie.price} key={movie.id}/>
           ))}
        </div>
    );
}

export default MovieList;



