import React/*, { Fragment }*/ from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'

function createCardItems (cards, cardBtnType) {
  return Object.values(cards).map((card, i) => (
    <MoviesCard key={`card_${i}`} card={card} cardBtnType={cardBtnType} />
  ));
}

export default function MoviesCardList (
  { cardClass = 'moviescardlist', cardListType, cards, cardBtnType }
) {
  const cardList = cardClass;
  
  return (
    <ul className={`${cardList} ${cardListType ? cardList + '_type_' + cardListType : ''}`}>
      {createCardItems(cards, cardBtnType)}
    </ul>
  );
}