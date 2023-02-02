import React from 'react';
import styles from './Header.module.css'
import {NavMenu} from './NavMenu/NavMenu';

export const Header = () => {
  return (
    <div className={styles.header}>
      Header
      <NavMenu/>
    </div>
  );
};
