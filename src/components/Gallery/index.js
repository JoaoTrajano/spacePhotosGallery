import React, { useState } from 'react';
import styles from './style.module.scss';
import Tags from './Tags';
import Cards from './Cards';
import imagens from './fotos.json';


function Gallery() {
  const [tag, setTag] = useState("");

  const filterPhotos = (tag) => {
    setTag(tag);
  }

  return <>
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
    </section>
    <Tags handlePhoto={filterPhotos} />
    <Cards style={styles} fotos={imagens} tag={tag} />
  </>
}

export default Gallery;