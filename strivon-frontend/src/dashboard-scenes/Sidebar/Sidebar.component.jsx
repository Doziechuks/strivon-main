import React, {useState} from 'react';
import styles from './Sidebar.module.css';
import DashMenu from '../MenuItems/DashMenu';

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
     <DashMenu />
    </div>
  )
}

export default Sidebar