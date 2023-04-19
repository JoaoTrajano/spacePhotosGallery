import React from 'react';
import styles from'./style.module.scss';

function Tags() {
  return (
    <section className={styles.tags}>
      <h3>Buscar por Tags: </h3>
      <ul className={styles.tags__lista}>
        <li>Estrelas</li>
        <li>Galaxias</li>
        <li>Lua</li>
        <li>Planetas</li>
      </ul>
    <h2>Populares</h2>

    </section>
  )
}

export default Tags