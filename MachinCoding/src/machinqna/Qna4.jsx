import { useState } from "react";

function Qna4(){
    const [fruits,setFruits]=useState(["apple","mango"])
    const [inputFruit,setInputFruit]=useState("");
    const HashChangeFruit = (e)=>{
        setInputFruit(e.target.value);
    }
    const addFruit=()=>{
        const newFruit = inputFruit;
 setFruits(prevFruits => [...prevFruits, newFruit])

    }
    return(
        <>
        {
            fruits.map((fruit,item)=>(
                <li key={item}>{fruit}</li>
            ))
        }
        <input type="add more fruits.." onChange={HashChangeFruit} value={inputFruit}/>
        <button onClick={addFruit}>Add</button>
        </>
    )
}
export default Qna4;