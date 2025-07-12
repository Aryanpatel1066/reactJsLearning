// Add a button that shows/hides a paragraph of text when clicked.

import { useState } from "react";
function Qna1(){
 const [show,setShow]=useState(true);
 const handleShow=()=>{
    setShow(!show);
    console.log(show)
 }
    return(
        <>
        {
            show && <h1>aryan patel</h1>
        }
        
        <button onClick={handleShow}>{show ? "hide":"show"}</button>
        </>
    )
}

export default Qna1;