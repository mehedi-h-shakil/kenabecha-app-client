import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import AddAProduct from "../Pages/Dashboard/AddAProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts";
import WishList from "../Pages/Dashboard/WishList";
import Payment from "../Pages/Dashboard/Checkout/Payment";
import Error from "../Pages/Error/Error";
import Blogs from "../Pages/Home/Blogs";
import ProductDetails from "../Pages/Home/components/Product/ProductDetails";
import ProductList from "../Pages/Home/components/Product/ProductList";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/categories/:name",
        element: (
          <PrivateRoute>
            <ProductList />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://kenabecha-server.vercel.app/categories/${params.name}`
          ),
      },
      {
        path: "/mobile/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://kenabecha-server.vercel.app/mobile/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <Error />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard/myOrders",
        element: (
          <BuyerRoute>
            <MyOrders />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/wishlist",
        element: <WishList />,
      },
      // {
      //   path: "/dashboard/dashboard/wishlist/:id",
      //   loader: ({ params }) =>
      //     fetch(`https://kenabecha-server.vercel.app/wishlist/${params.id}`),
      //   element: (
      //     <BuyerRoute>
      //       <WishList />
      //     </BuyerRoute>
      //   ),
      // },
      {
        path: "/dashboard/users/allSellers",
        element: (
          <AdminRoute>
            <AllSellers />,
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/users/allBuyers",
        element: (
          <AdminRoute>
            <AllBuyers />,
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addAProduct",
        element: (
          <SellerRoute>
            <AddAProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`https://kenabecha-server.vercel.app/bookings/${params.id}`),
        element: (
          <BuyerRoute>
            <Payment />,
          </BuyerRoute>
        ),
      },
    ],
  },
]);

export default router;
