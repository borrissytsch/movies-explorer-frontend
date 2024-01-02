import React, {useState/*, useEffect*/} from 'react';
import { Route, Routes/*, Navigate, useNavigate*/ } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { LoggedMailContext } from '../../contexts/LoggedMailContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import {Movies} from '../Movies/Movies';
import {SavedMovies} from '../SavedMovies/SavedMovies';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import {Profile} from '../auth/Profile/Profile';
import ProtectedRoute from '../auth/ProtectedRoute';
import {NotFound} from '../NotFound/NotFound';
import { authRoutes, moviesRoutes } from '../../utils/constants';

export default function App() {
  const { signin, signup, profile } = authRoutes;
  const { movies, savedMovies } = moviesRoutes;
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedMail, setLoggedMail] = useState('');
  const [currUser, setCurrUser] = useState('');

  return (
    <Routes>
      <Route path={'/'} element={
        <LoggedInContext.Provider value={ [loggedIn, setLoggedIn] }>
          <Main />
        </LoggedInContext.Provider>
      } />
      <Route path={`/${signin}`} element={
        <LoggedInContext.Provider value={ [loggedIn, setLoggedIn] }>
          <LoggedMailContext.Provider value={ [loggedMail, setLoggedMail] }>
            <Login />
          </LoggedMailContext.Provider>
        </LoggedInContext.Provider>
      } />
      <Route path={`/${signup}`} element={
        <LoggedInContext.Provider value={ [loggedIn, setLoggedIn] }>
          <LoggedMailContext.Provider value={ [loggedMail, setLoggedMail] }>
            <CurrentUserContext.Provider value={ [currUser, setCurrUser] }>
              <Register />
            </CurrentUserContext.Provider>
          </LoggedMailContext.Provider>
        </LoggedInContext.Provider>
      } />
      <Route path={`/${profile}`} element={
        <LoggedInContext.Provider value={ [loggedIn, setLoggedIn] }>
          <LoggedMailContext.Provider value={ [loggedMail, setLoggedMail] }>
            <CurrentUserContext.Provider value={ [currUser, setCurrUser] }>
              <ProtectedRoute element={Profile} />
            </CurrentUserContext.Provider>
          </LoggedMailContext.Provider>
        </LoggedInContext.Provider>
      } />
      <Route path={`/${movies}`} element={
        <LoggedInContext.Provider value={ [loggedIn, setLoggedIn] }>
          <ProtectedRoute element={Movies} />
        </LoggedInContext.Provider>
      } />
      <Route path={`/${savedMovies}`} element={
        <LoggedInContext.Provider value={ [loggedIn, setLoggedIn] }>
          <ProtectedRoute element={SavedMovies} />
        </LoggedInContext.Provider>
      } />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}