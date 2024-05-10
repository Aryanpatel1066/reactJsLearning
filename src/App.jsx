 import EmployeeCard from "./EmployeeCard"
import StationaryItem from "./StationaryItem"
 import StudentInfo from "./StudentInfo"
 import { takeAge as myage , takeName as myname } from "./fun"
export default function App(){
  const student = {
    name: 'John Doe',
    english: 90,
    maths: 80,
    computers: 70,
  }
  const items = ['pen', 'pencil', 'ruler', 'eraser'];
  const name="raju Stationary";
  return(
    <>
    {myage(13)}
    {myname("aryan")}
    <EmployeeCard  />
    <StudentInfo studentLdrp={student}/>
    <StationaryItem items={items}name={name}/>
    </>
  )
}