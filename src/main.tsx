import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import EventPage from "./pages/EventPage";
import FranchisePage from "./pages/FranchisePage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import StoresPage from "./pages/StoresPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/stores",
    element: <StoresPage />,
  },
  {
    path: "/event",
    element: <EventPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/franchise",
    element: <FranchisePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
