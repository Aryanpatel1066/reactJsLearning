import React, { useState } from 'react';
import products from './products';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showInStock, setShowInStock] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStockFilter = () => {
    setShowInStock(!showInStock);
  };

  const filteredProducts = products.filter(product => {
    const inStockMatch = showInStock ? product.inStock : true;
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return inStockMatch && searchMatch;
  });

  const categories = Array.from(new Set(filteredProducts.map(product => product.category)));

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <label>
        <input
          type="checkbox"
          checked={showInStock}
          onChange={handleStockFilter}
        />
        Only show products in stock
      </label>
      {categories.map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {filteredProducts
              .filter(product => product.category === category)
              .map(product => (
                <li key={product.name} style={{ color: product.inStock ? 'black' : 'red' }}>
                  {product.name} - ${product.price}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
