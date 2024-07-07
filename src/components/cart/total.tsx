import styles from "./styles.module.css";
import { useCart } from "@/shared/hook/cart";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import { BtnComponent } from "@/shared/components/btn";

export const CartTotalComponent = () => {
  const { total, qdtProduct } = useCart();
  return (
    <section className={styles.total_prices}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem sx={{ flexDirection: "column" }}>
            <ListItemText>
              Subtotal ({qdtProduct} produtos):
              <br />
              <Typography fontWeight={"600"}>
                {total.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Typography>
            </ListItemText>
            <BtnComponent sx={{ mt: 1 }} custoColor="#158A8A">
              Fechar pedido
            </BtnComponent>
          </ListItem>
        </List>
    </section>
  );
};
