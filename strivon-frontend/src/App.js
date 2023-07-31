import "./App.css";
import { Route, Routes } from "react-router-dom";

// common components
import Navbar from "./components/navbar/Navbar";

// public pages
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/contactPage/ContactPage";
import Register from "./pages/registrationPage/Register";
import Faq from "./pages/FaqPage/faq.page";
import Frontend from "./pages/tracksPages/frontendTrack/Frontend";
import Backend from "./pages/tracksPages/backendTrack/Backend";

// protected routes
import Login from "./pages/loginPage/Login";
import DashboardPage from "./pages/Dashboard/Dashboard.page";
import MobileApp from "./pages/tracksPages/mobileAppTrack/MobileApp";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contactus" element={<ContactPage />} />
        <Route exact path="/apply" element={<Register />} />
        <Route exact path="/faqs" element={<Faq />} />
        <Route path="/tracks">
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
          <Route path="mobileapp" element={<MobileApp />} />
        </Route>

        {/* protected pages */}
        <Route path="/student/*" element={<DashboardPage />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
