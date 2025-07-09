import { useState } from "react";

function FontSizeIncrease(){
    const [size,setSize]=useState(18);
    function handleIncrease(){
        setSize(size + 1);
    }
    function handleDecrease(){
        // setSize(size-1)
        setSize(s=>s-1)
    }
    console.log(size)
    return(
        <>
        <h1 style={{fontSize:size}}>Welcome</h1>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        </>
    )
}
export default FontSizeIncrease;