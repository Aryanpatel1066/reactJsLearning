// import { useEffect , useState} from "react"
// const products = [
//     { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
//     { id: 2, name: 'T-Shirt', category: 'Clothing', price: 19.99 },
//     { id: 3, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
//     { id: 4, name: 'Headphones', category: 'Electronics', price: 99.99 },
//     { id: 5, name: 'Jeans', category: 'Clothing', price: 49.99 }
//    ];

// export default function PracticeUseEffect (){
//     const [data,setData]=useState([]);
//     const [loading,setLoading]=useState(true);
//      useEffect(()=>{
//         setTimeout(()=>{
//             setData(products);
//             setLoading(false);
//              console.log("ddd")
  
//         },4000)
        
//      },[])
     
//     return(
//         <>
//         use PracticeUseEffect

//         {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {data.map(({ id, name, price, category }) => (
//             <li key={id}>id: {id}, name: {name}, price: {price}, category: {category}</li>
//           ))}
//         </ul>
//       )}
//         </>
//     )
// }


import { useEffect , useState} from "react"
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
    { id: 2, name: 'T-Shirt', category: 'Clothing', price: 19.99 },
    { id: 3, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
    { id: 4, name: 'Headphones', category: 'Electronics', price: 99.99 },
    { id: 5, name: 'Jeans', category: 'Clothing', price: 49.99 }
   ];

export default function PracticeUseEffect (){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
     useEffect(()=>{
        setTimeout(()=>{
          try{
          setLoading(true);
            setData(produts);
            setLoading(false);
             console.log("ddd")
            }
            catch(err){
              setError(true);
              setLoading(false);
            }
        },2000)
        
     },[])
     
    return(
        <>
        use PracticeUseEffect
        <p>{loading && "Loading..."}</p>
      <p>{error && "Error"}</p>

        
        <ul>
          {data.map(({ id, name, price, category }) => (
            <li key={id}>id: {id}, name: {name}, price: {price}, category: {category}</li>
          ))}
        </ul>
      
        </>
    )
}