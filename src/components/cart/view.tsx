import ListProductsComponent from "@/components/cart/list";
import styles from "./styles.module.css";
import { useCart } from "@/shared/hook/cart";
import { Divider, Typography } from "@mui/material";

export const CartComponent = () => {
  const { total } = useCart();
  return (
    <div>
      <ListProductsComponent />
      <Divider sx={{ mb: 5 }} />
      <section className={styles.total_prices}>
        <Typography variant="h4" fontWeight={500}>
          Total:
        </Typography>
        <Typography variant="h4" fontWeight={700}>
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
      </section>
    </div>
  );
};
