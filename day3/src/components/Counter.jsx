import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0)
    const increseCount=()=>{
        setCount((count)=>count+1)
    }
    const decreseCount=()=>{
        setCount((count)=>count-1)
    }
    const resetCount=()=>{
        setCount(0)
    }
    return(
        <>
        <button onClick={increseCount}>increment</button>
        <button onClick={decreseCount}>decrement</button>
        <button onClick={resetCount}>reset</button>
        <h1>{count}</h1>
        </>
    )
}

export default Counter;