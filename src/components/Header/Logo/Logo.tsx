import React from 'react';
import logo from './LogoWhite.png'
import styles from './Logo.module.css'

export const Logo = () => {

  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt={'logo'} className={styles.logo}/>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>Egor Zhuk</p>
        <p>Web Developer</p>
      </div>


    </div>
  );
};

