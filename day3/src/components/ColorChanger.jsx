import { useState } from "react"

export default function ColorChanger(){
    const [color,setColor]=useState("pink");
    const handleColor=(e)=>{
        setColor(e.target.value);
    }
    return(
        <>
        <div style={{border:"3px solid red",height:"200px",widht:"200px",backgroundColor:color}}></div>
        <select onChange={handleColor} value={color}>
            <option value={"red"}>red
            </option>
            <option value="yellow">yellow</option>
        </select>
        </>
    )
}