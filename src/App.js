import Kasi from "./home.js";
import Service from "./service.js";
import About from "./about.js";
import Contact from "./contact.js";
import "./App.css";
import logo1 from "./app pic/home.png";
import logo2 from "./app pic/info.png";
import logo3 from "./app pic/support.png";
import logo4 from "./app pic/contact-form.png";
import logo from "./bike-logo.jpg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Cointainer() {
  return (
    <div>
      <header>
        <h1 className="head2">grand Bike Pit stop</h1>
      </header>
      <Router>
        <div className="link">
          <Link to="/" className="li">
            <img src={logo1} alt="logo" className="logo_img" />
          </Link>
          <Link to="/about" className="li">
            <img src={logo2} alt="logo" className="logo_img" />
          </Link>
          <Link to="/service" className="li">
            <img src={logo4} alt="logo" className="logo_img" />
          </Link>
          <Link to="/contact" className="li">
            <img src={logo3} alt="logo" className="logo_img" />
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Kasi></Kasi>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default Cointainer;
