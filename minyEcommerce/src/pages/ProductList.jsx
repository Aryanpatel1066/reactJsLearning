import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
      {loading && <h3>Loading....</h3>}
      {error && <h3>Error...</h3>}
      <ul>
        {data.map(({ id, title, category, price }) => (
          <li style={styleProduct} key={id}>
            <b style={boldStyle}>title:</b>
            {title} <br />
            <b style={boldStyle}>category:</b>
            {category} <br />
            <b style={boldStyle}>price:</b>
            {price} <br />
            <NavLink to={`/productdetails/${id}`}>more details</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
