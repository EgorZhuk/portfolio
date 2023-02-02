import React from 'react';
import styles from './NavMenu.module.css'

export const NavMenu = () => {
  return (
    <div className={styles.nav}>
      <a href={'#'} >Home</a>
      <a href={'#'} >Skills</a>
      <a href={'#'} >Work</a>
      <a href={'#'} >Contact</a>
    </div>
  );
};
