import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

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
  const [isMovieShort, setIsMovieShort] = React.useState(false);
  const [saveMovie, setSaveMovie] = React.useState([]);

  const [isLoadSearch, setIsLoadSearch] = React.useState(false);

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
        // localStorage.setItem("data", JSON.stringify(data));
        Api.getMovies().then(savedData => {
          setIsLoadSearch(false);
          data.forEach(movie => {
            const savedMovie = savedData.find(savedMovie => movie.nameRU === savedMovie.nameRU);
            if (savedMovie) {
              console.log(`Saved movie: ${movie.nameRU}`);
              movie.isSaved = true;
              movie._id = savedMovie._id;
            }
          });
          // setMovies(JSON.parse(localStorage.getItem("data")));
          setMovies(data);
          setIsLoadSearch(true);
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

  React.useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    Api.getMovies()
      .then((data) => {
        setSaveMovie(data);
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      })
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
      });
  }

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
      });
  }

  function handleSaveMovie(dataMovie) {
    Api.saveMovie(dataMovie)
      .then((newMovie) => {
        setSaveMovie([newMovie, { ...saveMovie, _id: newMovie.id }]);
        setSaveMovie(saveMovie);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleDeleteMovie(movie) {
    console.log(movie)
    Api.deleteMovie(movie._id)
      .then(() => {
        setMovies(movies.filter((c) =>
          c._id !== movie._id));
        setSaveMovie(saveMovie.filter((c) =>
          c._id !== movie._id));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function searchMovie(search) {
    setIsLoadSearch(false);
    if (isMovieShort) {
      const shortMovie = movies.filter((movie) => {
        return (
          movie.duration <= 40 &&
          movie.nameRU.toLowerCase().includes(search.toLowerCase())
        );
      });
      setMovies(shortMovie);
      setIsLoadSearch(true);
    } else {
      setIsLoadSearch(false);
      const movie = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(search.toLowerCase());
      });
      setIsLoadSearch(true);
      return setMovies(movie);
    }
  }

  function searchInSaveMovie(search) {
    setIsLoadSearch(false);
    if (isMovieShort) {
      const shortMovie = saveMovie.filter((movie) => {
        return (
          movie.duration <= 40 &&
          movie.nameRU.toLowerCase().includes(search.toLowerCase())
        );
      });
      setSaveMovie(shortMovie);
      setIsLoadSearch(true);
    } else {
      setIsLoadSearch(false);
      const movie = saveMovie.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(search.toLowerCase());
      });
      setIsLoadSearch(true);
      return setSaveMovie(movie);
    }
  }

  function toggleCheckbox() {
    setIsMovieShort(!isMovieShort);
  }

  function togglePreloader() {
    setIsLoadSearch(!isLoadSearch);
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
                <Register onRegister={handleRegister} />
              </Route>
              <Route path='/signin'>
                <Login onLogin={handleLogin} />
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
                movieShort={isMovieShort}
                onSaveMovie={handleSaveMovie}
                saveMovie={saveMovie}
                onDeleteMovie={handleDeleteMovie}
                isLoadSearch={isLoadSearch}
                togglePreloader={togglePreloader}
              />
              <ProtectedRoute path='/saved-movies'
                movies={movies}
                loggedIn={isLoggedIn}
                onsearchMovie={searchMovie}
                ontoggleCheckbox={toggleCheckbox}
                movieShort={isMovieShort}
                onSaveMovie={handleSaveMovie}
                saveMovie={saveMovie}
                onDeleteMovie={handleDeleteMovie}
                isLoadSearch={isLoadSearch}
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
