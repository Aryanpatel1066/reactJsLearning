 import Card from "./components/Card";
import { UserCard } from "./components/UserCard";
import UserLogin from "./components/UserLogin";
  import Stationary from "./components/Stationary";
import EmployeeDetails from "./components/EmployeeDetails";
import Vegitable from "./components/Vegitable";
import Btn from "./components/Btn";
import Counter from "./components/Counter";
import ColorChanger from "./components/ColorChanger";

 function App(){
  const userInfoObj={
    name:"hulk",
    age:"1066"
  }
  const header = "stationary items"
  const items = ['pen', 'pencil', 'ruler', 'eraser']
  const products = [
 { name: 'Perk', quantity: 10, sales: 7 },
 { name: 'Pepsi', quantity: 10, sales: 20 },
 { name: 'Coke', quantity: 18, sales: 50 },
 { name: 'Maggi', quantity: 41, sales: 22 },
 { name: '5Star', quantity: 7, sales: 9 },
]
const employees = [
 {
 name: 'Jack Smith',
 level: 2,
 dept: 'Tech',
 designation: 'Manager',
 salary: 24000,
 },
 {
 name: 'Mary Robbins',
 level: 3,
 dept: 'Fin',
 designation: 'Manager',
 salary: 28000,
 },
 {
 name: 'Steve Williams',
 level: 4,
 dept: 'Ops',
 designation: 'President',
 salary: 35000,
 },
 {
 name: 'Bob Andrews',
 level: 1,
 dept: 'Fin',
 designation: 'Trainee',
 salary: 16500,
 },
 {
 name: 'Dave Martin',
 level: 2,
 dept: 'Fin',
 designation: 'Manager',
 salary: 21700,
 },
 {
 name: 'Julia Clarke',
level: 3,
 dept: 'Ops',
 designation: 'Manager',
 salary: 26900,
 },
 {
 name: 'Kathy Jones',
 level: 4,
 dept: 'Tech',
 designation: 'President',
 salary: 42500,
 },
 {
 name: 'Tom Bresnan',
 level: 2,
 dept: 'Tech',
 designation: 'Manager',
 salary: 22200,
 },
]
const vegetables = [
 {
 id: 1,
name: 'Carrots',
 pickDate: '2023-03-25',
 },
 {
 id: 2,
 name: 'Broccoli',
 pickDate: '2023-03-30',
 },
 {
 id: 3,
 name: 'Peppers',
 pickDate: '2023-03-25',
 },
 {
 id: 4,
 name: 'Tomatoes',
 pickDate: '2023-03-27',
 },
 {
 id: 5,
 name: 'Ladies Finger',
 pickDate: '2023-03-30',
 },
]

  return(
    <>
    <h1>my app</h1>
    {/* <UserCard name={"AryanPatel"}age={1066}  />
        <UserCard  age={1066}  />

    <UserCard userInfoObj={userInfoObj}/>
    <Card> <h2>Title 1</h2>
  <p>This is the first card's content.</p></Card> */}
  {/* <UserLogin isLogin={true} name={"aryan"}/>
    <UserLogin isLogin={true}  />
<UserLogin /> */}
{/* <Stationary header={header} items={items} products={products}/>
<EmployeeDetails employees={employees}/> */}
{/* <Vegitable vegetables={vegetables}/> */}

{/* <Btn/> */}
{/* <Counter/> */}
<ColorChanger/>
    </>
  )
 }
 export default App;