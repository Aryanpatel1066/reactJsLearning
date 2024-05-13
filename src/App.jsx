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
  return(
    <>
    {myage(13)}
    {myname("aryan")}
    <EmployeeCard  />
    <StudentInfo studentLdrp={student}/>
    <StationaryItem items={items}name={name}/>
    <ListFruitItems />
    <ImageAndCaption url={imageLink} name={caption}/>
    <MyShop/>
    <EmployeeDetails />
    <Counter />
    <Counter onClick={handleClick} count={count}/>
     </>
  )
}