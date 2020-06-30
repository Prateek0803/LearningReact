import React, { useContext } from 'react'
import {MovieContext} from './movieListContext'
import Movie from './movie'

const Nav = ()=>{
    const [movies,setMovies] = useContext(MovieContext)
    const myStyle = {
        backgroundColor:'red',
        color:'white',
        padding:'10px',
        display:'flex',
        justifyContent:'space-around',
    }

    return(
        <div style={myStyle}> 
            <h3>RusN-</h3>
    <h3>List of movies: {movies.length}</h3>
        </div>
    )
}

export default Nav;