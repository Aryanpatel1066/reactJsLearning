//step1: import useState and usecontext
import {useState,createContext} from "react";

//step2: create and export context

export const WishlistContext = createContext();

//step3: make a function and provider


export function WishlistProvider({children}){
    const [wishlist,setWishlist]=useState([]);
    const addToWishlist=(item)=>{
        setWishlist((wishlist)=>[...wishlist,item]);
    }
    const deleteWishlist=(itemId)=>{
        setWishlist((wishlist)=>wishlist.filter((item)=>item.id !== itemId))
    }
    const clearAll=()=>{
        setWishlist([]);
    }
    return(
   <WishlistContext.Provider value={{wishlist,addToWishlist,deleteWishlist,clearAll}}>
    {children}
   </WishlistContext.Provider>
    )
}
