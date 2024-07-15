import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";
import { CartContext ,CartProvider} from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
const dataApi = "https://fakestoreapi.com/products";

const styleProduct = {
  border: "2px solid red",
  margin: "2rem",
  cursor: "pointer",
  listStyle: "none",
};

const boldStyle = {
  padding: "10px 20px",
};

const ProductList = () => {
  const {cart}=useContext(CartContext);
  const {addToCart}=useContext(CartContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {wishlist,addToWishlist}=useContext(WishlistContext);
  const fetchData = async () => {
    try {
      const response = await fetch(dataApi);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List Page:</h1>
      <h2>cart item is : {cart.length}</h2>
      <h2>wishlist item is : {wishlist.length}</h2>
      {loading && <h3>Loading....</h3>}
      {error && <h3>Error...</h3>}
      <ul>
        {data.map((item) => (
          <li style={styleProduct} key={item.id}>
            <b style={boldStyle}>title:</b>
            {item.title} <br />
            <b style={boldStyle}>category:</b>
            {item.category} <br />
            <b style={boldStyle}>price:</b>
            {item.price} <br />
            <NavLink to={`/productdetails/${item.id}`}>more details</NavLink>
            <button onClick={()=>addToCart(item)}>add to cart</button>
            <button onClick={()=>addToWishlist(item)}>add to wishlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
