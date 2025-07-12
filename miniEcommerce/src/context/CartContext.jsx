//step1: import the createcontext 
import { createContext ,useState} from "react";
//step2: create the context
export const CartContext = createContext();
//step3: make the provider

export const CartProvider = ({children})=>{
    const [cart,setCart]=useState([]);

    const addToCart =(newProduct)=>{
        setCart(product=>[...product,newProduct])
    }

//     const addToCart = (newProduct) => {
//   setCart((prevCart) => {
//     const alreadyInCart = prevCart.find(
//       (item) => item.id === newProduct.id
//     );
//     if (alreadyInCart) {
//       return prevCart; // don't add again
//     }
//     return [...prevCart, newProduct];
//   });
// };

    return(
        <>
        <CartContext.Provider value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
        </>
    )
}