import React from 'react';
import './FilterCheckbox.css';
import Switch from './Switch';

function FilterCheckbox(props) {
    return (
        <section className="checkbox">
                <Switch
                    handleColor="white"
                    offColor="white"
                    onColor="#2be080"
                    // checked={props.checked}
                    // onChange={checked => { }}
                />
            <p className="checkbox__name">Короткометражки</p>
        </section>
    )
}

export default FilterCheckbox;
