import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
    return (
        <>
        <Header loggedIn={props.loggedIn} />
        <SearchForm 
        togglePreloader={props.togglePreloader}
        ontoggleCheckbox={props.ontoggleCheckbox} 
        movieShort={props.movieShort} 
        onsearchMovie={props.onsearchMovie} 
        searchInSaveMovie={props.searchInSaveMovie} 
        currentPath={props.currentPath} />
        <MoviesCardList 
        movies={props.movies} 
        message={props.message} 
        onSaveMovie={props.onSaveMovie} 
        saveMovie={props.saveMovie}
        onDeleteMovie={props.onDeleteMovie}
        isLoadSearch={props.isLoadSearch}
        togglePreloader={props.togglePreloader} 
        currentPath={props.currentPath} 
        // handleDeleteMovieSavePage={props.handleDeleteMovieSavePage} 
        />
        <Footer />
        </>
    )
}

export default SavedMovies;

