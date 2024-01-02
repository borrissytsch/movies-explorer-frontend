import React from 'react';
import About from '../About/About';

export default function AboutProject ({about = 'aboutproject', ref}) {
  
  return (
    <About about={about} title='О проекте' mixTitle='title' mixLine='line'>
      <article className={`${about}__article`}>
        <h3 className={`${about}__subtitle ${about}__subtitle_type_stage`}>Дипломный проект включал 5 этапов</h3>
        <h3 className={`${about}__subtitle ${about}__subtitle_type_duration`}>На выполнение диплома ушло 5 недель</h3>
        <p className={`${about}__paragraph ${about}__paragraph_type_stage`}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className={`${about}__paragraph ${about}__paragraph_type_duration`}>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </article>
      <ul className={`${about}__diag`}>
        <li className={`${about}__item ${about}__item_theme_green`}>1 неделя</li>
        <li className={`${about}__item ${about}__item_theme_grey`}>4 недели</li>
        <li className={`${about}__item ${about}__item_theme_dull`}>Back-end</li>
        <li className={`${about}__item ${about}__item_theme_dull`}>Front-end</li>
      </ul>
    </About>
  );
}
