import { useState } from "react";
const employees = [
    { id: "E1", name: "Arpit Jain", workExperience: 6 },
    { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
    { id: "E3", name: "Priya Shetty", workExperience: 9 },
    { id: "E4", name: "Aman Sen", workExperience: 1 }
  ];
export default function Emp(){
const [helight,setHeilight]=useState(false);
    const handleClick=()=>{
       setHeilight(!helight);
    }
    return(
        <>
        <h3>employee details:</h3>
        <ul>
            {
                employees.map(({id,name,workExperience})=>(
                    <li style={{border: workExperience >5 &&helight ?"2px solid red":" "}}>
                        <h4>name:{name},workExperience:{workExperience},</h4>
                    </li>
                ))
            }
        </ul>
        <button onClick={handleClick}>helight Employee</button>
        </>
    )
}