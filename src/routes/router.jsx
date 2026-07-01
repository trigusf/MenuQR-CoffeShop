import { createBrowserRouter } from "react-router-dom";

import Menu from "../pages/customer/menu";
import Cart from "../pages/customer/cart";
import Login from "../pages/login";
import Register from "../pages/register";
import WelcomePage from "../pages/welcome";
import AdminLogin from "../pages/admin/adminLogin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WelcomePage />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/admin-login",
        element: <AdminLogin />
    },
    {
        path: "/menu",
        element: <Menu />
    },
    {
        path: "/cart",
        element: <Cart />
    }
]);

export default router;