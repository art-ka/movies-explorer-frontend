import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
    return (
        <section className="form">
            <Link to='/'>
                <img className="form__logo" src={logo} alt="Логотип" />
            </Link>
            <p className="form__welcome">
                Добро пожаловать!
        </p>
            <form className="form__form">
                <p className="form__name">Имя</p>
                <input className="form__field form__field_input_name" id="name" name="name" type="text"
                    required minLength="2"/>
                    <span id="name-error" class="form__field-error"></span>
                <p className="form__name">E-mail</p>
                <input className="form__field form__field_input_email" id="email" name="email" type="email"
                    required />
                    <span id="email-error" class="form__field-error"></span>
                <p className="form__name">Пароль</p>
                <input className="form__field form__field_input_password" id="password" name="password" type="password"
                    required />
                    <span id="password-error" class="form__field-error">Что-то пошло не так...</span>
                <button type="submit" className="form__button-container">Зарегистрироваться</button>
            </form>
            <div className="form__signin">
                <p>Уже зарегистрированы?
                <Link to="/signin" className="form__login-link"> Войти</Link> </p>
            </div>
        </section>
    )
}

export default Register;