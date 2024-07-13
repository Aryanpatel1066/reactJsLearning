 import { NavLink } from "react-router-dom"; 
 import ReactRouter from "./component/ReactRouter";
 function App(){
  return(
    <>
    <ReactRouter/>
    <nav>
      <NavLink to="/">Home</NavLink>{" "}
      <NavLink to="/cart">cart</NavLink>{" "}
    </nav>
     
    </>
  )
 }
 export default App;