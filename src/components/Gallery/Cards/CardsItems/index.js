import React from 'react';
import open from '../../../../assets/open.png';
import like from '../../../../assets/favorito.png';

function CardsItems({ fotos, style }) {
  return fotos.map((foto) => {
    return <li key={foto.id} className={style.galeria__card}>
      <img
        className={style.galeria__imagem}
        src={foto.imagem}
        alt={foto.titulo}
      />
      <p className={style.galeria__descricao}>{foto.titulo}</p>
      <div>
        <p>{foto.creditos}</p>
        <span>

          <img src={like} alt="" />
          <img src={open} alt="abrir modal icone" />
        </span>
      </div>

    </li>
  })
}

export default CardsItems;