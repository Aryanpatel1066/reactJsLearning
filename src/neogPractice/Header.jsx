import { NavLink } from "react-router-dom"
import { CartContext } from "./CartContext"
import { useContext } from "react"
export const Header =()=>{
    const {cart}=useContext(CartContext);
    return(
        <>
        header component 
        total item : {cart.length}
        <br />
        <NavLink to="/">Home</NavLink>{" "}||{" "}
        <NavLink to="/cart">cart</NavLink>
        </>
    )
}