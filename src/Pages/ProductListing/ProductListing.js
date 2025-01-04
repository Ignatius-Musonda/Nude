// src/components/ProductListing/index.jsx
import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Breadcrumb } from './Breadcrumb';
import './ProductListing.css';

const ProductListing = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'URBAN RUNNER tght',
      color: 'Denim Blue',
      price: 149.99,
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      name: 'URBAN RUNNER tght',
      color: 'Spike Green',
      price: 149.99,
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      name: 'URBAN RUNNER tght',
      color: 'Cherry Red',
      price: 149.99,
      image: '/api/placeholder/400/300'
    }
  ]);

  const [sortType, setSortType] = useState('all');

  const getSortedProducts = () => {
    switch (sortType) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'name-asc':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'color-asc':
        return [...products].sort((a, b) => a.color.localeCompare(b.color));
      default:
        return products;
    }
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className="container">
      <Breadcrumb />
      
      <div className="description">
        <p>Every pair of sneakers is lovingly handcrafted with sustainable materials.</p>
      </div>

      <div className="sort-container">
        <select 
          className="sort-select"
          value={sortType}
          onChange={handleSortChange}
        >
          <option value="all">All</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="color-asc">Color: A to Z</option>
        </select>
      </div>

      <div className="product-grid">
        {getSortedProducts().map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;

// src/components/ProductListing/ProductCard.jsx
// import React from 'react';
// import './ProductCard.css';

// export const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img 
//           src={product.image} 
//           alt={`${product.color} ${product.name}`}
//         />
//       </div>
//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p className="product-color">{product.color}</p>
//         <p className="product-price">${product.price} USD</p>
//       </div>
//     </div>
//   );
// };

// src/components/ProductListing/Breadcrumb.jsx
// import React from 'react';
// import './Breadcrumb.css';

// export const Breadcrumb = () => {
//   return (
//     <nav className="breadcrumb">
//       <ol>
//         <li><a href="/">Home</a></li>
//         <li>/</li>
//         <li><a href="/collections">Collections</a></li>
//         <li>/</li>
//         <li><a href="/collections/sneakers">Sneakers</a></li>
//       </ol>
//     </nav>
//   );
// };