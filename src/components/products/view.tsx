import styles from "./styles.module.css";
import { ProductsDetailsImgComponent } from "@/components/products/slider-img";
import { ProductsDetailsInfoComponent } from "@/components/products/infos/infos";
import { useProductModel } from "@/components/products/model.context";
import { ProductsDescriptionComponent } from "@/components/products/description";
import { BackPageTitleComponent } from "@/shared/components/back-page-title";

export const ProductsDetailsComponent = () => {
  const { product } = useProductModel();
  return (
    <>
      <div className={styles.container}>
        <BackPageTitleComponent name={product?.name} />
        <div className={styles.details}>
          <ProductsDetailsImgComponent />
          <ProductsDetailsInfoComponent />
        </div>
        <ProductsDescriptionComponent />
      </div>
    </>
  );
};
