import React from 'react';
import useFormWithValidation from '../../utils/useFormWithValidation';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import button from '../../images/find.svg';


function SearchForm(props) {
    const saveMoviePath = (props.currentPath === "/saved-movies");

    const { values, handleChange, errors, isValid } = useFormWithValidation({});

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submit");
        if (saveMoviePath) {
            if (isValid) {
                e.preventDefault();
                props.searchInSaveMovie(values.search);
                console.log(`Поиск среди сохраненных фильмов по запросу: ${values.search}`);
            }
        } else {
            if (isValid) {
                props.onsearchMovie(values.search);
                console.log(`Поиск среди всех фильмов по запросу: ${values.search}`);
            }
        }
    }

    function handleEnterKeyPressed(e) {
        if (e.key === "Enter") {
            if (saveMoviePath) {
                if (isValid) {
                    e.preventDefault();
                    props.searchInSaveMovie(values.search);
                }
            } else {
                if (isValid) {
                    e.preventDefault();
                    props.onsearchMovie(values.search);
                }
            }
        }
    }

    return (
        <section className="searchform">
            <form className="searchform__data" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Фильм"
                    onChange={handleChange}
                    onKeyPress={handleEnterKeyPressed}
                    className="searchform__input"
                    required minLength="2" maxLength="30"
                />
                <span id="searchform-input-error" className="searchform__input-error">{errors.search}</span>
                <button className="searchform__button" type="submit" disabled={!isValid} >
                    <img src={button} alt="Кнопка поиска" />
                </button>
            </form>
            <FilterCheckbox ontoggleCheckbox={props.ontoggleCheckbox}
                toggleCheckboxSave={props.toggleCheckboxSave}
                currentPath={props.currentPath} />
        </section>
    )
}

export default SearchForm;