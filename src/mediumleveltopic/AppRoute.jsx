import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Category from "./Category"
import About from "./About"
import NotFound from "./NotFound"
import App from "../App"

    export default function AppRoute(){
        return(
            <>
            <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    
            </>
        )
    }