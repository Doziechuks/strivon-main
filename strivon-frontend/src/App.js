import "./App.css";
import { Route, Routes } from "react-router-dom";

// common components
import Navbar from "./components/navbar/Navbar";

// public pages
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/contactPage/ContactPage";
import Register from "./pages/registrationPage/Register";
import Faq from "./pages/FaqPage/faq.page";

// protected routes
import Login from "./pages/loginPage/Login";
import DashboardPage from "./pages/Dashboard/Dashboard.page";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contactus" element={<ContactPage />} />
        <Route exact path="/apply" element={<Register />} />
        <Route exact path="/faqs" element={<Faq />} />

        {/* protected pages */}
        <Route path="/student/*" element={<DashboardPage />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
