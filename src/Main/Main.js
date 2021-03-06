import React from 'react';
import styles from './Main.module.css';
import photo from '../image/img.jpg'

function Main () {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <span>Hello!</span>
          <span>I am Vasily <span>Krutikov</span></span>
          <h1>Im front-end developer</h1>
        </div>
        <div className={styles.photo}>
          <div className={styles.image}>
            <img className={styles.image} src={photo} alt={''} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
