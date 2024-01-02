import React, { /*useEffect,*/ useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoggedInContext } from '../../../contexts/LoggedInContext';
import { LoggedMailContext } from '../../../contexts/LoggedMailContext';
import RegForm from '../RegForm/RegForm';
import Logo from '../../Logo/Logo';

import {
  signPageCaptions, authRoutes, authFormIds/*, srvAuthData , userAuthData*/
} from '../../../utils/constants';

export default function Login () {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [loggedMail/*, setLoggedMail*/] = useContext(LoggedMailContext);
  const {
    inTitle, btnEnterCaption, tooltipErrCaption, regNotCaption, lnkRegCaption
  } = signPageCaptions;
  const { signup } = authRoutes;
  const { signin: formId } = authFormIds;

  function handleRegForm (evt, {email , password}) {
    evt.preventDefault();
    setLoggedIn(true);
    alert(`Login RegForm trace: ${email} & ${password} entered; LoggedIn & mail contexts are set: ${loggedIn}`);
    navigate('/movies');
  }

  return (
    <div className='login'>
      <Logo formType={true} />
      <RegForm frmId={formId} handleRegForm={handleRegForm} frmTitle={inTitle}
        emailValue={loggedMail} errRegMsg={tooltipErrCaption} btnCaption={btnEnterCaption}
        lnkRoute={signup} lnkPrefixMsg={regNotCaption} lnkCaption={lnkRegCaption}
      />
    </div>
  );
}