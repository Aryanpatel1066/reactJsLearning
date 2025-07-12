 import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fakeFetch } from "../component/api";

function Product() {
  const { id } = useParams(); // URL param
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await fakeFetch("https://example.com/api/products");
        const allProducts = response.data.products;
        const matchedProduct = allProducts.find(item => item.id === Number(id));
        setProduct(matchedProduct);
        console.log(matchedProduct)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <>
      <h1>{product.name}</h1>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
    </>
  );
}

export default Product;
