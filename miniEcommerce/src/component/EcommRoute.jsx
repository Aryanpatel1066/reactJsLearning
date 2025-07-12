 import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';
import ProductList from '../pages/ProductList';
import Wishlist from '../pages/Wishlist';

function EcommRoute() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default EcommRoute;
