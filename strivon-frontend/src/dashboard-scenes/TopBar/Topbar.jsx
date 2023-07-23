import React from 'react';
import styles from './Topbar.module.css';
import Logo from '../../logo-cropped.png'

const Topbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logocontainer}>
            <img src={Logo} alt='logo' />
        </div>

        <div className={styles.namecontainer}>
            
        </div>
    
        </div>
  )
}

export default Topbar;