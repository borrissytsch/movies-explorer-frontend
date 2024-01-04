import React from 'react';
import {Movies} from '../Movies/Movies';
import { testCards } from '../../utils/constants';

export function SavedMovies ({ moviesClass = 'savedmovies', movieType = 'saved', movieBtnClass = 'movies',
  cards =  testCards.slice(0,2),
  cardBtnType = 'remove' }
) {


  return (
    <Movies moviesClass={moviesClass} movieType={movieType} 
      movieBtnClass={movieBtnClass} isBtnActive={false} cards={cards} cardBtnType={cardBtnType}
    />
  );
}