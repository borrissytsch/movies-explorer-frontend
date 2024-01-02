import React, { useRef, useState, useEffect } from 'react';
import {Link/*, useNavigate*/} from 'react-router-dom';
import { authRoutes, dbgFlag } from '../../../utils/constants';

export default function RegForm (
  { regform = 'regform', frmId, frmType='', removeList=[], ...frmFields }
) {
  // const navigate = useNavigate();
  const refMail = useRef('');
  const refPass = useRef('');
  const [email, setEmail] = useState(frmFields.emailValue);
  const [password, setPassword] = useState('');
  const {profile} = authRoutes;

  function handleLinkClick(evt) {
    if(frmFields.handleLinkClick) frmFields.handleLinkClick(evt);
  }

  useEffect((field = email ? refPass : refMail) => {
    if(profile !== frmType) field.current.focus()
  }, []);
  
  return (
    <div className={`${regform}${frmType ? ` ${regform}_type_` : ''}${frmType}`}>
      <h2 className={`${regform}__title${frmType ? ` ${regform}__title_type_` : ''}${frmType}`}>
        {frmFields.frmTitle}
      </h2>
      <form className={`${regform}__items${frmType ? ` ${regform}__items_type_` : ''}${frmType}`}
        id={frmId} name={`${frmId}_frm`} onSubmit={evt => frmFields.handleRegForm(evt, 
        { email: refMail.current.value, password: refPass.current.value })} Validate>
        {frmFields.children}
        {(removeList.some(item => ['email', 'e-mail'].includes(item.toLowerCase())) ? '' :
          <label className={`${regform}__label${frmType ? ` ${regform}__label_type_` : ''}${frmType}`}>E-mail
            <input ref={refMail} value={email} onChange={evt => setEmail(evt.target.value)}
              className={`${regform}__input${frmType ? ` ${regform}__input_type_` : ''}${frmType}`}
              type="email" name={`${frmId}_email`} placeholder="email" required
            />
          </label>
        )}
        {(removeList.some(item => ['pass', 'password'].includes(item.toLowerCase())) ? '' :
          <label className={`${regform}__label${frmType ? ` ${regform}__label_type_` : ''}${frmType}`}>Пароль
            <input ref={refPass} value={password} onChange={evt => setPassword(evt.target.value)} type="password" name={`${frmId}_pass`}
              placeholder="Пароль" minLength="6" maxLength="200" required
              className={`${regform}__input${frmType ? ` ${regform}__input_type_` : ''}${frmType}`}
            />
          </label>
        )}
        {(removeList.some(item => ['err', 'errmsg'].includes(item.toLowerCase())) ? '' :
          <span className={`${regform}__err-msg`}>{frmFields.errRegMsg}</span>
        )}
        {(removeList.some(item => ['btn', 'button'].includes(item.toLowerCase())) ? '' :
          <button className={`${regform}__button${frmType ? ` ${regform}__button_type_` : ''}${frmType}`} 
            type={dbgFlag ? 'button' : 'submit'} onClick={evt => frmFields.handleRegForm(evt,
              { email: refMail.current.value, password: refPass.current.value })
            }>
            {frmFields.btnCaption}
          </button>
        )}
      </form>
      {(removeList.some(item => ['link', 'lnk'].includes(item.toLowerCase())) ? '' :
        <Link to={`/${frmFields.lnkRoute}`} onClick={evt => handleLinkClick(evt)}
          className={`${regform}__link${frmType ? ` ${regform}__link_type_` : ''}${frmType}`}
        >
          <span className={`${regform}__link-caption`}>{frmFields.lnkPrefixMsg} </span>
          {frmFields.lnkCaption}
        </Link>
      )}
    </div>
  );
}