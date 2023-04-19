import React from 'react';
import CardItems from './CardsItems';
import Popular from '../../Popular';

function Cards({ style, fotos, tag }) {
  return (
    <div className={style.galeria__container}>
      <ul className={style.galeria__cards}>
        <CardItems fotos={fotos} style={style} tag={tag} />
      </ul>
      <Popular />
    </div>

  )
}

export default Cards;