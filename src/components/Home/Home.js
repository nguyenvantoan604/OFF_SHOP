
import React from "react";
import { useStoreContext } from "../Context/Context";
import Products from "./Products";
import "./product.css";

const Home = () => {
  const { state:{products} } = useStoreContext();




  return (
    <div style={{backgroundColor:"rgb(51, 51, 51)", margin:"auto"}}>
      <div className="filterProducts" style={{display:"flex", alignItems:"center", justifyContent:"space-around",paddingTop:20}}>
        <a href="/">Laptop</a>
        <a href="/">Iphone</a>
        <a href="/">Other</a>
      </div>
  
      <div className="HomeProduct">    

        {products.map((product) => (
        
          <Products product={product} key={product.id}/>
        ))}

        
      </div>
    </div>
  );
};

export default Home;
