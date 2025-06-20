//step1: import context and useState
import { createContext,useState } from "react"

//step2: made a context
export const  CartContext = createContext();

//step3: make a provider that provid value

export function CartProvider({children}){
    const [cart,setCart]=useState([]);
    function addToCart(item){
        setCart((cart)=>[...cart,item])
    }
    function removeFromCart(itemId) {
      setCart((cart) => cart.filter(item => item.id !== itemId));
    }
    function clearCart() {
      setCart([]);
    }
    
    return(
      <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart}}>
        {children}
      </CartContext.Provider>
    )
}