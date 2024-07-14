import {Routes,Route} from 'react-router-dom';
import ProductList from "../pages/ProductList";
import AddToCart from "../pages/AddToCart";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails"
function ReactRouter(){
    return(
        <>
        <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='cart' element={<AddToCart/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
        </Routes>
        </>
    )
}
export default ReactRouter;