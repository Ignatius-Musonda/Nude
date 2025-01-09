import React from 'react';
import './AboutPage.css';

import img1 from "../../Images/run.jpg"
import NavBar from '../../Components/NavBar/NavBar';
import ScrollToTop from '../../Components/ScrollTop/ScroolTop';
import Footer from '../../Components/Footer/Footer';



const AboutPage = () => {
  return (

    <>  

     <div className='NavBarCover'>
          <NavBar/>
          <ScrollToTop/>
      </div>
            


         <div className="about-container">
      {/* Hero Banner */}
      <div className="hero-banner">
        {/* <img src="/api/placeholder/1200/400" alt="Hero banner" /> */}
        <img src={img1} alt="Hero banner" />
        <div className="hero-overlay">
          <h1 className="hero-title">Our Story</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Story Section */}
        <div className="story-section">
          <h2 className="story-title">The soleRebels Story</h2>
          <p className="story-text">
            Founded with a vision to blend traditional craftsmanship with modern design, 
            we create unique footwear that celebrates our community's creative artisan talents. 
            Our focus remains on sustainable and ethical production methods, ensuring both 
            quality products and positive community impact.
          </p>
        </div>

        {/* Community Image */}
        <div className="community-image">
          <img 
            // src="/api/placeholder/800/500" 
            src={img1}
            alt="Our community of artisans"
          />
        </div>

        {/* Ethical Production Section */}
        <div className="ethical-production">
          <div className="ethical-content">
            <h2 className="ethical-title">Ethical Production</h2>
            <p className="ethical-text">
              We place our community at the heart of everything we do, employing skilled 
              artisans and providing comprehensive benefits while maintaining sustainable 
              practices throughout our production process.
            </p>
            <ul className="benefits-list">
              <li className="benefit-item">
                <svg className="benefit-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" 
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
                Full medical benefits and family support
              </li>
              <li className="benefit-item">
                <svg className="benefit-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" 
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
                Industry-leading wages and growth opportunities
              </li>
              <li className="benefit-item">
                <svg className="benefit-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" 
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
                Sustainable and eco-friendly practices
              </li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="ethical-image">
            <img 
              src={img1}
            //   src="/api/placeholder/600/400" 
              alt="Ethical production process"
            />
          </div>
        </div>
      </div>
    </div>

    <div className='footerCover'>
          <Footer/>
      </div>


    </>
   
  );
};

export default AboutPage;