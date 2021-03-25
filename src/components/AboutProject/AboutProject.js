import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="aboutproject">
            <h2 className="aboutproject__title">О проекте</h2>
            <ul class="aboutproject__table">
                <li class="aboutproject__cell">
                    <h3 class="aboutproject__heading">Дипломный проект включал 5 этапов</h3>
                    <p class="aboutproject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li class="aboutproject__cell">
                    <h3 class="aboutproject__heading">На выполнение диплома ушло 5 недель</h3>
                    <p class="aboutproject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="aboutproject__time">
                <div className="aboutproject__timetable">
                    <p className="aboutproject__name">1 неделя</p>
                    <p className="aboutproject__description">Back-end</p>
                </div>
                <div className="aboutproject__timetable aboutproject__timetable_week_four">
                    <p className="aboutproject__name">4 недели</p>
                    <p className="aboutproject__description">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;

