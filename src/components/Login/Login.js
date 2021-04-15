import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login(props) {

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // здесь обрабатываем вход в систему
        props.onLogin(data.email, data.password);
    }

    return (
        <section className="form">
            <Link to='/'>
                <img className="form__logo" src={logo} alt="Логотип" />
            </Link>
            <p className="form__welcome">
                Рады видеть!
        </p>
            <form className="form__form" onSubmit={handleSubmit} >
                <p className="form__name">E-mail</p>
                <input className="form__field form__field_input_email" id="email" name="email" type="email"
                    required value={data.email} onChange={handleChange}/>
                <span id="email-error" className="form__field-error"></span>
                <p className="form__name">Пароль</p>
                <input className="form__field form__field_input_password" id="password" name="password" type="password"
                    required onChange={handleChange} value={data.password} />
                <span id="password-error" className="form__field-error"></span>
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

