import React from 'react';
import styles from './styles.module.scss';
import fotos from './fotos.json';

function Popular() {
  return <aside className={styles.populares}>
      <ul className={styles.populares__ullist}>
        {fotos.map((foto) => {
          return <div className={styles.populares__imagenspop}>
            <img src={foto.path} alt={foto.alt} />
          </div>
        })}
      </ul>
    <button>
      Ver mais
    </button>
  </aside>
}

export default Popular;