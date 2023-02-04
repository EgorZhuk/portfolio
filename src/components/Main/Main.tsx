import React from 'react';
import styles from './Main.module.css'

export const Main = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.title}>
        <h1>Hi! My name is Egor.</h1>
        <p>I'm Frontend Developer.</p>
      </div>
      <div className={styles.titleImg}>
        <div className={styles.img}></div>
      </div>
    </div>
  );
};
