import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <div className="footer__block">
                <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__info">
                    <p>&copy; 2020</p>
                    <ul class="footer__links">
                        <li>
                            <a target="_blank" href="https://praktikum.yandex.ru/" rel="noreferrer" class="footer__link">Яндекс.Практикум</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/" rel="noreferrer" class="footer__link">Github</a></li>
                        <li>
                            <a target="_blank" href="https://www.facebook.com/" rel="noreferrer" class="footer__link">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer;

