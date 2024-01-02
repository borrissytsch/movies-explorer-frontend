import React, {useContext} from 'react';
import {AboutProjectRefContext} from '../../../contexts/AboutProjectRefContext';
import {projectOffset} from '../../../utils/constants';
import logoEarth from '../../../images/main/promo_earth_1x.png';

export default function Promo ({promo = 'promo'}) {
  const aboutProjectRef = useContext(AboutProjectRefContext);
  const handleClick4PrjRef = (evt, offsetTop = aboutProjectRef) => {
  window.scrollTo({ top: aboutProjectRef.current ?
    aboutProjectRef.current.offsetTop
  :
    projectOffset, behavior: 'smooth' }
  )};

  return (
    <section className={promo} >
      <div className={`${promo}__box`}>
        <div className={`${promo}__head`}>
          <h1 className={`${promo}__title`}>Учебный проект студента факультета                    Веб&#8209;
            <span className={`${promo}__title-align`}>разработки.</span>
          </h1>
          <p className={`${promo}__subtitle`}>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img src={logoEarth} className={`${promo}__image`} alt="Лого веб-планета" />
      </div>
      <button type="button" className={`${promo}__button`} onClick={evt => handleClick4PrjRef(evt)} autoFocus/*form={formName.card}*/>Узнать больше</button>
    </section>
  );
}
