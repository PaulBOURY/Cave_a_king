import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage404 from "./pages/ErrorPage404/ErrorPage404";
import HomePage from "./pages/HomePage/HomePage";
import KingPage from "./pages/KingPage/KingPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import { fetchApi, sendData } from "./services/apiService";
import DemonstrationPage from "./pages/demonstrationPage/DemonstrationPage";

const demonstrationUrl = "/api/demo";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetchApi(demonstrationUrl)
      },
      {
        path: "/demonstration/:id",
        element: <DemonstrationPage />,
        loader: () => fetchApi(demonstrationUrl),
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData.entries());

          const method = request.method.toUpperCase();
          const handleMethod = async (httpMethod) => {
            await sendData(`${demonstrationUrl}/${params.id}`, data, httpMethod);
          };
          await handleMethod(method);
          return redirect("/");
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
