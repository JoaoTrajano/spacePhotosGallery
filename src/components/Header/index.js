import React from 'react';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png'
import styles from './style.module.scss';

function Header () {
  return (
  <header>
    <section className={styles.cabecalho}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.cabecalho__container}>
        <input className={styles.cabecalho__input} placeholder='O você procura?' type="text" />
        <img src={search} alt="search" />
      </div>
    </section>
  </header>
  )
}

export default Header;