import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import App from "../App";
import Products from "../pages/main/product/Products";
import ProductDetails from "../pages/main/product/ProductDetails";
import CheckoutCart from "../pages/main/CheckoutCart";
import Dashboard from "../layout/Dashboard/Dashboard";
import ManageProduct from "../pages/dashboard/ManageProduct";
import ManageCategory from "../pages/dashboard/ManageCategory";
import AddProduct from "../pages/dashboard/AddProduct";
import AddCategory from "../pages/dashboard/AddCategory";
import Payment from "../pages/payment/Payment";
import UpdateProduct from "../pages/dashboard/UpdateProduct";
import UpdateCategory from "../pages/dashboard/UpdateCategory";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/product-details/:productId",
                element: <ProductDetails />
            },
            {
                path: "/checkout-cart",
                element: <CheckoutCart />
            },
            {
                path: "/payment",
                element: <Payment />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "add-product",
                element: <AddProduct />
            },
            {
                path: "manage-product",
                element: <ManageProduct />
            },
            {
                path: "add-category",
                element: <AddCategory />
            },
            {
                path: "manage-category",
                element: <ManageCategory />
            },
            {
                path: "update-category/:categoryId",
                element: <UpdateCategory />
            },
            {
                path: "update-product/:productId",
                element: <UpdateProduct />
            },
        ]
    }
]);


export default router;