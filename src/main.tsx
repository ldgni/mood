import "@/styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import About from "@/routes/about";
import Event from "@/routes/event";
import Franchise from "@/routes/franchise";
import Home from "@/routes/home";
import Menu from "@/routes/menu";
import NotFound from "@/routes/not-found";
import Root from "@/routes/root";
import Stores from "@/routes/stores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
