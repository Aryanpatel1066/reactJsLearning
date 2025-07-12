 
 //for use the context value step1: import cartcontext and usecontext
 import { useEffect, useState,useContext} from "react";
import {fakeFetch} from "../component/api";
import { NavLink, useSearchParams } from "react-router-dom";
import {ThemeContext} from "../context/ThemeContext" 
function ProductList(){
      const {theme}=useContext(ThemeContext);
      const {toggleTheme}=useContext(ThemeContext)
        console.log(theme)
    const [data,setData]= useState([]);
    const [loading,setLoading]=useState(true);
    const [search, setSearch] = useState("");

    const [searchParams]=useSearchParams();//get query step 1
    const electronicProduct = async()=>{
        try{
        setLoading(true);
    const response = await fakeFetch('https://example.com/api/products')
    let result = response.data.products;
    // Get filters from URL
      const category = searchParams.get('category');
      const brand = searchParams.get('brand');
        if (category) {
        result = result.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
      }

      if (brand) {
        result = result.filter(
          (item) => item.brand.toLowerCase() === brand.toLowerCase()
        );
      }
      if (search.trim() !== "") {
  result = result.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
}

      setData(result);
          setLoading(false);

    // console.log(response.data.products);
    // setData(response.data.products);
    }
    catch(err){
        console.log(err);
    }
 }
 useEffect(()=>{
    electronicProduct();
 },[searchParams,search])
 
    return(
        <>
        <button style={{ background: theme === "light" ? "#eee" : "#333", color: theme === "light" ? "#000" : "#fff" }} onClick={toggleTheme}>switch theme</button>
        <div>
  <input
    type="text"
    placeholder="Search products"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>
        <h1>product list page</h1>
        <h4>{loading && "loading...."}</h4>
<div>
  <h4>Filter by Category:</h4>
  <NavLink to="/">All</NavLink> | 
  <NavLink to="/?category=Smartphones">Smartphones</NavLink> | 
  <NavLink to="/?category=Laptops">Laptops</NavLink> | 
  <NavLink to="/?category=Tablets">Tablets</NavLink>

  <h4>Filter by Brand:</h4>
  <NavLink to="/?brand=Apple">Apple</NavLink> | 
  <NavLink to="/?brand=Samsung">Samsung</NavLink> | 
  <NavLink to="/?brand=Dell">Dell</NavLink>
</div>

        <ol>
            {
                data.map(({id,name,description,price,quantity,brand,category})=>(
                    <li key={id}>
                        <h3>{name}</h3>
                         <p>quantity:{quantity}</p>
                         <p>{brand}</p>
                         <p>{category}</p>
                         <b>price:{price}</b>
                         <NavLink to={`/product/${id}`}>more details..</NavLink>
                    </li>
                ))
            }
        </ol>
        </>
    )
}
export default ProductList;