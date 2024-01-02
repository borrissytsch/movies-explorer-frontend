import React, { useContext, useState, useEffect } from 'react';
import { /*Link, */useNavigate } from 'react-router-dom';
import { BurgerPathContext } from '../../contexts/BurgerPathContext';
import {LoggedInContext} from '../../contexts/LoggedInContext';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';
import { authRoutes } from '../../utils/constants';
import { scrWidthMatch, setBurgerPageBackColor } from '../../utils/miscutils';
import imgHeaderProfile from '../../images/header/profile.png';
import imgHeaderProfileDark from '../../images/header/profile_dark.png';

function Header({ header = 'header', theme = null, type = null }) {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const {signin, profile} = authRoutes;
  const moviesDarkBackColor = '#000';
    const [burgerFlag, setBurgerFlag] = useState(false);
  const [burgerClickPath, setBurgerClickPath] = useState(null);

  useEffect((checkScrWidthInterval_ms = 270) => {
    setInterval(() => {if(burgerFlag && !scrWidthMatch()) {
      setBurgerFlag(false);
      setBurgerPageBackColor();
    } }, checkScrWidthInterval_ms);
  }, [burgerFlag]);

  function handleProfileBtnClick (evt, navLink = `/${profile}`, burgerFlag = true) {
    if (scrWidthMatch()) {
      setBurgerClickPath(document.location.pathname);
      setBurgerFlag(burgerFlag);
      if (burgerFlag) setBurgerPageBackColor(moviesDarkBackColor);
    } else {
      navigate(navLink)
    }
  }

  return (
    <header  className={`${header} ${loggedIn ? `${header}_logged` : ''}
      ${theme ? `${header}_theme_` : ''}${theme} ${type ? `${header}_type_` : ''}${type}`}>
      <Logo />
      <Navigation loggedIn={loggedIn} />
      { loggedIn ?
        <BurgerPathContext.Provider value={burgerClickPath}>
          <Burger burgerFlag={burgerFlag} setBurgerFlag={setBurgerFlag} />
          <button className={`${header}__profile`} onClick={evt => handleProfileBtnClick(evt)}
          type='button'>
            <img className={`${header}__profile-img`}
              src={theme ? imgHeaderProfileDark : imgHeaderProfile} alt="Профиль"
            />
          </button>
        </BurgerPathContext.Provider>
      : 
        <button className={`${header}__signin-btn`} type='button' onClick={evt => 
          {navigate(`/${signin}`)}}>Войти
        </button>
      }
    </header>
  );
}

export default Header;