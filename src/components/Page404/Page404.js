import React from 'react';
import './Page404.css';
import { useHistory } from 'react-router-dom';

function Page404() {
    const history = useHistory();

    return (
        <section className="page404">
        <h1 className="page404__title">404</h1>
        <p className="page404__text">Страница не найдена</p>
        <p className="page404__link" onClick={() => history.goBack()}>
                Назад
            </p>
        </section>
    )
}

export default Page404;