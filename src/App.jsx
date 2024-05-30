import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/schools/HomePage/HomePage.jsx";
import Layouts from "./pages/Layouts/Layouts";
import Error from "./pages/Error.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
