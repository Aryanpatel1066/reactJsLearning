import TodoItem from "./TodoItem"
export default function TodoList({todos}){
    return(
        <>
        <ul>
            {
          todos.map((todo,index)=>(
            <TodoItem key={index} todo={todo}/>
          ))
            }
        </ul>
        </>
    )
}