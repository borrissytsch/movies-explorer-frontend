import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound(
  {title = '404', content = 'Страница не найдена', btnCaption = 'Назад', prevPageOrd = -1, ...Adds}
) {
  const navigate = useNavigate();
  const pageClass = 'notfound';

  return (
    <div className={`${pageClass}`}>
      <h2 className={`${pageClass}__title`}>{title}</h2>
      <p className={`${pageClass}__paragraph`}>{content}</p>
      {Adds.children}
      <button className={`${pageClass}__button`} type='button' onClick={evt => navigate(prevPageOrd)}>
        {btnCaption}
      </button>
    </div>
  );
}
