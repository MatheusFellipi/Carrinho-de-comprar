import CardProducts from "@/components/home/card";
import styles from "./styles.module.css";

export const HomeComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container_products}>
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardProducts />
      </div>
    </section>
  );
};
