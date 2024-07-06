import styles from "./styles.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { BtnComponent } from "@/shared/components/btn";
import { DropboxMenuComponent } from "@/shared/components/header/menu";

export const HeaderComponent = () => {
  return (
    <header className={styles.container}>
      <BtnComponent className={styles.btn_home} heigh="3rem" width="10rem" custoColor="#1A1A1A">
        <p>Home</p>
      </BtnComponent>
      <h1 className={styles.title}>Loja</h1>
      <div className={styles.group_btn}>
        <BtnComponent heigh="3rem" width="4rem" custoColor="#1A1A1A">
          <ShoppingCartIcon />
        </BtnComponent>
        <DropboxMenuComponent />
      </div>
    </header>
  );
};
