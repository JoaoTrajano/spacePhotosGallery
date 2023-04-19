import React from 'react';
import styles from './styles.module.scss';
import home from '../../assets/icones/home-ativo.png';
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png';
import maisVistas from '../../assets/icones/mais-vistas-inativo.png';
import novasInativo from '../../assets/icones/novas-inativo.png';
import surprendameInativo from '../../assets/icones/surpreenda-me-inativo.png';

function Menu() {
  return (
    <section>
      <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
          <li className={styles.menu__item}>
            <img src={home} alt="" />
            <a href="/"> Início </a>
          </li>
          <li className={styles.menu__item}>
            <img src={maisVistas} alt="" />
            <a href="/">Mais Vistas</a>
          </li>
          <li className={styles.menu__item}>
            <img src={maisCurtidas} alt="" />
            <a href="/"> Mais Curtidas</a>
          </li>
          <li className={styles.menu__item}>
            <img src={novasInativo} alt="" />
            <a href="/"> Novas </a>
          </li>
          <li className={styles.menu__item}>
            <img src={surprendameInativo} alt="" />
            <a href="/"> Surprenda-me</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Menu;