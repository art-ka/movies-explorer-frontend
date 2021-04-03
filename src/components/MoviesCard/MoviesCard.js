import React from 'react';
import './MoviesCard.css';
// import likeButton from '../../images/save1d.svg';
import likeButtonActive from '../../images/save2.svg';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import movie from '../../images/movie.png';

function MoviesCard(props) {
    // const currentUser = React.useContext(CurrentUserContext);

    // // Определяем, являемся ли мы владельцем текущей карточки
    // const isOwn = props.movie.owner === currentUser._id;

    // // Создаём переменную, которую после зададим в `className` для кнопки удаления
    // const cardDeleteButtonClassName = (
    //     `moviescard__delete-button ${isOwn ? 'moviescard__delete-button_visible' : 'moviescard__delete-button_hidden'}`
    // );

    // // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    // const isLiked = props.movie.likes.some(i => i === currentUser._id);

    // // Создаём переменную, которую после зададим в `className` для кнопки лайка
    // const cardLikeButtonClassName = (
    //     `moviescard__like-image ${isLiked ? 'moviescard__like-image-active' : 'moviescard__like-image'}`
    // );

    return (
        <li className="moviescard">
            <img className="moviescard__image" src={movie} alt="Gimme Danger: История Игги и The Stooges" />
            <div className="moviescard__info">
                <h2 className="moviescard__title">Gimme Danger: История Игги и The Stooges</h2>
                <button className="moviescard__like-button" type="button">
                    <img className="moviescard__like-image moviescard__like-image-active" src={likeButtonActive} alt="Поставить лайк" />
                </button>
            </div>
            <button className="moviescard__delete-button_hidden" type="button" />
            <p className="moviescard__time">1ч42м</p>
        </li>
    )
}

export default MoviesCard;
