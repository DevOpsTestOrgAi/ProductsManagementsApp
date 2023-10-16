import React, { useState } from 'react';
import './AddingProduct.css';
import Navbar from '../layout/Navbar';

const AddingProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const addProduct = () => {

    setNewProduct({
      name: '',
      description: '',
      price: '',
      stock: '',
      image: '',
    });
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2>Add a New Product</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Product Description"
            value={newProduct.description}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={handleInputChange}
          />
          <button type="button" onClick={addProduct}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddingProduct;
