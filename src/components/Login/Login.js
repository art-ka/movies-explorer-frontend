import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
    return (
        <section className="form">
            <Link to='/'>
                <img className="form__logo" src={logo} alt="Логотип" />
            </Link>
            <p className="form__welcome">
                Рады видеть!
        </p>
            <form className="form__form">
                <p className="form__name">E-mail</p>
                <input className="form__field form__field_input_email" id="email" name="email" type="email"
                    required />
                <span id="email-error" class="form__field-error"></span>
                <p className="form__name">Пароль</p>
                <input className="form__field form__field_input_password" id="password" name="password" type="password"
                    required />
                <span id="password-error" class="form__field-error"></span>
                <button type="submit" className="form__button-container form__button-container_login">Войти</button>
            </form>
            <div className="form__signin">
                <p>Ещё не зарегистрированы?
                <Link to="/signup" className="form__login-link"> Регистрация</Link> </p>
            </div>
        </section>
    )
}

export default Login;

