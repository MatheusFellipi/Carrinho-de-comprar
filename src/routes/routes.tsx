import { CartPage } from "@/pages/cart";
import { ProductsDetailsPage } from "@/pages/details-product";
import { ErrorPage } from "@/pages/error-page";
import { HomePage } from "@/pages/home";
import { LayoutPages } from "@/shared/layout";
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
        element: <ProductsDetailsPage />,
      },
      {
        path: "cart/",
        element: <CartPage />,
      },
    ],
  },
]);
