import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import button from '../../images/find.svg';


function SearchForm(props) {

    const [searchTerm, setSearchTerm] = React.useState("");
    const [errors, setErrors] = React.useState({});
    const saveMoviePath = (props.currentPath === "/saved-movies");

    const handleChange = event => {
        const name = event.target.name;
        setSearchTerm(event.target.value);
        setErrors({ ...errors, [name]: event.target.validationMessage });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submit");
        if(saveMoviePath) {
            props.searchInSaveMovie(searchTerm);
            console.log(`Поиск среди сохраненных фильмов по запросу: ${searchTerm}`);
        } else {
        props.onsearchMovie(searchTerm);
        console.log(`Поиск среди всех фильмов по запросу: ${searchTerm}`);
    }
    }

    function handleEnterKeyPressed(e) {
        if (e.key === "Enter") {
            props.onsearchMovie(searchTerm);
        }
    }



    return (
        <section className="searchform">
            <form className="searchform__data" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="text"
                    placeholder="Фильм"
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyPress={handleEnterKeyPressed}
                    className="searchform__input"
                    required minLength="2" maxLength="30"
                />
                <button className="searchform__button" type="submit">
                    <img src={button} alt="Кнопка поиска" />
                </button>
                <span id="searchform-input-error" className="searchform__input-error">{errors.text}</span>
            </form>
            <FilterCheckbox ontoggleCheckbox={props.ontoggleCheckbox} />
        </section>
    )
}

export default SearchForm;