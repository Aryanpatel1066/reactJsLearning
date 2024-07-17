import {Routes,Route} from 'react-router-dom';
import ProductList from "../pages/ProductList";
import AddToCart from "../pages/AddToCart";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import WishList from '../pages/WishList';
import Reducers from '../pages/Reducers';
function ReactRouter(){
    return(
        <>
        <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='cart' element={<AddToCart/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
            <Route path='/wishlist' element={<WishList/>}/>
            <Route path='/reducers' element={<Reducers/>}/>
        </Routes>
        </>
    )
}
export default ReactRouter;