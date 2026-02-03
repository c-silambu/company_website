import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>AEVO Technology</h3>
          <p>
            We deliver modern web solutions using cutting-edge technologies.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
              <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
            
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: hr@aevo.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 AEVO Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
