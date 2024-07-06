import { BtnComponent } from "@/shared/components/btn";
import styles from "./styles.module.css";
import { InputComponent } from "@/shared/components/input/inde";

export const FooterComponent = () => {
  return (
    <footer className={styles.container}>
      <section className={styles.rede}>
        <h1 className={styles.title}>Loja</h1>
        <div className={styles.rede_btn}>
          <BtnComponent
            heigh="3rem"
            width="4rem"
            aria-haspopup="true"
            custoColor="#C2B4A3"
          >
            <img src="src/assets/svg/insta.svg" alt="Instagram" />
          </BtnComponent>
          <BtnComponent
            heigh="3rem"
            width="4rem"
            aria-haspopup="true"
            custoColor="#C2B4A3"
          >
            <img src="src/assets/svg/site.svg" alt="site" />
          </BtnComponent>
          <BtnComponent
            heigh="3rem"
            width="4rem"
            aria-haspopup="true"
            custoColor="#C2B4A3"
          >
            <img src="src/assets/svg/x.svg" alt="x (Twitter)" />
          </BtnComponent>
        </div>
      </section>

      <section className={styles.news_letter}>
        <p>inscrever no Newsletter</p>
        <InputComponent />
      </section>

      <section className={styles.reserved}>
        <p>© 2024 StyleLoom. All rights reserved.</p>
        <div className={styles.reserved_terms}>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </section>
    </footer>
  );
};
