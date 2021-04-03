import React from 'react';
import './FilterCheckbox.css';
import Switch from './Switch';

function FilterCheckbox(props) {
    return (
        <section className="checkbox">
            <div className="checkbox__data">
                <Switch
                    handleColor="white"
                    offColor="white"
                    onColor="#2be080"
                    className="checkbox__button"
                // checked={props.checked}
                // onChange={checked => { }}
                />
                <p className="checkbox__name">Короткометражки</p>
            </div>
        </section>
    )
}

export default FilterCheckbox;
