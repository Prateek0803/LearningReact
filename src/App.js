import React, { useState } from 'react';
import MovieList from './components/movieList'
import Nav from './components/Nav'
import {MovieProvider} from './components/movieListContext'
import AddMovies from './components/addMovies'
import './App.css';

function App() {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <AddMovies />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
