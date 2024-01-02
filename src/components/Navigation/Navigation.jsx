import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {BurgerPathContext} from '../../contexts/BurgerPathContext';
import {BurgerFlagContext} from '../../contexts/BurgerFlagContext';
import { authRoutes, moviesRoutes } from '../../utils/constants';
import { setBurgerPageBackColor } from '../../utils/miscutils';

export default function Navigation (
  { navigation = 'navigation', navType = 'navlinks', loggedIn, ...menuFields }
) {
  const burgerClickPath = useContext(BurgerPathContext);
  const setBurgerFlag = useContext(BurgerFlagContext);
  const { signin, signup, profile } = authRoutes;
  const { movies, savedMovies } = moviesRoutes;

  function handleNavLinkClick (evt, currentLink) {
    if (burgerClickPath === currentLink) setBurgerFlag(false);
    setBurgerPageBackColor();
  }

  return (
    <div className={navigation + (loggedIn ? ` ${navigation}_type_${navType}` : '')}>
      {menuFields.children}      
      {loggedIn ? 
        <div className={`${navigation}__movies ${loggedIn ? ` ${navigation}__movies_type_${navType}` : ''}`}>
          <NavLink to={`/${movies}`} className={`${navigation}__link 
            ${burgerClickPath === `/${movies}` ? `${navigation}__link_type_current` : ''}`}
            onClick={evt => handleNavLinkClick(evt, `/${movies}`)}>Фильмы
          </NavLink>
          <NavLink to={`/${savedMovies}`} className={`${navigation}__link
            ${burgerClickPath === `/${savedMovies}` ? `${navigation}__link_type_current` : ''}`}
            onClick={evt => handleNavLinkClick(evt, `/${savedMovies}`)}>Сохранённые фильмы
          </NavLink>
        </div>
      :
        <NavLink to={`/${signup}`} className='header__link'>Регистрация</NavLink>
      }
    </div>
  );
}
