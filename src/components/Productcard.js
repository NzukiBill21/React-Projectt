import React from 'react';
import { Link } from 'react-router-dom'; 
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link> {/* Use Link here */}
    </div>
  );
};

export default ProductCard;
