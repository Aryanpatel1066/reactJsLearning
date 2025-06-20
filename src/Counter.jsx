import { useState } from "react";

export default function Counter({onClick,count}){
   
    return(
        <>
         <button onClick={onClick}>count:{count}</button>
        </>
    )
}