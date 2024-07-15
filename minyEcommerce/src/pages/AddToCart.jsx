import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function AddToCart() {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <>
      <h1>Add to Cart Page</h1>
      <h2>Cart items: {cart.length}</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <b>Title:</b> {item.title} <br />
            <b>Category:</b> {item.category} <br />
            <b>Price:</b> {item.price} <br />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
    </>
  );
}
