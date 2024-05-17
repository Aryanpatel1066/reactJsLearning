import { useState } from "react"
import EmployeeCard from "./EmployeeCard"
import StationaryItem from "./StationaryItem"
import StudentInfo from "./StudentInfo"
import { takeAge as myage , takeName as myname } from "./fun"
import ListFruitItems  from "./ListFruitItems"
import ImageAndCaption  from "./ImageAndCaption"
import MyShop from "./MyShop"
import EmployeeDetails from "./EmployeeDetails"
import Counter from "./Counter"
import Emp from "./Emp"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
// import SqureLayout from "./SqureLayout"
export default function App(){


  const [count ,setCount]= useState(0);
  const handleClick =()=>{
      setCount(count+1);
      // console.log("click",count)
   }
  const student = {
    name: 'John Doe',
    english: 90,
    maths: 80,
    computers: 70,
  }
  const items = ['pen', 'pencil', 'ruler', 'eraser'];
  const name="raju Stationary";
  const imageLink =
  'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
const caption = 'Spring Flowers'

const [todos,setTodos]=useState([]);
const addTodo=(todo)=>{
 setTodos([...todos,{text:todo,completed:false}])
}
  return(
    <>
    {/* {myage(13)}
    {myname("aryan")}
    <EmployeeCard  />
    <StudentInfo studentLdrp={student}/>
    <StationaryItem items={items}name={name}/>
    <ListFruitItems />
    <ImageAndCaption url={imageLink} name={caption}/>
    <MyShop/>
    <EmployeeDetails />
    <Counter onClick={handleClick} count={count}/>
    <Counter onClick={handleClick} count={count}/>
<br/>*/}
    <Emp/> 
    {/* <SqureLayout /> */}
    <h1>Todo List</h1>
    <AddTodo addTodo={addTodo}/>
    <TodoList todos={todos}/>
     </>
  )
}