import { ProductsDetailsImgComponent } from "@/components/products/slider-img";
import styles from "./styles.module.css";
import { IconButton, Typography } from "@mui/material";
import { ProductsDetailsInfoComponent } from "@/components/products/infos/infos";
import { useProductModel } from "@/components/products/model.context";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ProductsDescriptionComponent } from "@/components/products/description";

export const ProductsDetailsComponent = () => {
  const { product, navigate } = useProductModel();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.back}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h4" textAlign={"left"}>
            {product?.name}
          </Typography>
        </div>

        <div className={styles.details}>
          <ProductsDetailsImgComponent />
          <ProductsDetailsInfoComponent />
        </div>

        <ProductsDescriptionComponent />
      </div>
    </>
  );
};
