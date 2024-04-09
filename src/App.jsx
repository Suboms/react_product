import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const product_data = async () => {
  try {
    let url = `https://fakestoreapi.com/products`;
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.status === 200) {
      throw new Error("Failed to fetch Data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error fetching data:", error);
    return [];
  }
};

function App() {
  
  const [productList, setProductList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const product = await product_data()
      setProductList(product)
    }
    fetchData()
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (product) => {
    setSelectedProduct(product);

  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product product_list={productList} handleClick={handleClick} />} />
          <Route path="/product/:id" element={selectedProduct && <ProductDetails product={selectedProduct} />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
