import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Category from "./Category"
import About from "./About"
import NotFound from "./NotFound"
import App from "../App"
import EmployeeDetails from "./EmployeeDetails"
import BlogList from "./BlogList"
import BlogDetails from "./BlogDetails"

    export default function AppRoute(){
        return(
            <>
            <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/employee/:id" element={<EmployeeDetails />} />
      <Route path="/bloglist" element={<BlogList />}/>
      <Route path="/blogdetails/:id" element={<BlogDetails/>}/>
    </Routes>
    
            </>
        )
    }