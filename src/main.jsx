import "./styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./routes/about";
import Error from "./routes/error";
import Event from "./routes/event";
import Franchise from "./routes/franchise";
import Home from "./routes/home";
import Menu from "./routes/menu";
import Root from "./routes/root";
import Stores from "./routes/stores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    element: <Root />,
    children: [
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/stores",
        element: <Stores />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/franchise",
        element: <Franchise />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
