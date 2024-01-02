import React, { /*Fragment, */useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoggedMailContext } from '../../../contexts/LoggedMailContext';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import Logo from '../../Logo/Logo';
import RegForm from '../RegForm/RegForm';
/*import { mestAuth } from '../../utils/Auth';*/
import {signPageCaptions, authRoutes, authFormIds, /*userAuthData, srvAuthData*/} from '../../../utils/constants';

export default function Register ({frmType = 'register'}) {
  const navigate = useNavigate();
  const refUser = useRef('');
  const [loggedMail, setLoggedMail] = useContext(LoggedMailContext);
  const [currUser, setCurrUser] = useContext(CurrentUserContext);
    const {
    regTitle, btnRegCaption, regDoneCaption, lnkInCaption, tooltipErrCaption,
  } = signPageCaptions;
  const {signin} = authRoutes;
  const {signup: frmId} = authFormIds;
  const regform = 'regform';

  function handleRegForm (evt, {email, password}) {
    evt.preventDefault();
    setCurrUser(refUser.current.value);
    setLoggedMail(email);
    alert(`Register RegForm trace: ${email} & ${password} were registered`);
    navigate(`/${signin}`);
  }

  useEffect(() => { refUser.current.focus() }, []);

  return (
    <div className={frmType}>
      <Logo formType={true} />
      <RegForm frmId={frmId} frmType={frmType} frmTitle={regTitle} errRegMsg={tooltipErrCaption}
        btnCaption={btnRegCaption} lnkRoute={signin} lnkPrefixMsg={regDoneCaption}
        lnkCaption={lnkInCaption} handleRegForm={handleRegForm}>
        <label className={`${regform}__label`}>Имя
          <input ref={refUser} className={`${regform}__input`} type="text" name={`${frmId}_user`}
            placeholder="Имя" required
          />
        </label>
      </RegForm>
    </div>
  );
 }