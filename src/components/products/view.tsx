import { ProductsDetailsImgComponent } from "@/components/products/slider-img";
import { ProductsDetailsProvider } from "@/components/products/model.context";
import styles from "./styles.module.css";
import { Typography } from "@mui/material";
import { ProductsDetailsInfoComponent } from "@/components/products/infos";
import { ProductsDetailsRelatedComponent } from "@/components/products/related";

export const ProductsDetailsComponent = () => {
  return (
    <ProductsDetailsProvider>
      <div className={styles.container}>
        <Typography variant="h4" sx={{maxWidth: 786 }} >
          Cadeira vitalis Charles Eames Eiffel Wood Design Trato
        </Typography>
        <div className={styles.details}>
          <ProductsDetailsImgComponent />
          <ProductsDetailsInfoComponent />
        </div>
      </div>
    </ProductsDetailsProvider>
  );
};
