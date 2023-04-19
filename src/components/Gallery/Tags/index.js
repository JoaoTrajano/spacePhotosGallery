import React from 'react';
import styles from'./style.module.scss';

function Tags({handlePhoto}) {
  
  return (
    <section className={styles.tags}>
      <h3>Buscar por Tags: </h3>
      <ul className={styles.tags__lista}>
        <li onClick={() => handlePhoto("")} >Todos</li>
        <li onClick={() => handlePhoto("Estrelas")} >Estrelas</li>
        <li onClick={() => handlePhoto("Galáxias")}>Galaxias</li>
        <li onClick={() => handlePhoto("Lua")}>Lua</li>
        <li onClick={() => handlePhoto("Nebulosas")}>Nebulosas</li>
      </ul>
    <h2>Populares</h2>

    </section>
  )
}

export default Tags