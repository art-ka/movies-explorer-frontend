import React from 'react';
import './NavTab.css';
import { HashLink } from 'react-router-hash-link';


function NavTab() {
    return (
        <section className="nav">
            <button className="nav__button" type="button">
                <HashLink to="/#aboutproject" className="nav__link">
                    О проекте
        </HashLink>
            </button>
            <button className="nav__button" type="button">
                <HashLink to="/#techs" className="nav__link">
                    Технологии
        </HashLink>
            </button>
            <button className="nav__button" type="button">
                <HashLink to="/#about" className="nav__link">
                    Студент
        </HashLink>
            </button>
        </section>
    )
}

export default NavTab;

