// src/components/ProductListing/ProductCard.jsx
import React from 'react';
import './ProductListing.css';
import img1 from "../../Images/run.jpg"


export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          //src={product.image} 
          src={img1} 
          alt={`${product.color} ${product.name}`}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-color">{product.color}</p>
        <p className="product-price">${product.price} USD</p>
      </div>
    </div>
  );
};