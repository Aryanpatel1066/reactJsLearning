 import { NavLink } from "react-router-dom"; 
 import ReactRouter from "./component/ReactRouter";
 function App(){
  return(
    <>
    <nav>
      <NavLink to="/">Home</NavLink>{" "} ||
      <NavLink to="/cart">Cart</NavLink>{" "} ||
      <NavLink to="/wishlist">Wishlist</NavLink>{" "} ||
      <NavLink to="reducers">reducers</NavLink>
    </nav>
    <ReactRouter/>

    </>
  )
 }
 export default App;