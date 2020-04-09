import React from 'react';
import styles from './Main.module.css';

function Main () {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <span>Hello</span>
          <span>Im Vasily</span>
          <span>Im not understand anything</span>
        </div>

        <div className={styles.photo}>
          <img src="" alt="" />
        </div>

      </div>
    </div>
  );
}

export default Main;
