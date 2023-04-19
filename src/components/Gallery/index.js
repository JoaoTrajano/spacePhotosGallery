import React from 'react';
import styles from './style.module.scss';
import Tags from './Tags';
import Cards from './Cards';
import fotos from './fotos.json';

function Gallery() {
  return <>
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
    </section>
    <Tags />
    <Cards style={styles} fotos={fotos} />
  </>
}

export default Gallery;