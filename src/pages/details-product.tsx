import { ProductsDetailsProvider } from "@/components/products/model.context";
import { ProductsDetailsComponent } from "@/components/products/view";


export const ProductsDetailsPage = () => {
  return (
    <ProductsDetailsProvider>
      <ProductsDetailsComponent />
    </ProductsDetailsProvider>
  );
};
