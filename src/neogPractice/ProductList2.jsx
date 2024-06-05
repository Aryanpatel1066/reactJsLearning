import {useContext} from "react"
import {CartContext} from "./CartContext"
export default function ProductList2({products}){
    const {addToCart}=useContext(CartContext);
    return(
        <>
        <br />
        productlist
        {
            products.map((product)=>(
                <div id={product.id} style={{border:"2px solid red",padding:"3rem",margin:"1rem",width:"400px"}}>
                    name:{product.name},price:{product.price}
                    <button onClick={()=>addToCart(product)}>add to cart</button>
                </div>
            ))
        }
        </>
    )
} 