import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Login } from './page/Login/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <App>

      </App>
    </>
  },
  {
    path: "/login",
    element: <>
      <Login> 
        <Link to={"/b"}>click me</Link>
      </Login>
    </>
  },
  {
    path: "/b",
    element: <>
         bye
        <Link to="/a">click </Link>
    </>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}> 
    </RouterProvider>
  </React.StrictMode>
);
