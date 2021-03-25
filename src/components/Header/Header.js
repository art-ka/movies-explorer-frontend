import React from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import icon from '../../images/icon__COLOR_icon-main.svg'

function Header(props) {

    return (
        <header className="header">
            <Link to='/'>
                <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            {props.loggedIn ?
                <div className="header__menu">
                    <NavLink to="/movies" className="header__link">
                        Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="header__link">
                        Сохраненные фильмы</NavLink>
                    <button className="header__button" type="button">
                        <NavLink to="/profile" className="header__link">
                            Аккаунт
                    <div className="header__account">
                                <img className="header__icon" src={icon} alt="Иконка аккаунта" />
                            </div>
                        </NavLink>
                    </button>
                </div>
                :
                <div className="header__menu">
                    <NavLink to="/signup" className="header__link">
                        Регистрация</NavLink>
                    <button className="header__button header__button_type_green" type="button">
                        <NavLink to="/signin" className="header__link">
                            Войти
    </NavLink>
                    </button>
                </div>
            }
        </header >
    )
}

export default Header;