import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { createUseStyles } from 'react-jss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader'
import { testCards } from '../../utils/constants';

export function Movies (
  { moviesClass = 'movies', movieType = 'movie', movieBtnClass = moviesClass, isBtnActive = true, cards = testCards, cardBtnType = ['choice', 'unsaved'] }
) {
  const headerTheme = 'dark';
  const headerType = movieType;
  
  const TurnLoaderOn =  styled.div`
    position: fixed;
    top: max(40% - 50px, 150px);
    left: max(50% - 50px, 50px);
  `;

  const useStyles = createUseStyles({
    loadshow: {
      visibility: 'visibile',
    },
    loadhide: {
      visibility: 'hidden',
    }
  });
  const classes = useStyles();

  const [loaderShow, setLoaderShow] = useState(true);
  useEffect((outInterval_ms = 2100) => { setTimeout(() => setLoaderShow(false), outInterval_ms) },[loaderShow]);

  function handleMoreClick(evt, outInterval_ms = 1500) {
    evt.preventDefault();
    setLoaderShow(true);
    setTimeout(() => setLoaderShow(false), outInterval_ms)
  }
  
  return (
    <>
      <Header theme={headerTheme} type={headerType} />
      <SearchForm frmType={movieType} handleSearchClick={handleMoreClick} />
      <section className={moviesClass}>
        <MoviesCardList cardListType={movieType} cards={cards} cardBtnType={cardBtnType} />
        <button className={`${movieBtnClass}__button ${isBtnActive ? '' : `${movieBtnClass}__button_inactive`}`}
          type='button' onClick={evt => handleMoreClick(evt)}
        >
          Ещё
        </button>
      </section>
      <Footer modFooter={`type_${headerType}`} modItem='type_left' />
      <TurnLoaderOn className={loaderShow ? classes.loadshow : classes.loadhide}>
        <Preloader />
      </TurnLoaderOn>
    </>
  );
}