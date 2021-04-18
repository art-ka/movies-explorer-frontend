import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {

    function handleMoreBtn() {
        setMoviesList(moviesList + moreMovies);
    }

    let width = window.innerWidth;

    const [moviesList, setMoviesList] = React.useState(0);
    const [moreMovies, setMoreMovies] = React.useState(0);

    React.useEffect(() => {
        if (width <= 1280) {
            setMoviesList(12);
            setMoreMovies(3);
        }
        if (width <= 768) {
            setMoviesList(8);
            setMoreMovies(2);
        }
        if ((width => 320) && (width <= 480)) {
            setMoviesList(5);
            setMoreMovies(2);
        }
    }, [width]);

    const foundClassName = (`movieslist__not-found ${!props.isLoadSearch ? 
        'movieslist__not-found-hidden' : 'movieslist__not-found' }`);

    const moreBtnClassName = (`movieslist__more ${moviesList >= props.movies.length ? 
        'movieslist__more-hidden' : 'movieslist__more' }`);

    const saveMoviePath = (props.currentPath === "/saved-movies");

    return (
        <>
        {saveMoviePath ? 
            <section className="movieslist">
            {!props.isLoadSearch ? <Preloader /> : null}
            <ul className="movieslist__card" >
                {props.saveMovie && props.saveMovie.length > 0 ?
                    props.saveMovie.slice(0, moviesList).map((saveMovie) => {
                        return <MoviesCard {...saveMovie}
                            onSaveMovie={props.onSaveMovie}
                            onDeleteMovie={props.onDeleteMovie}
                            saveMoviePath={saveMoviePath} 
                            handleDeleteMovieSavePage={props.handleDeleteMovieSavePage} 
                            key={saveMovie._id} />
                    }) :
                    <span className={foundClassName}>Ничего не найдено</span>
                }
            </ul>
        </section> 
        :
        <section className="movieslist">
            {!props.isLoadSearch ? <Preloader /> : null}
            <ul className="movieslist__card" >
                {props.movies && props.movies.length > 0 ?
                    props.movies.slice(0, moviesList).map((movie) => {
                        return <MoviesCard {...movie}
                            onSaveMovie={props.onSaveMovie}
                            onDeleteMovie={props.onDeleteMovie} key={movie.id} />
                    }) :
                    <span className={foundClassName}>Ничего не найдено</span>
                }
            </ul>
            {!props.isLoadSearch || props.movies.length === 0 ? null :
                <button className={moreBtnClassName} onClick={handleMoreBtn}>Ещё</button>}
        </section>
        }
        </>
    )
}

export default MoviesCardList;
