import React from 'react';
import './AboutMe.css';
import photo from '../../images/foto1.jpg';

function AboutMe() {
    return (
        <section className="about" id="about">
            <h2 className="about__title">Студент</h2>
            <div className="about__data">
                <div className="about__description">
                    <h3 className="about__name">Екатерина</h3>
                    <p className="about__job">Фронтенд-разработчик</p>
                    <p className="about__text">С июля 2020 года начала учиться web-разработке. До этого более 13 лет работала
                    менеджером по интернет-маркетингу (таргетированная реклама, контекстная, SMM, SEO, аудиты сайтов (технические и юзабилити), 
                    e-mail маркетинг). Для меня переход в web-разработку выглядит логичным продолжением работы с сайтами 
                    только в новом проявлении. Я также продолжаю думать об удобстве пользователей и решении задач бизнеса клиентов, но теперь не ставлю
                    ТЗ программисту, а сама пишу код и тестирую результат. </p>
                    <div className="about__links">
                        <a target="_blank" href="https://www.facebook.com/" className="about__link" rel="noreferrer">Facebook</a>
                        <a target="_blank" href="https://github.com/art-ka" className="about__link" rel="noreferrer">Github</a>
                    </div>
                </div>
                <img className="about__photo" src={photo} alt="Фото студента" />
            </div>
        </section>
    )
}

export default AboutMe;