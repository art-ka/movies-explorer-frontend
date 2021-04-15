import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    console.log(props);
    const currentUser = React.useContext(CurrentUserContext);
    const [data, setData] = React.useState({
        name: currentUser.name || "",
        email: currentUser.email || "",
    });

    React.useEffect(() => {
        setData({
            name: currentUser.name || "",
            email: currentUser.email || "",
        });
    }, [currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onUpdateUser(data);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        })
    }

    return (
        <section className="profile">
            <Header loggedIn={props.loggedIn} />
            <p className="profile__welcome">
                Привет, {currentUser.name}!
            </p>
            <form className="profile__form" onSubmit={handleSubmit} >
                <label className="profile__label">
                    Имя
            </label>
                <input className="profile__field" id="name" name="name" type="text"
                    required minLength="2" placeholder="Имя" value={data.name} onChange={handleChange} />
                <label className="profile__label">
                    E-mail
            </label>
                <input className="profile__field" id="email" name="email" type="email"
                    required minLength="2" placeholder="email" value={data.email}
                    onChange={handleChange} />
                <button type="submit" className="profile__button">
                    Редактировать
                </button>
                <Link className="profile__link" to='/' onClick={props.onLogout} >Выйти из аккаунта</Link>
            </form>
        </section>
    )
}

export default Profile;

