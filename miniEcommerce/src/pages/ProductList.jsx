 import { useEffect, useState, useContext } from "react";
import { fakeFetch } from "../component/api";
import { NavLink, useSearchParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";

function ProductList() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cart, addToCart } = useContext(CartContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();

  const electronicProduct = async () => {
    try {
      setLoading(true);
      const response = await fakeFetch("https://example.com/api/products");
      let result = response.data.products;

      const category = searchParams.get("category");
      const brand = searchParams.get("brand");

      if (category) {
        result = result.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
      }

      if (brand) {
        result = result.filter(
          (item) => item.brand.toLowerCase() === brand.toLowerCase()
        );
      }

      if (search.trim() !== "") {
        result = result.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      setData(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    electronicProduct();
  }, [searchParams, search]);

  // Define reusable inline styles
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: theme === "light" ? "#f9f9f9" : "#1e1e1e",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
  };

  const inputStyle = {
    padding: "8px",
    margin: "10px 0",
    width: "300px",
  };

  const navLinkStyle = {
    marginRight: "10px",
    textDecoration: "none",
    color: theme === "light" ? "#007bff" : "#66b2ff",
  };

  const productCardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px 0",
    backgroundColor: theme === "light" ? "#fff" : "#2e2e2e",
  };

  const buttonStyle = {
    padding: "8px 12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <button
        style={{
          background: theme === "light" ? "#eee" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
        onClick={toggleTheme}
      >
        Switch Theme
      </button>

      <div>
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={inputStyle}
        />
      </div>

      <NavLink to="/cart" style={navLinkStyle}>
        🛒 Go to Cart ({cart.length})
      </NavLink>

      <h1>📦 Product List</h1>
      <h4>{loading && "Loading..."}</h4>

      <div>
        <h4>Filter by Category:</h4>
        <NavLink to="/" style={navLinkStyle}>All</NavLink> | 
        <NavLink to="/?category=Smartphones" style={navLinkStyle}>Smartphones</NavLink> | 
        <NavLink to="/?category=Laptops" style={navLinkStyle}>Laptops</NavLink> | 
        <NavLink to="/?category=Tablets" style={navLinkStyle}>Tablets</NavLink>

        <h4>Filter by Brand:</h4>
        <NavLink to="/?brand=Apple" style={navLinkStyle}>Apple</NavLink> | 
        <NavLink to="/?brand=Samsung" style={navLinkStyle}>Samsung</NavLink> | 
        <NavLink to="/?brand=Dell" style={navLinkStyle}>Dell</NavLink>
      </div>

      <ol>
        {data.map(({ id, name, description, price, quantity, brand, category }) => (
          <li key={id} style={productCardStyle}>
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Brand: {brand}</p>
            <p>Category: {category}</p>
            <b>Price: ₹{price}</b> <br />
            <NavLink to={`/product/${id}`} style={{ marginRight: "10px" }}>
              More details..
            </NavLink>
            <button
              style={buttonStyle}
              onClick={() =>
                addToCart({ id, name, price, quantity, brand, category })
              }
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ProductList;
