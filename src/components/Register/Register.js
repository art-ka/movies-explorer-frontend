import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register(props) {

    const [errors, setErrors] = React.useState({});

    const [data, setData] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onRegister(data.name, data.email, data.password)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        })
        setErrors({ 
            ...errors, 
            [name]: e.target.validationMessage });
    }

    return ( 
        <section className="form">
            <Link to='/'>
                <img className="form__logo" src={logo} alt="Логотип" />
            </Link>
            <p className="form__welcome">
                Добро пожаловать!
        </p>
            <form className="form__form" onSubmit={handleSubmit}>
                <p className="form__name">Имя</p>
                <input className="form__field form__field_input_name" id="name" name="name" type="text"
                    required minLength="2" onChange={handleChange} />
                    <span id="name-error" className="form__field-error">{errors.name}</span>
                <p className="form__name">E-mail</p>
                <input className="form__field form__field_input_email" id="email" name="email" type="email"
                    required onChange={handleChange} />
                    <span id="email-error" className="form__field-error">{errors.email}</span>
                <p className="form__name">Пароль</p>
                <input className="form__field form__field_input_password" id="password" name="password" type="password"
                    required onChange={handleChange} />
                    <span id="password-error" className="form__field-error">{errors.password}</span>
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