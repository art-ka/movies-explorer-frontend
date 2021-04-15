import React, { useState } from 'react';
import './Header.css';
import { NavLink, Link, 
    // useLocation 
} from 'react-router-dom';
import logo from '../../images/logo.svg';
import icon from '../../images/icon__COLOR_icon-main.svg'

function Header(props) {

    // const location = useLocation();
    // const currentPath = location.pathname;

    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="header">
            <Link to='/'>
                <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            <div className={`header__black ${showMenu ? "header__black-page" : ""
                }`} />

            {props.loggedIn ?
                <>
                    <div className={`header__menu header__menu_login_yes
                        ${showMenu ? "header__menu_login_yes-active" : "header__menu_login_yes-hidden"
                        }`}>
                        <div
                            className={`header__close ${showMenu ? "header__burger-close" : "header__burger-close-hidden"
                                }`}
                            onClick={() => setShowMenu(!showMenu)}
                        ></div>
                        <NavLink to="/" className={`header__link ${showMenu ? "header__link_burger-menu" : "header__link-hidden"
                            }`}>
                            Главная</NavLink>
                        <NavLink to="/movies" className={`header__link header__link_burger-menu-line ${showMenu ? "header__link_burger-menu" : ""
                            }`}>
                            Фильмы</NavLink>
                        <NavLink to="/saved-movies" className={`header__link ${showMenu ? "header__link_burger-menu" : ""
                            }`}>
                            Сохраненные фильмы</NavLink>
                        <button className={`header__button header__button_login_yes
                        ${showMenu ? "header__button_login_yes-active" : ""
                            }`} type="button">
                            <NavLink to="/profile" className="header__link">
                                <p className="header__akk_login_yes">Аккаунт</p>
                            </NavLink>
                            <NavLink to="/profile" className="header__link header__link_login_icon">
                                <img className="header__icon" src={icon} alt="Иконка аккаунта" />
                            </NavLink>
                        </button>
                    </div>
                    <div className={`header__burger-menu ${showMenu ? "header__burger-menu-active" : ""
                        }`} onClick={() => setShowMenu(true)}>
                        <div className="header__line" />
                    </div>
                </>
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
            {/* {props.loggedIn ?
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
            } */}
        </header >
    )
}

export default Header;