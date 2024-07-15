import { createContext, useState } from "react";

// Step 2: Create and export the context
export const CartContext = createContext();

// Step 3: Create the provider component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((cart) => [...cart, item]);
  }
   
  function removeFromCart(itemId) {
    setCart((cart) => cart.filter(item => item.id !== itemId));
  }
  function clearCart() {
    setCart([]);
  }
  return (
    <CartContext.Provider value={{ cart, addToCart,removeFromCart,clearCart}}>
      {children}
    </CartContext.Provider>
  );
}
