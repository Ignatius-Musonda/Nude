import React, { useState } from 'react';
import { Menu, X, User, ShoppingBag, Search, Play, ChevronDown } from 'lucide-react';
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';  // Import social icons from react-icons
import img1 from "../../Images/run.jpg"
import img2 from "../../Images/3.png"

import './LandingPage.css';  // Import LandingPage CSS
import Interlude from '../interlude/Interlude';
import Interludesec from '../InterludeSec/Interlude';
import ProductGrid from '../ProductGrid/ProductGrid';
import Section from '../Section/Section';
import StatsAndAwards from '../StatsAndAwards/StatsAndAwards';
import Footer from '../Footer/Footer';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="landing-page">
      <div className="shipping-banner">FREE SHIPPING</div>

      <nav>
        <div className="nav-container">
          <div className="nav-left">
            <button onClick={toggleMobileMenu} className="menu-button">
              <Menu />
            </button>
            <div className={`desktop-nav ${isMobileMenuOpen ? 'hide' : ''}`}>
              <a href="#">Womens</a>
              <a href="#">Mens</a>
              <a href="#">Refer A Friend</a>
            </div>
          </div>

          <div className="logo">
            <img src={img2} alt="Logo" />
          </div>

          <div className="nav-right">
            <button className="cart-button">
              <ShoppingBag />
              <span className="cart-count">0</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-background">
          <img src={img1} alt="Hero background" />
          <div className="overlay"></div>
        </div>
        
        <div className="hero-content">
          <h1>Step. Stride. Beyond.</h1>
          <p>The new FREEDOM H.S. is a runner as versatile + diverse as you.</p>
          <button className="play-button">
            <Play />
          </button>
        </div>
      </div>

      <Interludesec />
      <ProductGrid />
      <Section />
      <StatsAndAwards />
      <Footer />

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <button 
              onClick={toggleMobileMenu}
              className="close-button"
            >
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
                {/* Replace image placeholders with React Icons */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;


// import React, { useState } from 'react';
// import { Menu, X, User, ShoppingBag, Search, Play, ChevronDown } from 'lucide-react';
// import img1 from "../../Images/run.jpg"
// import img2 from "../../Images/3.png"

// import './LandingPage.css';  // Import LandingPage CSS
// import Interlude from '../interlude/Interlude';
// import Interludesec from '../InterludeSec/Interlude';
// import ProductGrid from '../ProductGrid/ProductGrid';
// import Section from '../Section/Section';
// import StatsAndAwards from '../StatsAndAwards/StatsAndAwards';
// import Footer from '../Footer/Footer';


// const LandingPage = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="landing-page">
//       <div className="shipping-banner">FREE SHIPPING</div>

//       <nav>
//         <div className="nav-container">
//           <div className="nav-left">
//             <button onClick={toggleMobileMenu} className="menu-button">
//               <Menu />
//             </button>
//             <div className={`desktop-nav ${isMobileMenuOpen ? 'hide' : ''}`}>
//               <a href="#">Womens</a>
//               <a href="#">Mens</a>
//               <a href="#">Refer A Friend</a>
//             </div>
//           </div>

//           <div className="logo">
//             <img src={img2}/>
//           </div>

//           <div className="nav-right">
//             {/* <button><Search /></button>
//             <button><User /></button> */}
//             <button className="cart-button">
//               <ShoppingBag />
//               <span className="cart-count">0</span>
//             </button>
//             {/* <div className="currency-selector">
//               <span>USD</span>
//               <ChevronDown />
//             </div> */}
//           </div>
//         </div>
//       </nav>

//       <div className="hero">
//         <div className="hero-background">
//           <img src={img1} alt="Hero background" />
//           <div className="overlay"></div>
//         </div>
        
//         <div className="hero-content">
//           <h1>Step. Stride. Beyond.</h1>
//           <p>The new FREEDOM H.S. is a runner as versatile + diverse as you.</p>
//           <button className="play-button">
//             <Play />
//           </button>
//         </div>
//       </div>

//       {/* Include the Interlude Component here */}
//       {/* <Interlude />  */}
//       <Interludesec/>
//       <ProductGrid/>
//       <Section/>
//       <StatsAndAwards/>
//       <Footer/>

//       {isMobileMenuOpen && (
//         <div className="mobile-menu">
//           <div className="mobile-menu-content">
//             <button 
//               onClick={toggleMobileMenu}
//               className="close-button"
//             >
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
//                 <a href="#"><img src="/api/placeholder/24/24" alt="Twitter" /></a>
//                 <a href="#"><img src="/api/placeholder/24/24" alt="Facebook" /></a>
//                 <a href="#"><img src="/api/placeholder/24/24" alt="Instagram" /></a>
//                 <a href="#"><img src="/api/placeholder/24/24" alt="Pinterest" /></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useState } from 'react';
// import { Menu, X, User, ShoppingBag, Search, Play, ChevronDown } from 'lucide-react';
// import img1 from "../../Images/run.jpg"
// // import Interlude from './Components/interlude/Interlude';
// import './LandingPage.css'; // Importing the CSS file
// import Interlude from '../interlude/Interlude';

// const LandingPage = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="landing-page">
//       <div className="shipping-banner">FREE SHIPPING</div>

//       <nav>
//         <div className="nav-container">
//           <div className="nav-left">
//             <button onClick={() => setIsMobileMenuOpen(true)} className="menu-button">
//               <Menu />
//             </button>
//             <div className="desktop-nav">
//               <a href="#">Womens</a>
//               <a href="#">Mens</a>
//               <a href="#">Refer A Friend</a>
//             </div>
//           </div>

//           <div className="logo">
//             <img src="/api/placeholder/120/40" alt="SoleRebels" />
//           </div>

//           <div className="nav-right">
//             <button><Search /></button>
//             <button><User /></button>
//             <button className="cart-button">
//               <ShoppingBag />
//               <span className="cart-count">0</span>
//             </button>
//             <div className="currency-selector">
//               <span>USD</span>
//               <ChevronDown />
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="hero">
//         <div className="hero-background">
//           <img src={img1} alt="Hero background" />
//           <div className="overlay"></div>
//         </div>
        
//         <div className="hero-content">
//           <h1>Step. Stride. Beyond.</h1>
//           <p>The new FREEDOM H.S. is a runner as versatile + diverse as you.</p>
//           <button className="play-button">
//             <Play />
//           </button>
//         </div>
//       </div>

//       <Interlude/>

//       {isMobileMenuOpen && (
//         <div className="mobile-menu">
//           <div className="mobile-menu-content">
//             <button 
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="close-button"
//             >
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
//                 <a href="#"><img src="/api/placeholder/24/24" alt="Twitter" /></a>
//                 <a href="#"><img src="/api/placeholder/24/24" alt="Facebook" /></a>
//                 <a href="#"><img src="/api/placeholder/24/24" alt="Instagram" /></a>
//                 <a href="#"><img src="/api/placeholder/24/24" alt="Pinterest" /></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LandingPage;
