import { useState } from "react";

function Qna2(){
    const [input,setInput]=useState("");
    const [todos,setTodos]=useState([]);
    const handleChange =(e)=>{
        setInput(e.target.value);
    }
    const handleSubmit=()=>{
       setTodos([...todos,{item:input}]);
    }
      const handleDelete = (idToDelete) => {
    const updatedTodos = todos.filter(todo => todo.id !== idToDelete);
    setTodos(updatedTodos);
  };
    return(
        <>
       <input placeholder="enter task..." onChange={handleChange} value={input}/>
       <button onClick={handleSubmit}>add</button> 
       {
        todos.map((todos,index)=>(
            <>
            <li key={index}>{todos.item}</li>
                         <button onClick={() => handleDelete(todos.id)}>❌</button>

            
            </>
        ))
       }
        </>
    )
}
export default Qna2;