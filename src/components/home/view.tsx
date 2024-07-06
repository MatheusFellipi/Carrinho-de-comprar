import CardProducts from "@/components/home/card";
import styles from "./styles.module.css";
import { useHomeModel } from "@/components/home/model";


export const HomeComponent = () => {
  const {data} = useHomeModel()
  
  return (
    <section className={styles.container}>
      <div className={styles.container_products}>
        {data?.map((item) => (
          <div key={item.id}>
            <CardProducts data={item} />
          </div>
        ))}
      </div>
    </section>
  );
};
