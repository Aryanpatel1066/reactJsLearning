 import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    color: "#333",
  };

  const itemStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "10px",
    backgroundColor: "#fff",
  };

  const headingStyle = {
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🛒 Cart Page</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ol>
            {cart.map((item, index) => (
              <li key={index} style={itemStyle}>
                <h3>{item.name}</h3>
                <p><strong>Brand:</strong> {item.brand}</p>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
              </li>
            ))}
          </ol>
          <h3>Total Price: ₹{totalPrice}</h3>
        </>
      )}
    </div>
  );
}
