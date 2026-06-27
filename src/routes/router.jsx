import { createBrowserRouter } from "react-router-dom";

import Menu from "../pages/customer/menu";
import Cart from "../pages/customer/cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />
    },
    {
        path: "/cart",
        element: <Cart />
    }
]);

export default router;