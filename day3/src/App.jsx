 import Card from "./components/Card";
import { UserCard } from "./components/UserCard";
import UserLogin from "./components/UserLogin";
  import Stationary from "./components/Stationary";
import EmployeeDetails from "./components/EmployeeDetails";
import Vegitable from "./components/Vegitable";
import Btn from "./components/Btn";
import Counter from "./components/Counter";
import ColorChanger from "./components/ColorChanger";
import HeroComponent from "./day4/HeroComponent";
import FontSizeIncrease from "./day4/FontSizeIncrease";
import FruitData from "./day4/FruitData";
import MarkStrike from "./day4/MarkStrike";
import TodoApp from "./day4/TodoApp";
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
const characters = {
 heroes: [
 {
 name: "IRON MAN",
 powers: "Genius,Rich,IRON Suit",
 costume: "IRON MAN suit",
 },
 {
 name: "ANT MAN",
 powers: "Ant man suit",
 costume: "Ant man suit",
 },
 {
 name: "Spider-man",
 powers: "Reflexes,Speed,Spider-Sense",
 costume: "Spider Suit",
 },
 {
 name: "Bat man",
 powers: "Rich,Bat suit",
 costume: "Bat Suit",
 },
 {
 name: "Super-man",
 powers: "Superhuman strength,Reflexes,Speed",
 costume: "Superman Suit",
 },
 ],
 villains: [
 {
 name: "Thanos",
 powers: "Superhuman strength,Reflexes,Speed,",
 costume: "Metal armor",
 },
 {
 name: "Venom",
 powers: "shapeshifting and camouflage Symbiotes autonomous defense",
 costume: "black suit",
 },
 {
 name: "Kang the conqueror",
 powers: "time travel, can access all tech",
 costume: "kang armor",
 },
 {
 name: "Joker",
 powers: "clownlike appearance and sick humour",
 costume: "Joker costume",
 },
 ],
};
const itemList = [
 { id: 1, name: "Apple", category: "Fruit" },
 { id: 2, name: "Carrot", category: "Vegetable" },
 { id: 3, name: "Banana", category: "Fruit" },
 { id: 4, name: "Broccoli", category: "Vegetable" },
];

const todoItems2 = [
   {id: 1, task: "Writing 1-page poem", isDone: true},
 {id: 2, task: "Gym", isDone: false},
 {id: 3, task: "Shopping", isDone: false},
 {id: 4, task: "Standup call", isDone: true},
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
{/* <ColorChanger/> */}
{/* <HeroComponent characters={characters}/> */}
{/* <FontSizeIncrease/> */}
{/* <FruitData itemList={itemList}/> */}
{/* <MarkStrike todoItems2={todoItems2}/> */}

<TodoApp/>
    </>
  )
 }
 export default App;