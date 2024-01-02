import React, { /*useState, useEffect, */useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {BurgerPathContext} from '../../contexts/BurgerPathContext';
import {BurgerFlagContext} from '../../contexts/BurgerFlagContext';
import Navigation from '../Navigation/Navigation';
import imgHeaderProfile from '../../images/header/profile.png';
import imgHeaderProfileDark from '../../images/header/profile_dark.png';
import imgCloseBurger from '../../images/components/movies/burger_close_btn.png';
import { authRoutes } from '../../utils/constants';
import { setBurgerPageBackColor } from '../../utils/miscutils';

export default function Burger (
  { burger = 'burger', loggedIn = true, burgerFlag = false, setBurgerFlag }
) {
  const navigate = useNavigate();
  const burgerClickPath = useContext(BurgerPathContext);
  const { profile } = authRoutes;
  const theme = 'dark';
  const navigation = 'navigation';

  function handleCloseBtnClick(evt) {
    setBurgerFlag(false);
    setBurgerPageBackColor();
  }

  function handleProfileBtnClick(evt, profileLink = `/${profile}`) {
    handleCloseBtnClick(evt);
    navigate(profileLink)
  }

  return (
    <div className={`${burger} ${burgerFlag ? `${burger}_isactive` : ''}`}>
      <button className={`${burger}__close`} type='button' onClick={evt => handleCloseBtnClick(evt)}>
        <img className={`${burger}__close-img`} src={imgCloseBurger} alt="Закрыть"/>
      </button>
      <BurgerFlagContext.Provider value={setBurgerFlag}>
        <Navigation loggedIn={loggedIn} navType={burger}>
          <NavLink to={'/'} className={`${navigation}__link
            ${burgerClickPath === '/' ? `${navigation}__link_type_current` : ''}`}
            onClick={evt => setBurgerFlag(false)} >Главная
          </NavLink>
        </Navigation>
      </BurgerFlagContext.Provider>
      <button className={`${burger}__profile`} onClick={evt => handleProfileBtnClick(evt)}
        type='button'>
        <img className={`${burger}__profile-img`}
          src={theme ? imgHeaderProfileDark : imgHeaderProfile} alt="Профиль"
        />
      </button>
    </div>
  );
}
