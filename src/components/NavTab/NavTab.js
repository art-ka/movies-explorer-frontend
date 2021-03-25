import React from 'react';
import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
    return (
        <section className="nav">
            <button className="nav__button" type="button">
                <Link to="/" className="nav__link">
                    О проекте
        </Link>
            </button>
            <button className="nav__button" type="button">
                <Link to="/" className="nav__link">
                    Технологии
        </Link>
            </button>
            <button className="nav__button" type="button">
                <Link to="/" className="nav__link">
                    Студент
        </Link>
            </button>
        </section>
    )
}

export default NavTab;

