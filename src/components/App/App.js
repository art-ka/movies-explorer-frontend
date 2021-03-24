import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';

import './App.css';

function App() {

  const [currentUser, setCurrentUser] = React.useState("");

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header />
          <div className="main">
            <Switch>
              <Route path='/signup'>
                <Register />
              </Route>
              <Route path='/signin'>
                <Login />
              </Route>
              <Route exact path='/'>
                <Main />
              </Route>
              <Route exact path='/movies'>
                <Movies />
              </Route>
              <Route exact path='/saved-movies'>
                <SavedMovies />
              </Route>
              <Route exact path='/profile'>
                <Profile />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
