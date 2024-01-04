import React from 'react';

export default function Portfolio ({portfolio = 'portfolio'}) {

  return (
    <div className={portfolio}>
      <h3 className={`${portfolio}__title`}>Портфолио</h3>
      <ul className={`${portfolio}__list`}>
        <li className={`${portfolio}__item`}>
          <a className={`${portfolio}__link`} href='https://borrissytsch.github.io/react-mesto-auth/' target='_blanc'>
            Статичный сайт<span className={`${portfolio}__link-ptr`}>↗</span>
          </a>
        </li>
        <li className={`${portfolio}__item`}>
          <a className={`${portfolio}__link`} href='https://borrissytsch.github.io/russian-travel/' target='_blanc'>
            Адаптивный сайт<span className={`${portfolio}__link-ptr`}>↗</span>
          </a>
        </li>
        <li className={`${portfolio}__item`}>
          <a className={`${portfolio}__link`} href='https://borrissytsch.github.io/mesto/' target='_blanc'>
            Одностраничное приложение<span className={`${portfolio}__link-ptr`}>↗</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
