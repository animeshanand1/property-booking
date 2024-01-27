import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p style={{color:'#6CB4EE'}}>Email: info@propertybooking.com</p>
          <p style={{color:'#6CB4EE'}} >Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section-social-media">
          <h4>Follow Us</h4>
          <p>
            Facebook{" "}
            <span>
              <i className="fab fa-facebook-square" />
            </span>
          </p>
          <p>
            Twitter{" "}
            <span>
              <i className="fab fa-twitter" />
            </span>
          </p>
          <p>
            Instagram{" "}
            <span>
              <i className="fab fa-instagram" />
            </span>
          </p>{" "}
        </div>
        <div className="footer-section">
          <h4>Explore</h4>
          <p style={{color:'#0076CE'}}>Home</p>
          <p style={{color:'#0076CE'}}>Properties</p>
          <p style={{color:'#0076CE'}}>Contact</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{color:'#DE3163'}}>&copy; 2024 Property Booking. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
