// // import { useEffect , useState} from "react"
// // const products = [
// //     { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
// //     { id: 2, name: 'T-Shirt', category: 'Clothing', price: 19.99 },
// //     { id: 3, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
// //     { id: 4, name: 'Headphones', category: 'Electronics', price: 99.99 },
// //     { id: 5, name: 'Jeans', category: 'Clothing', price: 49.99 }
// //    ];

// // export default function PracticeUseEffect (){
// //     const [data,setData]=useState([]);
// //     const [loading,setLoading]=useState(true);
// //      useEffect(()=>{
// //         setTimeout(()=>{
// //             setData(products);
// //             setLoading(false);
// //              console.log("ddd")
  
// //         },4000)
        
// //      },[])
     
// //     return(
// //         <>
// //         use PracticeUseEffect

// //         {loading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <ul>
// //           {data.map(({ id, name, price, category }) => (
// //             <li key={id}>id: {id}, name: {name}, price: {price}, category: {category}</li>
// //           ))}
// //         </ul>
// //       )}
// //         </>
// //     )
// // }


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
//     const [error,setError]=useState(false);
//      useEffect(()=>{
//         setTimeout(()=>{
//           try{
//           setLoading(true);
//             setData(products);
//             setLoading(false);
//             setError(false)
//              console.log("ddd")
//             }
//             catch(err){
//               setError(true);
//               setLoading(false);
//             }
//         },2000)
        
//      },[])
     
//     return(
//         <>
//         use PracticeUseEffect
//         <p>{loading && "Loading..."}</p>
//       <p>{error && "Error"}</p>

        
//         <ul>
//           {data.map(({ id, name, price, category }) => (
//             <li key={id}>id: {id}, name: {name}, price: {price}, category: {category}</li>
//           ))}
//         </ul>
      
//         </>
//     )
// }
import { useEffect, useState } from "react";

export default function PracticeUseEffect() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Practice UseEffect</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data.</p>}
      {!loading && !error && (
        <ul>
          {data.map(({ id, title, body }) => (
            <li key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
