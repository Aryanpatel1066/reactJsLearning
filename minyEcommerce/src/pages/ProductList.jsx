import React, { useState, useEffect } from "react";

const dataApi = 'https://fakestoreapi.com/products';
const styleProduct = {
    border:"2px solid red",
    margin:"2rem",
    cursor:"pointer",
    listStyle:"none"
}
const boldStyle = {
    padding:"10px 20px"
}
const ProductList = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(dataApi);
            const result = await response.json();
            setData(result);
            // console.log(response);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Product List Page:</h1>
            <ul>
                {data.map(({id,title,category,price}) => (
                    <li style={styleProduct} key={id}>
                        <b style={boldStyle}>title:</b>{title} <br/>
                        <b style={boldStyle}>category:</b>{category} <br />
                        <b style={boldStyle}>price:</b>{price} <br/>
                    </li> 
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
