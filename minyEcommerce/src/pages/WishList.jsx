import { WishlistContext } from "../context/WishlistContext";
import { useContext } from "react";
export default function WishList() {
  const { wishlist,deleteWishlist,clearAll } = useContext(WishlistContext);
  return (
    <>
      <h2>wishlist management:{wishlist.length} </h2>
      <ul>
        {
            wishlist.map((item)=>{
                return(
                    <li key={item.id}>
                        name:{item.title},
                        category:{item.category},
                        price:{item.price} 
                        <button onClick={()=>deleteWishlist(item.id)}>remove</button>
                    </li>
                )
            })
        }
        <button onClick={clearAll}>clear cart</button>
      </ul>
    </>
  );
}
