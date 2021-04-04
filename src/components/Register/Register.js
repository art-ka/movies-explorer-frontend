import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
    return (
        <section className="register">
            <Link to='/'>
                <img className="register__logo" src={logo} alt="Логотип" />
            </Link>
            <p className="register__welcome">
                Добро пожаловать!
        </p>
            <form className="register__form">
                <p className="register__name">Имя</p>
                <input className="register__field register__field_input_name" id="name-input" name="name" type="text"
                    required minLength="2"/>
                    <span id="name-input-error" class="register__field-error"></span>
                <p className="register__name">E-mail</p>
                <input className="register__field register__field_input_email" id="email" name="email" type="email"
                    required />
                    <span id="name-input-error" class="register__field-error"></span>
                <p className="register__name">Пароль</p>
                <input className="register__field register__field_input_password" id="password" name="password" type="password"
                    required />
                    <span id="name-input-error" class="register__field-error">Что-то пошло не так...</span>
                <button type="submit" className="register__button-container">Зарегистрироваться</button>
            </form>
            <div className="register__signin">
                <p>Уже зарегистрированы?
                <Link to="/signin" className="register__login-link"> Войти</Link> </p>
            </div>
        </section>
    )
}

export default Register;