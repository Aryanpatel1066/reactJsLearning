import { useState } from "react";

function FruitData({itemList}){
    const [filter,setFilter]=useState("All");

    return(
        <>
        <button onClick={()=>setFilter("All")}>All</button>
            <button onClick={()=>setFilter("Fruit")}>Fruits</button>
            <button onClick={()=>setFilter("Vegetable")}>Vegi</button>
          <ul>
                {itemList
                    .filter(item => filter === "All" || item.category === filter)
                    .map(({ id, name, category }) => (
                        <li key={id} style={{ color: category === "Fruit" ? "orange" : "green" }}>
                            {name}
                        </li>
                    ))}
            </ul>
        </>
    )
}
export default FruitData;