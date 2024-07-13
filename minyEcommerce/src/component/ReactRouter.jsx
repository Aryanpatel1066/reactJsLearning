import {Routes,Route} from 'react-router-dom';
import ProductList from "../pages/ProductList";
import AddToCart from "../pages/AddToCart";
import NotFound from "../pages/NotFound";
function ReactRouter(){
    return(
        <>
        <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='cart' element={<AddToCart/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        </>
    )
}
export default ReactRouter;