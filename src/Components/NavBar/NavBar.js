import React, { useState } from 'react';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import img2 from "../../Images/3.png";  // Assuming you want to reuse the logo image

import './NavBar.css';  // Ensure the styles are appropriately scoped

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);  // Toggles the menu visibility
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          {/* Toggle button for mobile */}
          <button onClick={toggleMobileMenu} className="menu-button">
            <Menu />
          </button>
          {/* Desktop links */}
          <div className={`desktop-nav ${isMobileMenuOpen ? 'hide' : ''}`}>
            <a href="#">Womens</a>
            <a href="#">Mens</a>
            <a href="#">Refer A Friend</a>
          </div>
        </div>

        {/* Logo */}
        <div className="logo">
          <img src={img2} alt="Logo" />
        </div>

        {/* Cart button */}
        <div className="nav-right">
          <button className="cart-button">
            <ShoppingBag />
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <button onClick={toggleMobileMenu} className="close-button">
              <X />
            </button>

            <div className="menu-items">
              <a href="#">Womens</a>
              <a href="#">Mens</a>
              <a href="#">Refer A Friend</a>
              <div className="divider"></div>
              <a href="#">Log in</a>
              <a href="#">Search</a>
              <div className="currency-selector">
                <span>USD</span>
                <ChevronDown />
              </div>
              <div className="social-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

// import React, { useState } from 'react';
// import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
// import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
// import img2 from "../../Images/3.png";  // Assuming you want to reuse the logo image

// import './NavBar.css';  // Make sure the styles are appropriately scoped

// const NavBar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav>
//       <div className="nav-container">
//         <div className="nav-left">
//           <button onClick={toggleMobileMenu} className="menu-button">
//             <Menu />
//           </button>
//           <div className={`desktop-nav ${isMobileMenuOpen ? 'hide' : ''}`}>
//             <a href="#">Womens</a>
//             <a href="#">Mens</a>
//             <a href="#">Refer A Friend</a>
//           </div>
//         </div>

//         <div className="logo">
//           <img src={img2} alt="Logo" />
//         </div>

//         <div className="nav-right">
//           <button className="cart-button">
//             <ShoppingBag />
//             <span className="cart-count">0</span>
//           </button>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="mobile-menu">
//           <div className="mobile-menu-content">
//             <button onClick={toggleMobileMenu} className="close-button">
//               <X />
//             </button>

//             <div className="menu-items">
//               <a href="#">Womens</a>
//               <a href="#">Mens</a>
//               <a href="#">Refer A Friend</a>
//               <div className="divider"></div>
//               <a href="#">Log in</a>
//               <a href="#">Search</a>
//               <div className="currency-selector">
//                 <span>USD</span>
//                 <ChevronDown />
//               </div>
//               <div className="social-links">
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
//                 <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest size={24} /></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
