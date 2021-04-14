import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [data, setData] = React.useState({
    name: "",
    email: "",
    });

    React.useEffect(() => {
        setData({
        name: currentUser.name || "",
        email: currentUser.email || "",
        });
    }, [currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onUpdateUser(data.name, data.email);
    }

    return (
        <section className="profile">
            <Header />
            <p className="profile__welcome">
                Привет, {currentUser.name}!
            </p>
            <form className="profile__form" onSubmit={handleSubmit} >
                <label className="profile__label">
                    Имя
            </label>
                <input className="profile__field" id="name" name="name" type="text"
                    required minLength="2" placeholder="Имя" value={data.name} />
                <label className="profile__label">
                    E-mail
            </label>
                <input className="profile__field" id="name" name="name" type="text"
                    required minLength="2" placeholder="Имя" value={data.email} />
                <button type="submit" className="profile__button">
                    Редактировать
                </button>
                <Link className="profile__link" to='/' onClick={props.onLogout} >Выйти из аккаунта</Link>
            </form>
        </section>
    )
}

export default Profile;

