import CardProducts from "@/components/home/card";
import styles from "./styles.module.css";
import { useHomeModel } from "@/components/home/model";

export const HomeComponent = () => {
  const { data, handleAddProduct, navigate } = useHomeModel();

  return (
    <>
      <section>
        <img
          className={styles.img_hero}
          src="public/img/banner.png"
          alt="banner nova coleção"
        />
      </section>
      <section className={styles.content}>
        {data?.map((item) => (
          <CardProducts
            data={item}
            handleAddProduct={handleAddProduct}
            navigate={navigate}
          />
        ))}
      </section>
    </>
  );
};
