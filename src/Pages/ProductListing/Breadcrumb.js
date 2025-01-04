import React from 'react';
import './ProductListing.css';


export const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li>/</li>
        <li><a href="/collections">Collections</a></li>
        <li>/</li>
        <li><a href="/collections/sneakers">Sneakers</a></li>
      </ol>
    </nav>
  );
};