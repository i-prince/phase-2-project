// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // Import a custom CSS file

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>ABOUT US</h3>
            <p>
              <h4>Our Story:</h4>
            </p>
          </div>

          <div className="col-md-6 d-flex justify-content-end">
            <div>
              <h5>CONTACT US:</h5>
              <div className="d-flex align-items-center">
                <p>
                  <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebook} size="4x" className="icon-black" /> 
                  </a>
                </p>
                <p>
                  <a href="https://www.linkedin.com">
                    <FontAwesomeIcon icon={faLinkedin} size="4x" className="icon-black" /> 
                  </a>
                </p>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
