import React, { /*Fragment, */useRef } from 'react';

export default function MoviesCard ({ card, cardBtnType }) {
  const refBtn = useRef(null);

  const cardClass = 'moviescard';
  const {image, nameRU, duration} = card;
  
  function handleChoiceBtn(evt) {
    if(Object.values(refBtn.current.classList).join(' ').includes('saved')) {
      refBtn.current.classList.toggle(`${cardClass}__button_type_unsaved`);
      refBtn.current.classList.toggle(`${cardClass}__button_type_saved`);
      if(Object.values(refBtn.current.classList).join(' ').includes('remove')) {
        refBtn.current.classList.toggle(`${cardClass}__button_type_saved`);
      }
    }
  }

  return (
    <li className={`${cardClass}`}>
      <img className={`${cardClass}__image`} src={image} alt={nameRU.slice(0, 7)} />
      <div className={`${cardClass}__choice`}>
        <h2 className={`${cardClass}__title`}>{nameRU}/</h2>
        <button ref={refBtn} className={`${cardClass}__button ${cardClass}__button_type_${
          typeof cardBtnType === 'object'
          ?
            cardBtnType.join(' ' + cardClass + '__button_type_') 
          :
            cardBtnType
          }`
        } onClick={evt => handleChoiceBtn(evt)} type='button' />
      </div>
      <p className={`${cardClass}__duration`}>{duration}</p>
    </li>
  );
}
