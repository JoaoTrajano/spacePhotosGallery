import React from 'react';
import './style.css';
import home from '../../assets/icones/home-ativo.png';
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png';
import maisVistas from '../../assets/icones/mais-vistas-inativo.png';
import novasInativo from '../../assets/icones/novas-inativo.png';
import surprendameInativo from '../../assets/icones/surpreenda-me-inativo.png';

function Menu () {
  return(
    <section>
      <nav className='menu'>
      <ul className='lista'>
        <li className='item'>
          <img className='imgItemMenu' src={home} alt="" />
          <a className='linkMenu' href="/"> Início </a>
        </li>
        <li className='item'>
          <img className='imgItemMenu' src={maisVistas} alt="" />
          <a className='linkMenu' href="/">Mais Vistas</a>
        </li>
        <li className='item'>
          <img className='imgItemMenu' src={maisCurtidas} alt="" />
          <a className='linkMenu' href="/"> Mais Curtidas</a>
        </li>
        <li className='item'>
          <img className='imgItemMenu' src={novasInativo} alt="" />
          <a className='linkMenu' href="/"> Novas </a>
        </li>
        <li className='item'>
          <img className='imgItemMenu' src={surprendameInativo} alt="" />
          <a className='linkMenu' href="/"> Surprenda-me</a>
        </li>
      </ul>
    </nav>
  </section>
  )
}

export default Menu;