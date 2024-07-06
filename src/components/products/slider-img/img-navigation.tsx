import Slider from "react-slick";
import styles from "./styles.module.css";
import { useProductModel } from "@/components/products/model.context";

export const ImgNavigationComponent = () => {
  const { matches, sliderPresentation, sliderNavigationRef, product } = useProductModel();
  return (
    <div className={`${styles.group_img} ${matches ? styles.hide : ""} `}>
      <Slider
        vertical
        asNavFor={sliderPresentation as Slider}
        ref={sliderNavigationRef}
        slidesToShow={5}
        focusOnSelect={true}
      >
        {product.img.map((item, i) => (
          <img
            key={i}
            className={`${styles.img}`}
            src={item}
            alt={product.name}
          />
        ))}
      </Slider>
    </div>
  );
};
