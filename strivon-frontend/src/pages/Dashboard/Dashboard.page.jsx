import React from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '../../dashboard-scenes/Sidebar/Sidebar.component';
import Topbar from '../../dashboard-scenes/TopBar/Topbar';
import MobileSidebar from '../../dashboard-scenes/MobileSidebar/MobileSidebar';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setMobileView } from '../../redux/mobileToggle/mobileToggleAction';
import { selectMobileView } from '../../redux/mobileToggle/mobileToggleSelect';


const DashboardPage = ({toggle, setToggle}) => {
  return (
    <div className={styles.container}>
        <Topbar />
        <Sidebar />
        <MobileSidebar />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  toggle: selectMobileView,
});


const mapDispatchToProps = (dispatch) => ({
  setToggle: () => dispatch(setMobileView()),
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
