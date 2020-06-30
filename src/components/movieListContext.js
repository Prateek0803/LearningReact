import React, {useState, createContext } from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props)=>{
    const[movies,setMovies] = useState([
        {
            name:'Harry Potter',
            price:'150 INR',
            id:1
        },
        {
            name:'MS Dhoni The untold Story',
            price:'500 INR',
            id:2
        },
        {
            name:'KGF Chapter-1',
            price:'300 INR',
            id:3
        }
    ]);
    return(
        <div>
            <MovieContext.Provider value={[movies,setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}