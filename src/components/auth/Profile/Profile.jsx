import React, { useRef, useEffect, useContext } from 'react';
// import {Link, useNavigate} from 'react-router-dom';
import { LoggedInContext } from '../../../contexts/LoggedInContext';
import { LoggedMailContext } from '../../../contexts/LoggedMailContext';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import useFormInputs from '../../../hooks/useFormInputs';
import Header from '../../Header/Header';
import RegForm from '../RegForm/RegForm';

import { signPageCaptions, authRoutes, authFormIds } from '../../../utils/constants';

export function Profile ({frmType='profile', theme='dark'}) {
  const refUser = useRef('');
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [loggedMail, setLoggedMail] = useContext(LoggedMailContext);
  const [currUser, setCurrUser] = useContext(CurrentUserContext);
  const {
    /*inTitle, btnEnterCaption,*/ tooltipErrCaption, /*regNotCaption, lnkRegCaption*/
  } = signPageCaptions;
  // const {signup} = authRoutes;
  const {signin: formId} = authFormIds;
  const regform = 'regform';
  
  const {values, handleChange, setValues} = useFormInputs({user: currUser});
  useEffect(() => { setValues(values.user) }, [setValues]);
  
  function handleLinkClick(evt) {
    setLoggedIn(false);
    setLoggedMail('');
    setCurrUser('');
  }

  function handleRegForm(evt) {
    setCurrUser(refUser.current.value)
  }
  
  useEffect(() => { refUser.current.focus() }, []);
  
  return (
    <div className={frmType}>
      <Header theme={theme} />
      <RegForm frmId={formId} frmTitle={`Привет, ${currUser ? currUser : 'Дмитрий!'}`}
        emailValue={loggedMail} errRegMsg={tooltipErrCaption} btnCaption='Редактировать'
        lnkRoute='' lnkPrefixMsg='' lnkCaption='Выйти из аккаунта' handleLinkClick={handleLinkClick}
        handleRegForm={handleRegForm} frmType={frmType} removeList={['pass']}>
        <label className={`${regform}__label ${regform}__label_type_${frmType}`}>Имя
          <input ref={refUser} value={values.user} onChange={evt => handleChange(evt)}
            className={`${regform}__input ${regform}__input_type_${frmType}`}
            type="text" name={`${formId}_user`} placeholder="Имя" required
          />
        </label>
      </RegForm>
    </div>
  );
}