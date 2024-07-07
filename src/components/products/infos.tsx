import styles from "./styles.module.css";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import PixIcon from "@mui/icons-material/Pix";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ProductsDetailsColorsComponent } from "@/components/products/colors";
import { BtnComponent } from "@/shared/components/btn";
import { useProductModel } from "@/components/products/model.context";
import { useCart } from "@/shared/hook/cart";
import { itemCartProductType } from "@/types/products";


export const ProductsDetailsInfoComponent = () => {
  const { product } = useProductModel();
  const { handleAddProduct } = useCart();

  return (
    <section className={styles.container_details}>
      <div>
        <Typography variant="h4" component="h4" fontWeight={600}>
          {product?.name}
        </Typography>
        <Typography variant="caption" fontWeight={500} fontSize={16}>
          {product?.brand}
        </Typography>
        <br />
        <div className={styles.group_rating}>
          <Rating size="small" name="read-only" value={2} readOnly />
          <FavoriteBorderIcon />
        </div>
      </div>

      <div>
        <ProductsDetailsColorsComponent />

        <div className={styles.prices}>
          <Typography variant="h6">
            {product?.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Typography>
          <Typography variant="inherit">à vista</Typography>
        </div>

        <Typography variant="inherit">
          {`10x de ${product?.divide_price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}`}
        </Typography>
        <Typography variant="inherit">sem juros</Typography>
      </div>

      <div>
        <Typography variant="inherit">{product?.description}</Typography>
      </div>

      <div>
        <PixIcon />
        <CreditCardIcon />
        <BtnComponent sx={{ mt: 1 }} custoColor="#158A8A">
          Comprar
        </BtnComponent>
        <BtnComponent
          sx={{ mt: 1 }}
          variant="outlined"
          borderColor="#158A8A"
          textColor="#158A8A"
          onClick={() => handleAddProduct(product as itemCartProductType)}
        >
          Adicionar ao sacola
        </BtnComponent>
      </div>
    </section>
  );
};
