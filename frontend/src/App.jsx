import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";
import Login from "./Pages/StudentPages/Login/Login";
import Signup from "./Pages/StudentPages/Signup/Signup";
import Home from "./Pages/StudentPages/Home/Home";
import TutorsLogin from "./Pages/TeacherPages/Login/TutorsLogin";
import TutorsSignup from "./Pages/TeacherPages/Signup/TutorsSignup";
import AdminSignup from "./Pages/AdminPages/Signup/AdminSignup";
import AdminLogin from "./Pages/AdminPages/Login/AdminLogin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/students/login" element={<Login />} />
        <Route path="/students/signup" element={<Signup />} />

        <Route path="/tutors/login" element={<TutorsLogin />} />
        <Route path="/tutors/signup" element={<TutorsSignup />} />

        
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
