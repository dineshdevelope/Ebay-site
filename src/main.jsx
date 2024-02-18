import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/Guest.jsx";

import ErrorPageFound from "./components/ErrorPage.jsx";

import ContactPage from "./components/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", //it will work like that. /some.some index.element
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <ContactPage />,
      },
    ],
    errorElement: <ErrorPageFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
