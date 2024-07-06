import styles from "./styles.module.css";
import { Typography } from "@mui/material";
import CardProducts from "@/components/home/card";

export const ProductsDetailsRelatedComponent = () => {
  return (
    <section className={styles.related}>
      <Typography variant="subtitle1" align="left">
        Produtos relacionados
      </Typography>

      <div className={styles.related_products}>
        <CardProducts />
      </div>
    </section>
  );
};
