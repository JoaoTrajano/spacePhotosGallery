import React from 'react';
import styles from './style.module.scss';
import Tags from './Tags';

function Gallery() {
  return <>
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
    </section>
    <Tags />
  </>
}

export default Gallery;