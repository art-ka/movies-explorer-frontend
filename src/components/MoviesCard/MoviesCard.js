import React, { useState } from 'react';
import './MoviesCard.css';
import likeButton from '../../images/save1d.svg';
import likeButtonActive from '../../images/save2.svg';
import del from '../../images/delete.svg';

function MoviesCard(props) {
    const [visible, setVisible] = useState(true);
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

    function handleRemove(e) {
        e.preventDefault();
        console.log(`Remove movie: ${props.nameRU}`);
        props.onDeleteMovie(props);
        setIsSaved(false);
        setVisible(false);
    }

    let imageSource = props.image && `https://api.nomoreparties.co${props.image.url}`;
    if (typeof props.image === 'string') {
        imageSource = props.image;
    }

    return !visible ? null : (
        <li className="moviescard" id={props._id}>
            <a href={props.trailerLink || props.trailer} className="moviescard__link" target="_blank" rel="noreferrer">
                <img className="moviescard__image" src={imageSource} alt={props.nameRU} />
            </a>
            <div className="moviescard__info">
                <h2 className="moviescard__title">{props.nameRU}</h2>

                {props.saveMoviePath ?
                    <button className="moviescard__delete-button" type="button" onClick={handleRemove}>
                        <img className="moviescard__delete-image" src={del} alt="Удалить из сохраненных" />
                    </button>
                    :
                    <button className="moviescard__like-button" type="button" onClick={handleSave}>
                        <img className="moviescard__like-image"
                            src={movieLikeButtonSRC}
                            alt="Поставить лайк" />
                    </button>
                }
            </div>
            <p className="moviescard__time">
                {durationMovie(props.duration)}
            </p>
        </li>
    )
}

export default MoviesCard;
