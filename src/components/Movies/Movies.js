import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies() {
    return (
        <>
        <SearchForm />
        {/* <Preloader />  */}
        <MoviesCard />
        </>
    )
}

export default Movies;

