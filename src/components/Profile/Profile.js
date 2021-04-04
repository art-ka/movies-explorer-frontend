import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile() {
    return (

        <section className="profile">
            <Header />
            <p className="profile__welcome">
                Привет, Виталий!
            </p>
            <form className="profile__form">
                <label className="profile__label">
                    Имя
            </label>
                <input className="profile__field" id="name" name="name" type="text"
                    required minLength="2" placeholder="Имя" value="Виталий" />
                <label className="profile__label">
                    E-mail
            </label>
                <input className="profile__field" id="name" name="name" type="text"
                    required minLength="2" placeholder="Имя" value="pochta@yandex.ru" />
                <button type="submit" className="profile__button">
                    Редактировать
                </button>
                <Link className="profile__link" to='/'>Выйти из аккаунта</Link>
            </form>
        </section>
    )
}

export default Profile;

