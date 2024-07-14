import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const result = await response.json();
      setProduct(result);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  if (loading) return <h3>Loading....</h3>;
  if (error) return <h3>Error...</h3>;

  return (
    <div>
      <h1>Product Details Page</h1>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <img src={product.image} alt={product.title} style={{ maxWidth: "200px" }} />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
