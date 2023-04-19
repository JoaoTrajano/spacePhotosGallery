import React from 'react';
import styles from './styles.module.scss';
import Menu from '../Menu';
import Banner from '../../assets/banner.png';
import Gallery from '../Gallery';

function Main() {
  return <>
    <main className={styles.principal}>
      <Menu />
      <div className={styles.principal__imagem}>
        <h1>A galeria mais completa de fotos do espaço!</h1>
        <img src={Banner} alt="Banner" />
        <Gallery /> 
      </div>
    </main>
  </>
}

export default Main;
