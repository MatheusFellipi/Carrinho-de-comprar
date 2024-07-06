import Slider from "react-slick";
import styles from "./styles.module.css";
import { useDetailsModel } from "@/components/products/model.context";

const img = [1, 2, 3, 4, 5, 6, 7, 8];

export const ImgNavigationComponent = () => {
  const { matches, nav1, sliderRef2 } = useDetailsModel();

  return (
    <div className={`${styles.group_img} ${matches ? styles.hide : ""} `}>
      <Slider
        vertical
        asNavFor={nav1}
        ref={sliderRef2}
        slidesToShow={5}
        focusOnSelect={true}
      >
        {img.map((item, i) => (
          <img
            key={i}
            className={`${styles.img}`}
            src="src/assets/image.png"
            alt=""
          />
        ))}
      </Slider>
    </div>
  );
};
