import {useState} from "react"
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
    { id: 2, name: 'T-Shirt', category: 'Clothing', price: 19.99 },
    { id: 3, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
    { id: 4, name: 'Headphones', category: 'Electronics', price: 99.99 },
    { id: 5, name: 'Jeans', category: 'Clothing', price: 49.99 }
   ];

export default function ButtonFiltereData(){
    const [selectedCategory,setSelectedCategory]=useState("");
    const handleCategoryClick = (category)=>{
        setSelectedCategory(category);
    }
    const filterProducts = selectedCategory ? products.filter(product => product.category === selectedCategory)
    :products;
return(
    <>
    <button onClick={()=>handleCategoryClick("Clothing")} value="Clothing">Clothing</button>
    <button onClick={()=>handleCategoryClick("Electronics")} value="Electronics">Electronics</button>
    <button onClick={()=>handleCategoryClick("Home Appliances")} value="Home Appliances">Home Appliances</button>

    {
        filterProducts.map(products=>(
            <li>
                name:{products.name},price{products.price},category:{products.category}
            </li>
        ))
    }
     </>

)
}