import React from 'react';
import CardItems from './CardsItems';

function Cards({ style, fotos }) {
  return (
    <ul className={style.galeria__cards}>
      <CardItems fotos={fotos} style={style} />
    </ul>
  )
}

export default Cards;