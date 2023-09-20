import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout/Layout";
import AllToy from "./Components/AllToy/AllToy";
import AddToy from "./Components/Add toy/AddToy";
import MyToys from "./Components/MyToys/MyToys";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Error from "./Components/404/Error";
import Login from "./Components/Login-Register/Login";
import AuthProvider from "./Components/Provider/AuthProvider";
import Register from "./Components/Login-Register/Regester";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ToyDetails from "./Components/ToyDetails";
import Update from "./Components/MyToys/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all",
        element: <AllToy />,
        // loader: () => fetch("https://toy-shop-server-gamma.vercel.app/alltoys"),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/my",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>

        ),
        loader: () => fetch("https://toy-shop-server-gamma.vercel.app/alltoys")
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: `/toydetail/:id`,
        element:<PrivateRoute><ToyDetails/></PrivateRoute> ,
        loader: ({params}) => fetch(`https://toy-shop-server-gamma.vercel.app/alltoys/${params.id}`),
      },
      {
        path: `/update/:id`,
        element:<PrivateRoute><Update/></PrivateRoute> ,
        loader: ({params}) => fetch(`https://toy-shop-server-gamma.vercel.app/alltoys/${params.id}`)
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
