import React from 'react';
import styles from './Header.module.css'
import {NavMenu} from './NavMenu/NavMenu';
import {Logo} from './Logo/Logo';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo/>
      <NavMenu/>
    </div>
  );
};
