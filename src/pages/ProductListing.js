import React from 'react';
import './productListing.css';
import Navbar from '../layout/Navbar';


const Product = ({ product }) => (
  <div className="product">
    <img src={product.image} alt={product.name} />
    <div className="product-details">
      <h2>{product.name}</h2>
      <p className="description">{product.description}</p>
      <div className="product-info">
        <span className="price">${product.price}</span>
        <span className="stock">Stock: {product.stock} left</span>
      </div>
      <button className="modify-button">Modify</button>
      <button className="delete-button">Delete</button>
    </div>
  </div>
);



const ProductsListing = () => {
  const products = [
    {
      id: 1,
      name: 'Edea spinner',
      description: 'Classic simple design',
      price: 49.99,
      stock: 10, 
      image: require('./assets/product1.jpg'),
    },
    {
      id: 2,
      name: 'Turning board',
      description: 'Pink and lavender 3D swirl',
      price: 54.99,
      stock: 5, 
      image: require('./assets/product2.jpg'),
    },
    {
      id: 3,
      name: 'Red band e-spinner',
      description: 'Off-ice training for doubles and advanced spins',
      price: 69.99,
      stock: 7, 
      image: require('./assets/product3.jpg'),
    },
    {
      id: 4,
      name: 'Yellow band e-spinner',
      description: 'Off-ice training for singles, turns, and spins',
      price: 49.99,
      stock: 3, 
      image: require('./assets/product4.jpg'),
    },
    {
      id: 5,
      name: 'Classic pink spinner',
      description: 'Graceful feather print',
      price: 39.99,
      stock: 15, 
      image: require('./assets/product5.jpg'),
    },
    {
      id: 6,
      name: 'Edea e-spinner with red band',
      description: 'Green and purple dynamic color swirl design',
      price: 69.99,
      stock: 2, 
      image: require('./assets/product6.jpg'),
    },
  ];

  
    return (
      <div>
        <Navbar/>
        <div className="product-list">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  

export default ProductsListing;
