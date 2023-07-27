import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";

// public pages
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/contactPage/ContactPage";
import Register from "./pages/registerationPage/Register";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contactus" element={<ContactPage />} />
        <Route exact path="/apply" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
