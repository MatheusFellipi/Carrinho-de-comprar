import styles from "./styles.module.css";
import { useProductModel } from "@/components/products/model.context";

export const ImgPresentationComponent = () => {
  const { product, selectImg } = useProductModel();
  return (
    <div className={styles.img_presentation}>
      <img className={styles.img_presentation} src={selectImg} alt={product?.name}/>
    </div>
  );
};
