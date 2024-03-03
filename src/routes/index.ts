import Product from "../pages/Product/index";
import Login from "../pages/Login/index";
import User from "../pages/User/index";
const publicRoutes = [
  { path: '/product', component: Product },
  { path: '/login', component: Login },
  { path: '/user', component: User },
];

const defaultRoute = "/login";

// Kiểm tra đường dẫn mặc định và chuyển hướng đến trang login
const redirectToDefaultRoute = () => {
  const currentPath = window.location.pathname;
  if (currentPath === "/") {
    window.location.href = defaultRoute;
  }
};

// Gọi hàm redirectToDefaultRoute khi ứng dụng được khởi tạo
redirectToDefaultRoute();

export { publicRoutes }

