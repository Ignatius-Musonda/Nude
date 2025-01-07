import React from "react";
import "./Section.css";
import img1 from "../../Images/run.jpg"

const Section = () => {
  return (
    <div className="section-container">
      {/* Top Section */}
      <div className="top-section">
        <div className="image-container">
          <img
            //src="your-image-url-here"
            src={img1}
            alt="Yellow shoe"
            className="main-image"
          />
        </div>
        <div className="text-container">
          <h1>#LIVE.NUDE</h1>
          <p>
            From day 1 at Nudefeet, we have been reimagining what footwear
            could be, while also reimagining how the lives of the people in our
            community could be elevated by deploying their artisan talents into
            making incredible footwear that would delight people around the
            world.
          </p>
          <p>
            And since that 1st day we've never stopped, proudly crafting
            footwear that blends artisan-crafted & upcycled materials.
          </p>
          <p>
            The result: the world’s finest handmade runners that let us all
            walk, run, train & LIVE. SOLEFULLY.
          </p>
          <p className="founder">Nelson Ntongama, Founder</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="product-info">
          <h4>BEST SELLER</h4>
          <h2>FREEDOM H.S.</h2>
          <p>PERFORMANCE. COMFORT. STYLE.</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
        <div className="product-image">
          <img  src={img1} alt="Shoe in nature" />
        </div>
      </div>
    </div>
  );
};

export default Section;
