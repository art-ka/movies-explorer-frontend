import React, { useState } from 'react';
import './MoviesCard.css';
import likeButton from '../../images/save1d.svg';
import likeButtonActive from '../../images/save2.svg';
// import movie from '../../images/movie.png';
// import del from '../../images/delete.svg';

function MoviesCard(props) {

    // const [saveButton, setSaveButton] = useState(false);
    const [isSaved, setIsSaved] = useState(props.isSaved);

    const movieLikeButtonSRC = isSaved ? likeButtonActive : likeButton;

    function durationMovie(min) {
        const hours = Math.trunc(min / 60);
        const minutes = min % 60;
        return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
    }

    function handleSave(e) {
        e.preventDefault();
        if (isSaved) {
            console.log(`Delete movie: ${props.nameRU}`);
            props.onDeleteMovie(props);
        } else {
            console.log(`Save movie: ${props.nameRU}`);
            props.onSaveMovie(props);
        }
        setIsSaved(!isSaved);
        
    }

    return (

        <li className="moviescard">
            <img className="moviescard__image" src={props.image && `https://api.nomoreparties.co${props.image.url}`} alt={props.nameRU} />
            <div className="moviescard__info">
                <h2 className="moviescard__title">{props.nameRU}</h2>
                <button className="moviescard__like-button" type="button" onClick={handleSave}>
                    <img className="moviescard__like-image"
                        src={movieLikeButtonSRC}
                        alt="Поставить лайк" />
                </button>

                {/* кнопка удаления */}

                {/* <button className="moviescard__delete-button moviescard__delete-button_hidden" type="button" >
                    <img className="moviescard__delete-image" src={del} alt="Удалить из сохраненных" />
                </button> */}
            </div>
            <p className="moviescard__time">
                {durationMovie(props.duration)}
            </p>
        </li>
    )
}

export default MoviesCard;
