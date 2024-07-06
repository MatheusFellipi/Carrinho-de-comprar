import styles from "./styles.module.css";
import { ProductsDetailsImgComponent } from "@/components/products/img";
import { Typography } from "@mui/material";
import { ProductsDetailsInfoComponent } from "@/components/products/infos";

export const ProductsDetailsComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <Typography variant="h4" >
          Cadeira vitalis Charles Eames Eiffel Wood Design Trato
        </Typography>
        <div className={styles.details}>
          <ProductsDetailsImgComponent />
          <ProductsDetailsInfoComponent />
        </div>
      </div>
    </>
  );
};
