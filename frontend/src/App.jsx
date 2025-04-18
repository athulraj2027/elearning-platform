import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./Pages/StudentPages/Login/Login";
import Signup from "./Pages/StudentPages/Signup/Signup";
import Home from "./Pages/StudentPages/Home/Home";
import TutorsLogin from "./Pages/TeacherPages/Login/TutorsLogin";
import TutorsSignup from "./Pages/TeacherPages/Signup/TutorsSignup";
import AdminLogin from "./Pages/AdminPages/Login/AdminLogin";
import StudentLayout from "./Layouts/StudentLayout";
import TutorLayout from "./Layouts/TutorLayout";
import AdminLayout from "./Layouts/AdminLayout";
import Dashboard from "./Pages/AdminPages/Dashboard/Dashboard";
import Categories from "./Pages/AdminPages/Categories/Categories";
import Customers from "./Pages/AdminPages/Customers/Customers";
import Tutors from "./Pages/AdminPages/Tutors/Tutors";
import Coupons from "./Pages/AdminPages/Coupons/Coupons";
import Offers from "./Pages/AdminPages/Offers/Offers";
import Courses from "./Pages/AdminPages/Courses/Courses";
import Purchases from "./Pages/AdminPages/Purchases/Purchases";

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      <Routes>
        {/* Student Routes */}

        <Route path="students" element={<StudentLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="" element={<Home />} />
        </Route>

        {/* Tutors Routes */}

        <Route path="tutors" element={<TutorLayout />}>
          <Route path="login" element={<TutorsLogin />} />
          <Route path="signup" element={<TutorsSignup />} />
        </Route>

        {/* Admin Routes */}

        <Route path="admin" element={<AdminLayout />}>
          <Route path="login" element={<AdminLogin />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="categories" element={<Categories />} />
          <Route path="customers" element={<Customers />} />
          <Route path="tutors" element={<Tutors />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="offers" element={<Offers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
