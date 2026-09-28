import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App.tsx";
import router from "./App/app.router.tsx";
import { RouterProvider } from "react-router-dom";
import { MovieProvider } from "./context/movieContex.tsx";

createRoot(document.getElementById("root")!).render(
  <MovieProvider>
    <RouterProvider router={router} />
  </MovieProvider>,
);
