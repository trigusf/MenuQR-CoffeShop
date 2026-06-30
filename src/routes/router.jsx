import { createBrowserRouter } from "react-router-dom";

import Menu from "../pages/customer/menu";
import Cart from "../pages/customer/cart";
import AdminDashboard from "../pages/admin/dashboard";
import AdminMenu from "../pages/admin/menu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminDashboard />
    },
    {
        path:"/adminMenu",
        element: <AdminMenu />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/menu",
        element: <Menu />
    }

]);

export default router;