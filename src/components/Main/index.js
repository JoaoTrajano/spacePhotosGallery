import React from 'react';
import './style.css';
import Menu from '../Menu';
import Banner from '../../assets/banner.png';

function Main() {
  return <>
    <main className='principal'>
      <Menu />
      <div className='imagem'>
        <h1>A galeria mais completa de fotos do espaço!</h1>
        <img src={Banner} alt="Banner" />
      </div>
    </main>
  </>
}

export default Main;