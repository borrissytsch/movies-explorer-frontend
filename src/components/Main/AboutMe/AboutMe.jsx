import React from 'react';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import aboutImage from '../../../images/main/aboutme_image.png';

export default function AboutMe ({about = 'aboutme'}) {

  return (
    <About about={about} title='Студент' mixBounds='bounds' mixTitle='title' mixLine='line'>
      <article className={`${about}__article`}>
        <div className={`${about}__descr`}>
          <div>
            <h2 className={`${about}__head`}>Дмитрий</h2>
            <p className={`${about}__subtitle`}>Фронтенд-разработчик</p>
            <p className={`${about}__paragraph`}>Образование высшее, закончил факультет экономики ГУ ВШЭ. Родился и проживаю в Подмосковье.</p>
          </div>
          <a className={`${about}__link`} href='https://github.com/borrissytsch'>Github</a>
        </div>
        <img src={aboutImage} className={`${about}__image`} alt="Фото" />
      </article>
      <Portfolio />
    </About>
  );
}