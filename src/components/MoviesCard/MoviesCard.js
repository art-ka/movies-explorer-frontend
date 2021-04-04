import React from 'react';
import './MoviesCard.css';
// import likeButton from '../../images/save1d.svg';
import likeButtonActive from '../../images/save2.svg';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import movie from '../../images/movie.png';
// import del from '../../images/delete.svg';

function MoviesCard(props) {

    return (
        <li className="moviescard">
            <img className="moviescard__image" src={movie} alt="Gimme Danger: История Игги и The Stooges" />
            <div className="moviescard__info">
                <h2 className="moviescard__title">Gimme Danger: История Игги и The Stooges</h2>
                <button className="moviescard__like-button" type="button">
                    <img className="moviescard__like-image" src={likeButtonActive} alt="Поставить лайк" />
                </button>

                {/* кнопка удаления */}

                {/* <button className="moviescard__delete-button moviescard__delete-button_hidden" type="button" >
                    <img className="moviescard__delete-image" src={del} alt="Удалить из сохраненных" />
                </button> */}
            </div>
            <p className="moviescard__time">1ч42м</p>
        </li>
    )
}

export default MoviesCard;
