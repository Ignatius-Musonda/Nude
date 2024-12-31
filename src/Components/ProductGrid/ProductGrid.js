import React from 'react';
import './ProductGrid.css';
import img1 from "../../Images/run.jpg"

const ProductGrid = () => {
  return (
    <div className="product-grid">
      <div className="product-grid-header">
        <h2>Shop All Styles</h2>
        <p>
          Every pair of soleRebels is handcrafted with sustainable and upcycled
          materials in our workshop in Lusaka, Zambia, and shipped free to
          your door.
        </p>
      </div>

      <div className="grid-container">
        {/* Main/Large Product Card */}
        <div className="grid-item large">
          <div className="product-card">
            <img src={img1} alt="Sneakers" />
            <div className="overlay">
              <h3>Sneakers</h3>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
        </div>

        {/* Small Product Cards */}
        <div className="grid-item">
          <div className="product-card">
            <img src={img1}   alt="Slip-Ons" />
            <div className="overlay">
              <h3>Slip-Ons</h3>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="product-card">
            <img src={img1}  alt="Runners" />
            <div className="overlay">
              <h3>Runners</h3>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;