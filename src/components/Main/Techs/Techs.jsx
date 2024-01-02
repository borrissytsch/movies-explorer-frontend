import React from 'react';
import About from '../About/About';

export default function Techs ({about = 'techs'}) {

  return (
    <About about={about} title='Технологии' mixBounds='bounds' mixTitle='title' mixLine='line'>
      <h2 className={`${about}__head`}>7 технологий</h2>
      <p className={`${about}__subtitle`}>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className={`${about}__list`}>
        <li className={`${about}__item`}>HTML</li>
        <li className={`${about}__item`}>CSS</li>
        <li className={`${about}__item`}>JS</li>
        <li className={`${about}__item`}>React</li>
        <li className={`${about}__item`}>Git</li>
        <li className={`${about}__item`}>Express.js</li>
        <li className={`${about}__item`}>MongoDB</li>
      </ul>
    </About>
  );
}