import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import imgHeaderLogo from '../../images/header/logo.svg';

export default function Logo({logo = 'logo', formType = false}) {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);

  return (
    <NavLink to={'/'} className={`${logo}
      ${!loggedIn ? ` ${logo}_notlogged` : ''}${formType ? ` ${logo}_type_form` : ''}`
      }>
      <img src={imgHeaderLogo} alt="Лого" />
    </NavLink>
  )
}
