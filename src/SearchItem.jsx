// import { useState } from "react"

// const products = [
//     { id: 1, name: 'Laptop', price: 999.99 },
//     { id: 2, name: 'Smartphone', price: 599.99 },
//     { id: 3, name: 'Tablet', price: 299.99 },
//     { id: 4, name: 'Headphones', price: 99.99 },
//     { id: 5, name: 'Smartwatch', price: 199.99 }
//   ];


// export default function SearchItem(){
//     const [searchItem,setSearchItem]=useState("");
//     const filteredProduct = products.filter(product=>product.name.toLowerCase().includes(searchItem.toLowerCase()));
//     return(
//         <>
        
//         <input placeholder="search the produtct"
//           value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
//         {
//             filteredProduct.map(({name,price})=>(
//                 <li>name:{name},price:{price}</li>
//             ))
//         }
//         </>
//     )
// }

// for practice we perform this task second time 

import { useState } from "react";
const fruitsData =[
    {id:1,name:"apple",price:130,color:"red"},
    {id:2,name:"mango",price:249,color:"yellow"},
    {id:3,name:"graps",price:22,color:"green"},
    {id:4,name:"banana",price:123,color:"yellow"},
    {id:5,name:"orange",price:23,color:"orange"}
]

export default function SearchItem(){
    const [serchValue,setSerchValue]=useState("");
    console.log(serchValue);

    const filteredData = fruitsData.filter(fruit=>fruit.name.toLowerCase().includes(serchValue.toLowerCase()));
    return(
        <>
         <input placeholder="search fruits..."
                value={serchValue} onChange={(e)=>setSerchValue(e.target.value)}
         />
        {
            filteredData.map(({id,name,price,color})=>(
                <li key={id} style={{color:color}}>
                name:{name},price:{price},color:{color}
                </li>
            ))
        }
        </>
    )
}