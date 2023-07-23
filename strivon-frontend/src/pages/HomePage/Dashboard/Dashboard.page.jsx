import React from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '../../../dashboard-scenes/Sidebar/Sidebar.component';
import Topbar from '../../../dashboard-scenes/TopBar/Topbar';

const DashboardPage = () => {
  return (
    <div className={styles.container}>
        <Topbar />
        <Sidebar />
    </div>
  )
}

export default DashboardPage;