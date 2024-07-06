import Slider from "react-slick";
import styles from "./styles.module.css";
import { useProductModel } from "@/components/products/model.context";

export const ImgPresentationComponent = () => {
  const { sliderNavigation, sliderPresentationRef, product } =
    useProductModel();
  return (
    <div className={styles.img_presentation}>
      <Slider
        asNavFor={sliderNavigation as Slider}
        ref={sliderPresentationRef}
        dots
        infinite
      >
        {product.img.map((item, i) => (
          <img
            key={i}
            className={styles.img_presentation}
            src={item}
            alt={product.name}
          />
        ))}
      </Slider>
    </div>
  );
};
