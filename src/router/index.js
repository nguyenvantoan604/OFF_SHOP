import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import Cart from "../components/Cart/Cart";
import HeaderOnly from "../DefaultLayout/HeaderOnly";
import ProductDetail from "../components/Home/ProductDetail";





const publicRouters = [
    { path: '/header', component: Header },
    { path: '/', component: Home },
    { path: '/cart', component: Cart, layout: HeaderOnly },
    { path: '/DetailProduct/:id', component: ProductDetail, layout: HeaderOnly },
  ];
  
const privateRoutes = [];

export { publicRouters, privateRoutes }