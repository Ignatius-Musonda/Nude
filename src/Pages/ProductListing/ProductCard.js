// src/components/ProductListing/ProductCard.jsx
import React from 'react';
import './ProductListing.css';
import img1 from "../../Images/run.jpg"
import { Link } from 'react-router-dom';



export const ProductCard = ({ product }) => {
  return (
    <div className="productcardContainer">
      <div className="product-image">
      <Link to="/product"> 
        <img 
          //src={product.image} 
          src={img1} 
          alt={`${product.color} ${product.name}`}
          
        />

       </Link>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-color">{product.color}</p>
        <p className="product-price">${product.price} USD</p>
      </div>
    </div>
  );
};