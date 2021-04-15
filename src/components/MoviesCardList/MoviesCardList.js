import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    console.log(props)
    return (
        <section className="movieslist">
            <span className="movieslist__not-found">{props.message}</span>
            <ul className="movieslist__card">
                {props.movies.map(movie => (<MoviesCard {...movie}/>))}
            </ul>
            <button className="movieslist__more">Ещё</button>
        </section>
    )
}

export default MoviesCardList;
