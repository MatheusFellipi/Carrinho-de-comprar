import Slider from "react-slick";
import styles from "./styles.module.css";
import { useDetailsModel } from "@/components/products/model.context";

const img = [1, 2, 3, 4, 5, 6, 7, 8];


export const ImgPresentationComponent = () => {
  const { nav2, sliderRef1 } = useDetailsModel();

  return (
    <div className={styles.img_presentation}>
      <Slider asNavFor={nav2} ref={sliderRef1} dots infinite>
        {img.map((item, i) => (
            <img
              className={styles.img_presentation}
              src="src/assets/image.png"
              alt=""
            />
        ))}
      </Slider>
    </div>
  );
};
