// src/pages/Products.js
import React from 'react';
import { products } from '../data/Products.js';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;