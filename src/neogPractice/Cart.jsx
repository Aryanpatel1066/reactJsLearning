//for use the context value step1: import cartcontext and usecontext
import { useContext } from "react"
import {CartContext} from "../neogPractice/CartContext"
export default function Cart(){
    const {cart}=useContext(CartContext);
    const {removeFromCart}=useContext(CartContext);
    const {clearCart}=useContext(CartContext);
    return(
        <>
         {
            cart.map((item)=>(
                <div style={{border:"2px solid red",height:"100px",margin:"2rem"}}>{item.name}
                <button onClick={()=>removeFromCart(item.id)}>remove</button>
                </div>
            ))
        }
        <button onClick={clearCart}>clear All</button>
        <div>Total:{cart.reduce((totalprice,item)=>(totalprice+=item.price),0)}</div>
        </>
    )
}