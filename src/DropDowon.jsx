// import { useState } from "react";
// const products = [
//     { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
//     { id: 2, name: 'T-Shirt', category: 'Clothing', price: 19.99 },
//     { id: 3, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
//     { id: 4, name: 'Headphones', category: 'Electronics', price: 99.99 },
//     { id: 5, name: 'Jeans', category: 'Clothing', price: 49.99 }
//   ];
// export default function DropDowon(){
//     const [selectedValue,setSelectedValue]=useState("All");
//     console.log(selectedValue);
//     const filterdData = selectedValue === "All"
//     ?products
//     :products.filter(item =>item.category === selectedValue);
//     return(
//         <>
//         <select onChange={(e)=>setSelectedValue(e.target.value)}value={selectedValue}>
//             <option value="All">All</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Clothing">Clothing</option>
//             <option value="Home Appliances">Home Appliance</option>
//         </select>
//         <ul>
//             {
//                 filterdData.map(({id,name,category,price})=>(
//                     <li>id:{id}, name:{name}, price:{price}, category:{category}</li>
//                 ))
//             }
//         </ul>
//         </>
//     )
// }