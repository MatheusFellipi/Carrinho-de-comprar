import ListProductsComponent from "@/components/cart/list";
import { CartTotalComponent } from "@/components/cart/total";
import { BackPageTitleComponent } from "@/shared/components/back-page-title";
import styles from "./styles.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export const CartComponent = () => {
  const matches = useMediaQuery("(max-width:1024px)");

  return (
    <div>
      <BackPageTitleComponent name="Carrinho de compra" />
      <div className={styles.container_prices}>
        {matches && <CartTotalComponent />}
        <ListProductsComponent />
        {!matches && <CartTotalComponent />}
      </div>
    </div>
  );
};
