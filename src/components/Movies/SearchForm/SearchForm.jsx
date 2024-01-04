import React, { useRef, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm ({frmClass = 'searchform', frmType = '', handleSearchClick}) {
  const movieSearchStr = useRef(null);

  useEffect(() => {
    movieSearchStr.current.focus();
  }, []);

  return (
    <form className={`${frmClass} ${frmType ? `${frmClass}_type_${frmType}` : ''}`}>
      <div className={`${frmClass}__container`}>
        <input ref={movieSearchStr} className={`${frmClass}__input`} placeholder='Фильм' required />
        <button className={`${frmClass}__findbtn`} type='submit'
          onClick={evt => handleSearchClick(evt)}
        />
      </div>
      <FilterCheckbox />
    </form>
  );
}