import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Switch, Route, useHistory, useLocation, Redirect } from 'react-router-dom';

import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Page404 from '../Page404/Page404';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import './App.css';

import ApiMovies from '../../utils/MoviesApi';
import Api from '../../utils/MainApi';


function App() {

  const [currentUser, setCurrentUser] = React.useState("");
  const [isLoggedIn, setLoggedIn] = React.useState(!!localStorage.getItem("jwt"));
  const [movies, setMovies] = React.useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = React.useState(false);
  const [isCheckboxCheckedonSavePage, setIsCheckboxCheckedonSavePage] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

  const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);

  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    Api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [isLoggedIn]);

  function handleUpdateUser(data) {
    Api.updateUserInfo(data)
      .then((userInfo) => {
        setCurrentUser(userInfo)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function fetchMovies() {
    ApiMovies.getMovies()
      .then((data) => {
        Api.getMovies().then(savedData => {
          setIsPreloaderActive(false);
          data.forEach(movie => {
            const savedMovie = savedData.find(savedMovie => movie.id === savedMovie.movieId);
            if (savedMovie) {
              console.log(`Saved movie: ${movie.nameRU}`);
              movie.isSaved = true;
              movie._id = savedMovie._id;
            }
          });
          setIsPreloaderActive(true);
          localStorage.setItem("movies", JSON.stringify(data));
          localStorage.setItem("savedMovies", JSON.stringify(savedData));
          setMovies(data);
          setSavedMovies(savedData);
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    fetchMovies();
  }, [isLoggedIn]);

  function handleLogin(email, password) {
    return Api.authorize(email, password)
      .then((res) => {
        if (res && res.error) {
          throw new Error(res.error)
        }
        if (res && res.token) {
          localStorage.setItem('jwt', res.token);
          Api.refreshToken();
          setLoggedIn(true);
          setCurrentUser(res);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Неправильный логин или пароль. Попробуйте еще раз");
      });
  }

  React.useEffect(() => {
    console.log(`toggleCheckbox: ${isCheckboxChecked}, ${isCheckboxCheckedonSavePage}, ${searchText}`);
    if (!isLoggedIn) {
      return;
    }
    searchMovie(searchText);
      searchInSaveMovie(searchText);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheckboxChecked, isCheckboxCheckedonSavePage, isLoggedIn])

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/signin");
  }

  function handleRegister(name, email, password) {
    return Api.register(name, email, password)
      .then((res) => {
        if (res && res.error) {
          throw new Error(res.error)
        }
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
        alert("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
      });
  }

  function handleSaveMovie(dataMovie) {
    Api.saveMovie(dataMovie)
      .then((newMovie) => {
        const newMovies = movies.map(m => m.id === newMovie.movieId ? { ...m, _id: newMovie._id, isSaved: true } : m);
        setMovies(newMovies);

        const newStoredMovies = JSON.parse(localStorage.getItem("movies")).map(m => m.id === newMovie.movieId ? { ...m, _id: newMovie._id, isSaved: true } : m);
        localStorage.setItem("movies", JSON.stringify(newStoredMovies));

        const newSavedMovies = [newMovie, ...savedMovies];
        setSavedMovies(newSavedMovies);

        const newStoredSavedMovies =  [newMovie, ...JSON.parse(localStorage.getItem("savedMovies"))];
        localStorage.setItem("savedMovies", JSON.stringify(newStoredSavedMovies));
      })
      .catch((err) => {
        console.log(err);
        alert("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
      })
  }

  function handleDeleteMovie(movie) {
    console.log(movie)
    Api.deleteMovie(movie._id)
      .then(() => {
        const newMovies = movies.map(m => m.id === movie.movieId ? { ...m, isSaved: false } : m);
        setMovies(newMovies);

        const newStoredMovies = JSON.parse(localStorage.getItem("movies")).map(m => m.id === movie.movieId ? { ...m, isSaved: false } : m);
        localStorage.setItem("movies", JSON.stringify(newStoredMovies));

        const newSavedMovies = savedMovies.filter(c => c._id !== movie._id);
        setSavedMovies(newSavedMovies);

        const newStoredSavedMovies = JSON.parse(localStorage.getItem("savedMovies")).filter(c => c._id !== movie._id);
        localStorage.setItem("savedMovies", JSON.stringify(newStoredSavedMovies));
      })
      .catch((err) => {
        console.log(err);
        alert("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
      })
  }

  function searchMovie(search) {
    searchMovieCallback(search, 'movies', isCheckboxChecked, setMovies);
  }

  function searchInSaveMovie(search) {
    searchMovieCallback(search, 'savedMovies', isCheckboxCheckedonSavePage, setSavedMovies);
  }

  function searchMovieCallback(search, movies, isChecked, callback) {
    setSearchText(search);
    setIsPreloaderActive(false);
    const preservedMovies = JSON.parse(localStorage.getItem(movies));
    if (isChecked) {
      console.log(isChecked)
      const shortMovie = preservedMovies.filter((movie) => {
        return (
          movie.duration <= 40 &&
          movie.nameRU.toLowerCase().includes(search.toLowerCase())
        );
      });
      callback(shortMovie);
    } else {
      const movie = preservedMovies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(search.toLowerCase());
      });
      callback(movie);
    }
    setIsPreloaderActive(true);
  }

  function toggleCheckbox() {
    setIsCheckboxChecked(!isCheckboxChecked);
  }

  function togglePreloader() {
    setIsPreloaderActive(!isPreloaderActive);
  }

  function toggleCheckboxSave() {
    setIsCheckboxCheckedonSavePage(!isCheckboxCheckedonSavePage);
  }

  return (
    <CurrentUserContext.Provider
      value={currentUser}
    >
      <div className="page">
        <div className="page__content">
          <div className="main">
            <Switch>
              <Route path='/signup'>
              {isLoggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Register onRegister={handleRegister} />
              )}
              </Route>
              <Route path='/signin'>
              {isLoggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login onLogin={handleLogin} />
              )}
              </Route>
              <Route exact path='/'>
                <Main loggedIn={isLoggedIn} />
              </Route>
              <ProtectedRoute path='/movies'
                movies={movies}
                loggedIn={isLoggedIn}
                component={Movies}
                onsearchMovie={searchMovie}
                ontoggleCheckbox={toggleCheckbox}
                onSaveMovie={handleSaveMovie}
                saveMovie={savedMovies}
                onDeleteMovie={handleDeleteMovie}
                isLoadSearch={isPreloaderActive}
                togglePreloader={togglePreloader}
              />
              <ProtectedRoute path='/saved-movies'
                movies={movies}
                loggedIn={isLoggedIn}
                onsearchMovie={searchMovie}
                toggleCheckboxSave={toggleCheckboxSave}
                onSaveMovie={handleSaveMovie}
                saveMovie={savedMovies}
                onDeleteMovie={handleDeleteMovie}
                isLoadSearch={isPreloaderActive}
                togglePreloader={togglePreloader}
                component={SavedMovies}
                currentPath={location.pathname}
                searchInSaveMovie={searchInSaveMovie}
              />
              <ProtectedRoute path='/profile' loggedIn={isLoggedIn}
                component={Profile}
                onUpdateUser={handleUpdateUser}
                onLogout={handleLogout} />
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
