import styles from "./styles.module.css"

export const ProductsDetailsImgComponent = () => {
  return (
    <section className={styles.container_img}> 
      <div className={styles.group_img}>
        <img className={styles.img} src="src/assets/image.png" alt="" />
        <img className={styles.img} src="src/assets/image.png" alt="" />
        <img className={styles.img} src="src/assets/image.png" alt="" />
        <img className={styles.img} src="src/assets/image.png" alt="" />
        <img className={styles.img} src="src/assets/image.png" alt="" />
      </div>
      <img className={styles.img_presentation} src="src/assets/image.png" alt="" />
    </section>
  );
};
