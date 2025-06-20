import {useState,useEffect} from "react";

export default function UserList (){
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState(false);
 const [data,setData]=useState([]);
 const fetchData =async()=>{
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error("network issue");
    }
    const result = await response.json();
    setData(result);
    console.log(result);
    setLoading(false)
    setError(false);
    }
    catch(err){
        setLoading(false);
        setError(true);
    }
 }
 useEffect(()=>{
   fetchData();
 },[])
    return(
        <>
        {loading && <b>Loading....</b>}
        {error && <b>error....</b>}
        {
            data.map(({id,name,email,address:{city,zipcode}})=>(
                <li key={id}>id:{id}, name:{name}, email{email}, address:{city}{zipcode}</li>
            ))
        }
        </>
    )
}