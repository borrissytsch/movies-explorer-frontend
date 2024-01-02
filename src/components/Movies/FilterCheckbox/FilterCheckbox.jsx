import React, { useState } from 'react';
import imgCheckBox from '../../../images/components/movies/checkbox_toggle.png';
export default function FilterCheckbox ({checkBoxClass = 'filtercheckbox', checkBox = null}) {
  const [checkBoxState, setCheckBoxState] = useState(checkBox);

  return (
    <div className={checkBoxClass}>
      <button className={`${checkBoxClass}__button`} type='button'
        onClick={evt => setCheckBoxState(!checkBoxState)}>
        <img className={`${checkBoxClass}__toggle
          ${checkBoxClass}__toggle_type_${checkBoxState ? 'set' : 'unset'}`}
        src={imgCheckBox} alt="Переключатель" />
      </button>
      <label className={`${checkBoxClass}__label`}>Короткометражки</label>
    </div>
  );
}