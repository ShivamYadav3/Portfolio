import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <RouterProvider router={router} /> */}
    <App />
  </>
);
