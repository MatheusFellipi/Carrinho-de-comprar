import styles from "./styles.module.css";
import { Rating, Typography } from "@mui/material";
import { BtnComponent } from "@/shared/components/btn";

export const ProductsDetailsInfoComponent = () => {
  return (
    <section className={styles.container_details}>
      <Typography variant="h6" sx={{ maxWidth: 780 }}>
        Cadeira vitalis Charles
      </Typography>
      <Typography variant="caption" fontSize={8}>
        Sharps moveis
      </Typography>
      <Rating
        sx={{ mt: 4, mb: 1.3 }}
        size="small"
        name="read-only"
        value={2}
        readOnly
      />
      <div className={styles.elipses}/>
      <div className={styles.prices}>
        <Typography variant="h6">R$ 450</Typography>
        <Typography variant="inherit">à vista</Typography>
      </div>
      <Typography variant="inherit">10x de R$ 250</Typography>
      <Typography variant="inherit">sem juros</Typography>
      <BtnComponent width="18.125rem" sx={{ mt: 5 }} custoColor="#158A8A">
        Comprar
      </BtnComponent>
      <BtnComponent
        width="18.125rem"
        sx={{ mt: 1 }}
        variant="outlined"
        borderColor="#158A8A"
        textColor="#158A8A"
      >
        Adicionar ao sacola
      </BtnComponent>
    </section>
  );
};
