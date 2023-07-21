// StoreContext.js
import React, { createContext, useContext, useEffect, useReducer } from "react";
import StoreReducer from "./StoreReducer";

const StoreContext = createContext();


const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, {
    products:[],
  cart: [],
  });

  useEffect(() => {
    async function fetchProducts() {
 
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const products = data.products;
        dispatch({ type: "SET_PRODUCTS", payload: products });
    }

    fetchProducts();
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
export const useStoreContext = () => {
  return useContext(StoreContext);
};

export default StoreProvider;
