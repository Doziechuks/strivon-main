import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// common components
import Navbar from "./components/navbar/Navbar";
import MobileNavbar from "./components/mobileNavBar/MobileNavbar";
import Spinner from "./utils/spinner/Spinner";
import MobileFooter from "./components/mobileFooter/MobileFooter";
import ScrollToTopBtn from "./utils/functions/scrollToTopBtn/ScrollToTopBtn";

// public pages
const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Register = lazy(() => import("./pages/registrationPage/Register"));
const Contact = lazy(() => import("./pages/contactPage/ContactPage"));
const Faq = lazy(() => import("./pages/FaqPage/faq.page"));
const About = lazy(() => import("./pages/AboutPage/AboutPage"));
const Frontend = lazy(() => import("./pages/tracksPages/Frontend"));
const Backend = lazy(() => import("./pages/tracksPages/Backend"));
const MobileApp = lazy(() => import("./pages/tracksPages/MobileApp"));

// protect routes
const Login = lazy(() => import("./pages/loginPage/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard.page"));

function App() {
  return (
    <div className="app">
      <ScrollToTopBtn />
      <Navbar />
      <MobileNavbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactus" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/apply" element={<Register />} />
          <Route exact path="/faqs" element={<Faq />} />
          <Route path="/tracks">
            <Route path="frontend" element={<Frontend />} />
            <Route path="backend" element={<Backend />} />
            <Route path="mobileapp" element={<MobileApp />} />
          </Route>

          {/* protected pages */}
          <Route path="/student/*" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <MobileFooter />
      </Suspense>
    </div>
  );
}

export default App;
