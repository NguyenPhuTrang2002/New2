import Product from "../pages/Product/index";
import Login from "../pages/Login/index";
import User from "../pages/User/index";
const publicRoutes = [
  { path: '/product', component: Product },
  { path: '/login', component: Login },
  { path: '/user', component: User }
];
const privateRoutes = [

]
export { publicRoutes, privateRoutes }

