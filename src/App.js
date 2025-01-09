import React, { useState } from 'react';
import { Search, User } from 'lucide-react';
// import './home.css';
import LandingPage from './Components/Landing/Landing';
import ProductListing from './Pages/ProductListing/ProductListing';
import {Routes,Route,Router} from "react-router-dom"
import ProductPage from './Pages/ProductPage/ProductPage';
import AboutPage from './Pages/About/About';
import ContactPage from './Pages/Contact/ContactPage';




const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <>
    <Routes>
                      <Route path="/productlisting" element={<ProductListing/>}>
                      
                       </Route>
                     
                      <Route path="/" element={<LandingPage/>}>

                      </Route>
                      <Route path="/product" element={<ProductPage/>}>

                      </Route>
                      <Route path="/about" element={<AboutPage/>}>

                      </Route>
                      <Route path="/contact" element={<ContactPage/>}>

                      </Route>
                      </Routes>
    </>
   
  );
};

// {/* <div className="container">
//         <LandingPage/>
//         {/* <ProductListing/> */}
        
//     </div> */}

export default App;

// import React, { useState } from 'react';
// import { Menu, X, User, ShoppingBag, Search, Play, ChevronDown } from 'lucide-react';
// import img1 from "./../src/run.jpg"
// import Interlude from './Components/interlude/Interlude';

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

//       <style jsx>{`
//         .landing-page {
//           min-height: 100vh;
//           position: relative;
//         }

//         .shipping-banner {
//           width: 100%;
//           background: white;
//           padding: 8px 0;
//           text-align: center;
//           font-size: 14px;
//         }

//         nav {
//           position: absolute;
//           width: 100%;
//           z-index: 50;
//         }

//         .nav-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 24px 16px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           position: relative;
//         }

//         .nav-left {
//           display: flex;
//           align-items: center;
//           gap: 24px;
//         }

//         .menu-button {
//           display: none;
//           background: none;
//           border: none;
//           color: white;
//           cursor: pointer;
//         }

//         @media (max-width: 1024px) {
//           .menu-button {
//             display: block;
//           }
//           .desktop-nav {
//             display: none;
//           }
//         }

//         .desktop-nav {
//           display: flex;
//           gap: 24px;
//         }

//         .desktop-nav a {
//           color: white;
//           text-decoration: none;
//         }

//         .logo {
//           position: absolute;
//           left: 50%;
//           transform: translateX(-50%);
//         }

//         .logo img {
//           height: 40px;
//         }

//         .nav-right {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//         }

//         .nav-right button {
//           background: none;
//           border: none;
//           color: white;
//           cursor: pointer;
//         }

//         .cart-button {
//           position: relative;
//         }

//         .cart-count {
//           position: absolute;
//           top: -4px;
//           right: -4px;
//           background: white;
//           color: black;
//           border-radius: 50%;
//           height: 16px;
//           width: 16px;
//           font-size: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .currency-selector {
//           display: flex;
//           align-items: center;
//           color: white;
//           gap: 4px;
//         }

//         .hero {
//           height: 100vh;
//           position: relative;
//         }

//         .hero-background {
//           position: absolute;
//           inset: 0;
//         }

//         .hero-background img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .overlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.3);
//         }

//         .hero-content {
//           position: relative;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           color: white;
//           padding: 0 16px;
//         }

//         .hero-content h1 {
//           font-size: 48px;
//           font-weight: bold;
//           margin-bottom: 16px;
//         }

//         .hero-content p {
//           font-size: 20px;
//           margin-bottom: 32px;
//         }

//         .play-button {
//           background: none;
//           border: 2px solid white;
//           color: white;
//           border-radius: 50%;
//           padding: 16px;
//           cursor: pointer;
//         }

//         .mobile-menu {
//           position: fixed;
//           inset: 0;
//           background: white;
//           z-index: 50;
//           overflow-y: auto;
//         }

//         .mobile-menu-content {
//           padding: 16px;
//         }

//         .close-button {
//           position: absolute;
//           right: 16px;
//           top: 16px;
//           background: none;
//           border: none;
//           cursor: pointer;
//         }

//         .menu-items {
//           margin-top: 64px;
//         }

//         .menu-items a {
//           display: block;
//           font-size: 20px;
//           margin-bottom: 24px;
//           text-decoration: none;
//           color: black;
//         }

//         .divider {
//           height: 1px;
//           background: #eee;
//           margin: 24px 0;
//         }

//         .social-links {
//           display: flex;
//           gap: 16px;
//           margin-top: 24px;
//         }

//         .social-links img {
//           height: 24px;
//           width: 24px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LandingPage;