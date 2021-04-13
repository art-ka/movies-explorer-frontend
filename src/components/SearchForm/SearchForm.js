import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import button from '../../images/find.svg';


function SearchForm() {

    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <section className="searchform">
            <form className="searchform__data">
                <input
                    type="text"
                    placeholder="Фильм"
                    value={searchTerm}
                    onChange={handleChange}
                    className="searchform__input"
                    required minLength="2" maxLength="30"
                />
                <span id="searchform-input-error" className="searchform__input-error" />
                <button className="searchform__button" type="submit">
                    <img src={button} alt="Кнопка поиска" />
                </button>
            </form>
            <FilterCheckbox />
        </section>
    )
}

export default SearchForm;