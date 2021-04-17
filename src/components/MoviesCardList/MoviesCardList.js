import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {

    // const [isLoadSearch, setIsLoadSearch] = React.useState(false);

    // function searchLoad() {
    //     setIsLoadSearch(true);
    // }

    function handleMoreBtn() {
        setMoreMovies(moviesList + moreMovies);
    }

    let width = window.innerWidth;
    console.log(width)

    const [moviesList, setMoviesList] = React.useState(0);
    const [moreMovies, setMoreMovies] = React.useState(0);

    React.useEffect(() => {
        if (width > 768) {
            setMoviesList(2);
            setMoreMovies(2);
        }
    }, [width] );

    return (
        <section className="movieslist">
            <span className="movieslist__not-found">{props.message}</span>
            {!props.isLoadSearch ? <Preloader/> : null }
            <ul className="movieslist__card" >
                {props.movies.map(movie => (<MoviesCard {...movie}
                    onSaveMovie={props.onSaveMovie}
                    onDeleteMovie={props.onDeleteMovie} key={movie.id}
                    // onChange={searchLoad} 
                    />))}
            </ul>
            {!props.isLoadSearch ? null :
            <button className="movieslist__more" onClick={handleMoreBtn}>Ещё</button>}
        </section>
    )
}

export default MoviesCardList;
