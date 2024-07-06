import { ProductsDetailsImgComponent } from "@/components/products/slider-img";
import styles from "./styles.module.css";
import { Typography } from "@mui/material";
import { ProductsDetailsInfoComponent } from "@/components/products/infos";
import { useProductModel } from "@/components/products/model.context";

export const ProductsDetailsComponent = () => {
  const { product } = useProductModel();
  return (
    <>
      <div className={styles.container}>
        <Typography variant="h4" sx={{ maxWidth: 786 }}>
          {product.name}
        </Typography>
        <div className={styles.details}>
          <ProductsDetailsImgComponent />
          <ProductsDetailsInfoComponent />
        </div>
      </div>
    </>
  );
};
