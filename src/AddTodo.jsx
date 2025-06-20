import { useState } from "react"

export default function AddTodo({addTodo}){
    const [value,setValue]=useState("");
    console.log(value);
    const  handleSubmit = (e)=>{
        e.preventDefault();
        if(!value) return;
        
        addTodo(value);
        setValue("")
    }
    return(
        <>
        
        <form  onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setValue(e.target.value)} />
            <button type="submit" value={value}>Add todo</button>
        </form>
        </>
    )
}