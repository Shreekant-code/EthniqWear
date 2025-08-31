
import { createContext, useContext, useEffect, useState } from "react";


const ProductsContext = createContext();


export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/productsdetail_updated.json"); 
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
             console.log("Fetched products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};


export const useProducts = () => useContext(ProductsContext);
