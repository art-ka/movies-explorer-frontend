import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Switch, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Page404 from '../Page404/Page404';

import './App.css';


function App() {

  //const [currentUser, setCurrentUser] = React.useState("");
  //const currentUser = React.useContext(CurrentUserContext);

  //const [preloaderIsActive, setPreloaderIsActive] = React.useState(false);

  return (
    <CurrentUserContext.Provider
    // value={currentUser}
    >
      <div className="page">
        <div className="page__content">
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
