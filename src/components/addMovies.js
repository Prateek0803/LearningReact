import React, { useState, useContext } from 'react'
import {MovieContext} from './movieListContext'

const AddMovies = ()=>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const[movies,setMovies] = useContext(MovieContext)


    const updateName = e =>{
        setName(e.target.value);
    }

    const updatePrice = e =>{
        setPrice(e.target.value);
    }

    const addMovie = e =>{
        e.preventDefault();
        setMovies(preMovies => [...preMovies,{name:name,price:price}])
    }

    const myStyle = {
        textAlign:'center',
        padding:'10px'
    }
    
    return(
        <div style={myStyle}>
            <form onSubmit = {addMovie}>
                <input type="text" name="name" value={name} onChange={updateName} />
                <input type="text" name="price" value={price} onChange={updatePrice} />
                <button>Submit</button>
            </form>
        </div>
    );
}


export default AddMovies;