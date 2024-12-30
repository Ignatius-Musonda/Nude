
import React from 'react';
import './Footer.css';
import img2 from "../../Images/3.png"

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <img src={img2} alt="Company Logo" className="logo" />
      </div>
      
      {/* Rest of the footer content remains the same */}
      <div className="footer-section">
        <h3>Shop</h3>
        <ul>
          <li><a href="#">Mens</a></li>
          <li><a href="#">Womens</a></li>
          <li><a href="#">Vegan</a></li>
          <li><a href="#">Gift Cards</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>About</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Ethics</a></li>
          <li><a href="#">Our Materials</a></li>
          <li><a href="#">In the News</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Help</h3>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Rewards</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Returns Policy</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="social-links">
        <a href="#">Twitter</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Pinterest</a>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </div>
  </footer>
);

export default Footer;

// import React from 'react';
// import './Footer.css';

// const Footer = () => (
//   <footer className="footer">
//     <div className="footer-container">
//       <div className="footer-logo">
//         <div className="logo-placeholder"></div>
//       </div>
      
//       <div className="footer-section">
//         <h3>Shop</h3>
//         <ul>
//           <li><a href="#">Mens</a></li>
//           <li><a href="#">Womens</a></li>
//           <li><a href="#">Vegan</a></li>
//           <li><a href="#">Gift Cards</a></li>
//         </ul>
//       </div>

//       <div className="footer-section">
//         <h3>About</h3>
//         <ul>
//           <li><a href="#">About Us</a></li>
//           <li><a href="#">Our Ethics</a></li>
//           <li><a href="#">Our Materials</a></li>
//           <li><a href="#">In the News</a></li>
//         </ul>
//       </div>

//       <div className="footer-section">
//         <h3>Help</h3>
//         <ul>
//           <li><a href="#">FAQ</a></li>
//           <li><a href="#">Rewards</a></li>
//           <li><a href="#">Shipping Policy</a></li>
//           <li><a href="#">Returns Policy</a></li>
//           <li><a href="#">Privacy Policy</a></li>
//           <li><a href="#">Contact Us</a></li>
//         </ul>
//       </div>
//     </div>

//     <div className="footer-bottom">
//       <div className="social-links">
//         <a href="#">Twitter</a>
//         <a href="#">Facebook</a>
//         <a href="#">Instagram</a>
//         <a href="#">Pinterest</a>
//       </div>
//       <div className="copyright">
//         © {new Date().getFullYear()} All rights reserved
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;