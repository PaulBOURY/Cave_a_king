import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage404 from "./pages/ErrorPage404/ErrorPage404";
import HomePage from "./pages/HomePage/HomePage";
import KingPage from "./pages/KingPage/KingPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import { fetchApi, sendData } from "./services/apiService";

const demonstrationUrl = "/api/demo";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetchApi(demonstrationUrl),
        action: async ({ request }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData.entries());

          const method = request.method.toUpperCase();

          const handleMethod = async (httpMethod) => {
            await sendData(`${demonstrationUrl}`, data, httpMethod);
          };
          await handleMethod(method);
        },
      },
      {
        path: "/king",
        element: <KingPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
