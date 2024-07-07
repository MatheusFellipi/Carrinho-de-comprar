import ListProductsComponent from "@/components/cart/list";
import styles from "./styles.module.css";
import { CartTotalComponent } from "@/components/cart/total";
import { BackPageTitleComponent } from "@/shared/components/back-page-title";

export const CartComponent = () => {
  return (
    <div>
      <BackPageTitleComponent name="Carrinho de compra" />
      <div className={styles.container_prices}>
        <CartTotalComponent />
        <ListProductsComponent />
      </div>
    </div>
  );
};
