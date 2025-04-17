import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";
import Login from "./Pages/StudentPages/Login/Login";
import Signup from "./Pages/StudentPages/Signup/Signup";
import Home from "./Pages/StudentPages/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
