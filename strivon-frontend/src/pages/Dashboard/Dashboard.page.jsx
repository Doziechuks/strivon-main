import React, { useEffect, Suspense, lazy } from "react";
import styles from "./Dashboard.module.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "../../dashboard-scenes/Sidebar/Sidebar.component";
import Topbar from "../../dashboard-scenes/TopBar/Topbar";
import MobileSidebar from "../../dashboard-scenes/MobileSidebar/MobileSidebar";
import { Seo } from "../../utils/seo";
import Spinner from "../../utils/spinner/Spinner";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setMobileView } from "../../redux/mobileToggle/mobileToggleAction";
import { selectMobileView } from "../../redux/mobileToggle/mobileToggleSelect";

const Profile = lazy(() => import("../../dashboard-scenes/Profile/Profile"));
const Courses = lazy(() => import("../../dashboard-scenes/Courses/Courses"));
const Payments = lazy(() => import("../../dashboard-scenes/Payments/Payments"));
const Results = lazy(() => import("../../dashboard-scenes/Results/Results"));
const Referral = lazy(() => import("../../dashboard-scenes/Referral/Referral"));

const DashboardPage = ({ toggle, setToggle }) => {
  useEffect(() => {
    Seo({
      title: "Student Dashboard || Strivon Academy",
      metaDescription:
        "Details of studen's personal profile, perforemces, and pogress in the on going session at Strivon Academy",
    });
  }, []);
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.wrap}>
        <Sidebar />
        <MobileSidebar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route index element={<Navigate to="profile" />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/results" element={<Results />} />
            <Route path="/referral" element={<Referral />} />
          </Routes>
        </Suspense>
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
