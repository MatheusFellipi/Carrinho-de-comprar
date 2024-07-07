import CardProducts from "@/components/home/card";
import styles from "./styles.module.css";
import { useHomeModel } from "@/components/home/model";

export const HomeComponent = () => {
  const { data, handleAddProduct, navigate } = useHomeModel();

  return (
    <>
      <img
        className={styles.img_hero}
        src="../../../../public/img/banner.png"
        alt="banner nova coleção"
      />
      <section className={styles.container}>
        <div className={styles.container_products}>
          {data?.map((item) => (
            <div key={item.id}>
              <CardProducts
                data={item}
                handleAddProduct={handleAddProduct}
                navigate={navigate}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
