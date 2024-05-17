import { useState } from "react"

export default function ButtonLayout(){
    const [value,setValue]=useState(null);
        
       const handleClick = ()=>{
      
            setValue("x")
     }
      
     return(
        <>
        <button onClick={handleClick}>{value}</button>
        </>
    )
}