import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {

    const saveMoviePath = (props.currentPath === "/saved-movies");

    return (
        <section className="checkbox">
            <div className="checkbox__data">
                <label className="checkbox__switch">
                    {saveMoviePath ?
                        <input type="checkbox" className="checkbox__input"
                            onChange={props.toggleCheckboxSave} />
                        :
                        <input type="checkbox" className="checkbox__input"
                            onChange={props.ontoggleCheckbox} />}
                    <span className="checkbox__slider" />
                </label>
                <p className="checkbox__name">Короткометражки</p>
            </div>
        </section>
    )
}

export default FilterCheckbox;
