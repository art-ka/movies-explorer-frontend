import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {
    return (
        <>
        <Header loggedIn={props.loggedIn} />
        <SearchForm 
        togglePreloader={props.togglePreloader}
        ontoggleCheckbox={props.ontoggleCheckbox}
        onsearchMovie={props.onsearchMovie} 
        />
        <MoviesCardList 
        movies={props.movies} 
        message={props.message} 
        onSaveMovie={props.onSaveMovie} 
        onDeleteMovie={props.onDeleteMovie}
        isLoadSearch={props.isLoadSearch}
        togglePreloader={props.togglePreloader}
        />
        <Footer />
        </>
    )
}

export default Movies;

