import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return (
        <section className="checkbox">
            <div className="checkbox__data">
                <label className="checkbox__switch">
                    <input type="checkbox" className="checkbox__input"/>
                    <span className="checkbox__slider"/>
                </label>
                <p className="checkbox__name">Короткометражки</p>
            </div>
        </section>
    )
}

export default FilterCheckbox;
