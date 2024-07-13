 import { NavLink } from "react-router-dom"; 
 import ReactRouter from "./component/ReactRouter";
 function App(){
  return(
    <>
    <nav>
      <NavLink to="/">Home</NavLink>{" "} ||
      <NavLink to="/cart">cart</NavLink>{" "}
    </nav>
    <ReactRouter/>

    </>
  )
 }
 export default App;