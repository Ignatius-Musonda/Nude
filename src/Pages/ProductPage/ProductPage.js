import React, { useState } from 'react';
import './ProductPage.css';
import img1 from "../../Images/run.jpg"
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../../Components/ScrollTop/ScroolTop';
const ProductPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  const images = [
    '/api/placeholder/500/400',
    '/api/placeholder/500/400',
    '/api/placeholder/500/400'
  ];

  const classicColors = [
    { name: 'Navy', color: '#1e3a8a' },
    { name: 'Olive', color: '#3d4f25' },
    { name: 'Burgundy', color: '#881337' },
    { name: 'Brown', color: '#452810' },
    { name: 'Blue', color: '#2563eb' }
  ];

  const limitedColors = [
    { name: 'Black', color: '#000000' },
    { name: 'Gray', color: '#9ca3af' },
    { name: 'Chevron Green', color: '#22c55e' },
    { name: 'Wave Blue', color: '#60a5fa' },
    { name: 'Gold', color: '#eab308' }
  ];

  return (
      <>        
      <div className='NavBarCover'>
          <NavBar/>
          <ScrollToTop/>
      </div>
            

<div className="product-container">
      <div className="breadcrumb">
        Home / All Products / URBAN RUNNER tght
      </div>
      
      <div className="product-layout">
        {/* Left Column - Images */}
        <div className="product-images">
          <div className="main-image">
            <img 
              src={img1}
              //src={images[currentImage]}
              alt="Urban Runner"
            />
          </div>
          <div className="thumbnail-grid">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`thumbnail ${currentImage === idx ? 'active' : ''}`}
              >
                <img src={img1} alt={`Thumbnail ${idx + 1}`} />
                {/* <img src={img} alt={`Thumbnail ${idx + 1}`} /> */}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="product-details">
          <h1>URBAN RUNNER tght</h1>
          <p className="price">$149.99 USD</p>

          <div className="product-description">
            <p>
              Featuring a hand-woven fabric upper, accent fabric edge-wrap, super soft interiors lined with organic cotton, and capped off with our signature recycled tire laces and soles.
            </p>
            <p>
              Made with no animal products, these sneakers are part of our b*knd series of vegan footwear.
            </p>
          </div>

          <div className="color-section">
            <h3>CLASSICS</h3>
            <div className="color-options">
              {classicColors.map((color, idx) => (
                <button
                  key={idx}
                  className="color-swatch"
                  style={{ backgroundColor: color.color }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="color-section">
            <h3>LIMITED EDITION · Black</h3>
            <div className="color-options">
              {limitedColors.map((color, idx) => (
                <button
                  key={idx}
                  className="color-swatch"
                  style={{ backgroundColor: color.color }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="size-section">
            <label>Size:</label>
            <select 
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">Select your size</option>
              {[7, 8, 9, 10, 11, 12].map(size => (
                <option key={size} value={size}>US {size}</option>
              ))}
            </select>
            <p className="size-guide">
              Our styles are available in whole sizes only. If you usually wear a ½ size, we recommend sizing up.
            </p>
            <button className="sizing-guide-link">
              View Sizing Guide
            </button>
          </div>

          <div className="button-group">
            <button className="add-to-cart">Add To Cart</button>
            <button className="shop-pay">Buy with ShopPay</button>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
      </>
    
  );
};

export default ProductPage;