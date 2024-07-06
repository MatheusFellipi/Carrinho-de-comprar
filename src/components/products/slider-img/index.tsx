import styles from "./styles.module.css";
import { ImgPresentationComponent } from "@/components/products/slider-img/img-presentation";
import { ImgNavigationComponent } from "@/components/products/slider-img/img-navigation";


export const ProductsDetailsImgComponent = () => {
  return (
    <div className={`${styles.container_img}`}>
      <ImgNavigationComponent />
      <ImgPresentationComponent />
    </div>
  );
};
