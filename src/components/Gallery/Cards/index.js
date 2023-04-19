import React from 'react';
import CardItems from './CardsItems';
import Popular from '../../Popular';

function Cards({ style, fotos }) {
  return (
    <div className={style.galeria__container}>
      <ul className={style.galeria__cards}>
        <CardItems fotos={fotos} style={style} />
      </ul>
      <Popular />
    </div>

  )
}

export default Cards;