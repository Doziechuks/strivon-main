import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";

// public pages
import HomePage from "./pages/HomePage/HomePage";
<<<<<<< HEAD
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
=======
import DashboardPage from "./pages/Dashboard/Dashboard.page";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student/*" element={<DashboardPage />} />
>>>>>>> 8574e1a5bb42edb99d4d0b0446c36b0ef765bedc
      </Routes>
    </div>
  );
}

export default App;
