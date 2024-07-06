import { HomePage } from "@/components/home/view";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
