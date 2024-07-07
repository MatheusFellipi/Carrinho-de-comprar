import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.css";

export const ProductsDescriptionComponent = () => {
  return (
    <>
      <Divider textAlign="left" sx={{ mt:5, mb:5  }}>
        <Typography variant="h6" textTransform={"uppercase"} component={"h3"}>
          Informações importantes
        </Typography>
      </Divider>
      <div className={styles.important_information}>
        <Typography component={"p"} textAlign={"justify"}>
          Lorem ipsum dolor sit amet. A provident laborum et enim vero At
          deserunt totam aut perferendis soluta. Et enim voluptatibus est
          provident quod ut deleniti pariatur. Ut itaque neque et rerum
          blanditiis et cumque aliquid vel dolore optio et illo quibusdam hic
          natus commodi aut laboriosam officiis! Rem culpa aspernatur et
          quibusdam deleniti quo internos possimus ea vitae aperiam qui pariatur
          voluptatem sed perspiciatis nulla et corrupti reiciendis. Qui numquam
          suscipit aut excepturi consequatur non possimus pariatur At ipsa
          obcaecati. Ex incidunt explicabo qui dolorum rerum hic esse omnis. Aut
          soluta autem vel architecto maiores qui excepturi alias ea velit
          facilis ad facere maxime! Et inventore nihil ea ipsa molestiae ad quae
          rerum id dolore corporis sed veniam optio nam quia soluta nam
          consectetur molestias! In autem deleniti ut rerum dolor et voluptatem
          dolor et maxime optio. At harum quia qui quaerat officiis et quia
          corrupti aut quidem quasi. Et molestiae libero ut totam deleniti non
          odio quae sed explicabo consequuntur est fugit culpa.
        </Typography>
      </div>
    </>
  );
};
