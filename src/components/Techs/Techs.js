import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section className="techs" id="techs">
            <div className="techs__block">
                <h2 className="techs__title">Технологии</h2>
                <h3 className="techs__heading">7 технологий</h3>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии,
            которые применили в дипломном проекте.</p>
                <div className="techs__list">
                    <div className="techs__types">
                        <p className="techs__type">HTML</p>
                    </div>
                    <div className="techs__types">
                        <p className="techs__type">CSS</p>
                    </div>
                    <div className="techs__types">
                        <p className="techs__type">JS</p>
                    </div>
                    <div className="techs__types">
                        <p className="techs__type">React</p>
                    </div>
                    <div className="techs__types">
                        <p className="techs__type">Git</p>
                    </div>
                    <div className="techs__types">
                        <p className="techs__type">Express.js</p>
                    </div>
                    <div className="techs__types">
                        <p className="techs__type">mongoDB</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Techs;

