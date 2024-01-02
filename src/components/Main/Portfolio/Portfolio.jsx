import React from 'react';

export default function Portfolio ({portfolio = 'portfolio'}) {

  return (
    <div className={portfolio}>
      <h3 className={`${portfolio}__title`}>Портфолио</h3>
      <ul className={`${portfolio}__list`}>
        <li className={`${portfolio}__item`}>Статичный сайт<a className={`${portfolio}__link`} href='https://borrissytsch.github.io/react-mesto-auth/' target='_blanc'>↗</a></li>
        <li className={`${portfolio}__item`}>Адаптивный сайт<a className={`${portfolio}__link`} href='https://borrissytsch.github.io/russian-travel/' target='_blanc'>↗</a></li>
        <li className={`${portfolio}__item`}>Одностраничное приложение<a className={`${portfolio}__link`} href='https://borrissytsch.github.io/mesto/' target='_blanc'>↗</a></li>
      </ul>
    </div>
  );
}
