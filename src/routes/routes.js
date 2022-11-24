import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ProductDetails from "../Pages/Home/components/Product/ProductDetails";
import ProductList from "../Pages/Home/components/Product/ProductList";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <ProductList />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.name}`),
      },
      {
        path: "/mobile/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/mobile/${params.id}`),
      },
    ],
  },
]);

export default router;
