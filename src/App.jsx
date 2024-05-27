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
import ProductList from "./ProductList"
import PracticeInput from "./PracticeInput"
import SearchItem from "./SearchItem"
 import ButtonFiltereData from "./ButtonFiltereData"


 // medium level topic learn
 import PracticeUseEffect from "./mediumleveltopic/PracticeUseEffect"
//  import UserList from "./mediumleveltopic/UserList"

import {Routes,Route,Link} from "react-router-dom"
import About from "./mediumleveltopic/About"
import Home from "./mediumleveltopic/Home"
import NotFound from "./mediumleveltopic/NotFound"
import Category from "./mediumleveltopic/Category"
import AppRoute from "./mediumleveltopic/AppRoute"
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

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

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
    {/* <Emp/>  */}
    {/* <SqureLayout /> */}
    {/* <h1>Todo List</h1> */}
    {/* <AddTodo addTodo={addTodo}/>
    <TodoList todos={todos}/>

    <ProductList product={PRODUCTS}/> */}
    {/* <PracticeInput /> */}
    {/* <SearchItem /> */}
    {/* <DropDowon/> */}
    {/* <ButtonFiltereData /> */}

    {/* part2 some useEffect  */}
    {/* <PracticeUseEffect /> */}
    {/* <UserList /> */}

    {/* make a route component */}
    <Link to="/">Home</Link>{" "}||
    <Link to="/category">category</Link>{" "}||
    <Link to="/about">about</Link>{" "}||
    <Link to="notfound">notfound</Link>
    
    <AppRoute/>
      </>
  )
}