import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Switch, Route, useHistory } from 'react-router-dom';

import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Page404 from '../Page404/Page404';

import './App.css';

import ApiMovies from '../../utils/MoviesApi';
import Api from '../../utils/MainApi';


function App() {

  const [currentUser, setCurrentUser] = React.useState("");
  const [isLoggedIn, setLoggedIn] = React.useState(!!localStorage.getItem("jwt"));
  //const [preloaderIsActive, setPreloaderIsActive] = React.useState(false);
  const [movies, setMovies] = React.useState([]);

  const history = useHistory();

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

  React.useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    ApiMovies.getMovies()
      .then((data) => {
        setMovies(data);
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

  //поиск фильмов



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
              <Route exact path='/movies' movies={movies} >
                <Movies />
              </Route>
              <Route exact path='/saved-movies'>
                <SavedMovies />
              </Route>
              <Route exact path='/profile'>
                <Profile onUpdateUser={handleUpdateUser}
                  onLogout={handleLogout} 
                  loggedIn={isLoggedIn} />
              </Route>
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
