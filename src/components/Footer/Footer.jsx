function Footer({modFooter = '', modTitle = '', modLine = '', modList = '', modItem = ''}) {
  const footer = 'footer';

  return (
    <footer className={`${footer} ${modFooter ? footer + '_' + modFooter : ''}`}>
      <h2 className={`${footer}__title` + (modTitle ? ` ${footer}__title_${modTitle}` : '')}>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <hr className={`${footer}__line` + (modLine ? ` ${footer}__line_${modLine}` : '')} />
      <ul className={`${footer}__list` + (modList ? ` ${footer}__list_${modList}` : '')}>
        <li className={`${footer}__item` + (modItem ? ` ${footer}__item_${modItem}` : '')}>
          © 2023
        </li>
        <li className={`${footer}__item`}>Яндекс.Практикум</li>
        <li className={`${footer}__item`}>Github</li>
      </ul>
    </footer>
  );
}

export default Footer;