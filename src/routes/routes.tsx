import { ProductsDetailsComponent } from "@/components/products/view";
import { ErrorPage } from "@/pages/error-page";
import { HomePage } from "@/pages/home";
import { LayoutPages } from "@/shared/components/layout";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPages />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <ProductsDetailsComponent />,
      },
    ],
  },
]);
