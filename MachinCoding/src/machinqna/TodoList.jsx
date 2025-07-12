import { useState } from "react";

function TodoList (){
    const [taskInput,setTaskInput]=useState("");
    const [todos,setTodos]=useState(["complete react","start backend"])
    const handleInput = (e)=>{
        setTaskInput(e.target.value);
    }
    const addTodoItem =()=>{
        const newTodo = taskInput;
        setTodos(prevTodo=>[...prevTodo,newTodo]);
        setTaskInput("")
    }
    const handleDelete=(index)=>{
    const updatedTodo = todos.filter((_,i)=>i!==index);
    setTodos(updatedTodo)
    }
    const handleUp=(index)=>{
        if(index >0){
            const newUpdatedTask = [...todos];
            [newUpdatedTask[index],newUpdatedTask[index-1]]=[newUpdatedTask[index-1],newUpdatedTask[index]];
            setTodos(newUpdatedTask)
        }
    }
    const handleDown=(index)=>{
          if(index <todos.length-1){
            const newUpdatedTask = [...todos];
            [newUpdatedTask[index],newUpdatedTask[index+1]]=[newUpdatedTask[index+1],newUpdatedTask[index]];
            setTodos(newUpdatedTask)
        }
    }
    return(
        <>
        
        <h1>my todo app</h1>

        <input placeholder="add task.." value={taskInput} onChange={handleInput} />
        <button onClick={addTodoItem}>add</button>
        <ol>
            {
                todos.map((todo,index)=>(
                    <li key={index}>{todo} <button onClick={()=>handleDelete(index)}>delete</button>
                    <button onClick={()=>handleUp(index)}>up</button><button onClick={()=>handleDown(index)}>down</button>
                    </li>
                ))
            }
        </ol>
        </>
    )
}
export default TodoList;