import React from 'react';
import './Portfolio.css';
import linkIcon from '../../images/text__COLOR_font-main.svg';

function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <a target="_blank" href="https://github.com/" rel="noreferrer" className="portfolio__block">
                <p className="portfolio__link">Статичный сайт</p>
                <img className="portfolio__icon" src={linkIcon} alt="Ссылки портфолио" /></a>
                <div className="portfolio__line" />
                <a target="_blank" href="https://github.com/" rel="noreferrer" className="portfolio__block">
                <p className="portfolio__link">Адаптивный сайт</p>
                <img className="portfolio__icon" src={linkIcon} alt="Ссылки портфолио" /></a>
                <div className="portfolio__line" />
                <a target="_blank" href="https://github.com/" rel="noreferrer" className="portfolio__block">
                <p className="portfolio__link">Одностраничное приложение</p>
                <img className="portfolio__icon" src={linkIcon} alt="Ссылки портфолио" /></a>
        </section>
    )
}

export default Portfolio;

