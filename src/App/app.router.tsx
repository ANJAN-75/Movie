import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx";
import MovieDetails from "../pages/MovieDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/moviedetails",
    element: <MovieDetails />,
  },
]);

export default router;
