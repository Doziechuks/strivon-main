import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import DashboardPage from "./pages/HomePage/Dashboard/Dashboard.page";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
