import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <div className="footer__block">
                <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__info">
                    <p className="footer__year">&copy; 2020</p>
                    <ul className="footer__links">
                        <li>
                            <a target="_blank" href="https://praktikum.yandex.ru/" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/" rel="noreferrer" className="footer__link footer__link_size_mobile">Github</a></li>
                        <li>
                            <a target="_blank" href="https://www.facebook.com/" rel="noreferrer" className="footer__link footer__link_size_last">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer;

