import React from "react";
import styles from "./Dashboard.module.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../dashboard-scenes/Sidebar/Sidebar.component";
import Topbar from "../../dashboard-scenes/TopBar/Topbar";
import MobileSidebar from "../../dashboard-scenes/MobileSidebar/MobileSidebar";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setMobileView } from "../../redux/mobileToggle/mobileToggleAction";
import { selectMobileView } from "../../redux/mobileToggle/mobileToggleSelect";

import Profile from "../../dashboard-scenes/Profile/Profile";
import Courses from "../../dashboard-scenes/Courses/Courses";
import Payments from "../../dashboard-scenes/Payments/Payments";
import Results from "../../dashboard-scenes/Results/Results";
import Referral from "../../dashboard-scenes/Referral/Referral";

const DashboardPage = ({ toggle, setToggle }) => {
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.wrap}>
        <Sidebar />
        <MobileSidebar />
        <Routes>
          <Route index element={<Navigate to="profile" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/results" element={<Results />} />
          <Route path="/referral" element={<Referral />} />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  toggle: selectMobileView,
});

const mapDispatchToProps = (dispatch) => ({
  setToggle: () => dispatch(setMobileView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
