import { useState } from "react"

export default function PracticeInput(){
    const [inputValue,setInputValue]=useState(" ");
    const [firstName,setFirstName]=useState(" ");
    const [email,setEmail]=useState(" ");
    const [submitedData,setSubmitedData]=useState(null)
    const [checkbox,setCheckbox]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
               setSubmitedData({firstName,email});
            console.log(firstName);
            console.log(email)
    }
    // const handleCheckbox =(e)=>{
    //          setCheckbox(!true)
    // }
    return(
        <>
        <input placeholder="enter whatever" onChange={(e)=>setInputValue(e.target.value)}/>
        <p>{inputValue}</p>
        <form onSubmit={handleSubmit}>
            <label>
                name:<input placeholder="enter your name:" onChange={(e)=>setFirstName(e.target.value)} />
            </label>
            <label>
                email:<input placeholder="enter your email:" onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <button>submit</button>
            <br />
           {
            submitedData &&  <b>Name:{submitedData.firstName},email:{submitedData.email}</b>
           }

        </form>

        <label>show para or not :
        <input type="checkbox" onChange={(e)=>setCheckbox(e.target.checked)}/>
        </label><br />
       
        {
            checkbox &&<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut distinctio nisi repellendus ex quia aperiam porro itaque. Laborum, rem et.</p>
        }
        </>
    )
}