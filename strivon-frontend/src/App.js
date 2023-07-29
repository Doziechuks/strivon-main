import "./App.css";
import Navbar from "./components/navbar/Navbar";
import DashboardPage from "./pages/Dashboard/Dashboard.page";
import { Route, Routes } from "react-router-dom";

// public pages
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/contactPage/ContactPage";
import Register from "./pages/registrationPage/Register";
import Faq from "./pages/contactPage/FaqPage/faq.page";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contactus" element={<ContactPage />} />
        <Route exact path="/apply" element={<Register />} />
        <Route exact path="/faqs" element={<Faq />} />
        <Route path="/student/*" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
