import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRouters } from "./router";
import { Fragment } from "react";
import DefaultLayout from "./DefaultLayout/DefaultLayout";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          {publicRouters.map((route, index)=>{
            let Layout = DefaultLayout

            const Page = route.component   

            if(route.layout){
              Layout = route.layout
            }
            else if(route.layout === null){
              Layout = Fragment
            }
            return <Route key={index} path={route.path} element={
            <Layout>
               <Page/>
            </Layout>
          
          }/> 
          })}
         </Routes>
 

      </BrowserRouter>
      </div>
      


  );
}

export default App;
