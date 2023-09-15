import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer1">
        <p>ABOUT US</p>
        <div>
          <p>Our story</p>
          <p></p>
        </div>
      </div>

      <div className="footer2">
        <p>CONTACT US</p>
        <p>
          <a href="https://facebook.com">facebook</a>
        </p>
        <p>
          {" "}
          <a href="https://linkedin.com">linkedin</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
