import { Button } from "@mui/material";
import styles from "./styles.module.css";
import { useProductModel } from "@/components/products/model.context";

export const ImgNavigationComponent = () => {
  const { matches, product, setSelectImg, selectImg } = useProductModel();

  return (
    <div className={`${styles.group_img} ${matches && styles.hide}`}>
      {product?.img.map((item, i) => (
        <Button
          sx={{...(selectImg === item && { borderColor: "#158A8A", border: 1 })}}
          onClick={() => setSelectImg(item)}
        >
          <img key={i} className={`${styles.img}`} src={item} alt={product?.name}/>
        </Button>
      ))}
    </div>
  );
};
