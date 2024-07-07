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
        <Typography variant="h3" component={"h3"}>
          Qui laboriosam laboriosam ab fugit architecto.{" "}
        </Typography>
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
        <Typography variant="h4" component={"h4"}>
          Eos expedita atque cum nisi quas.{" "}
        </Typography>
        <Typography variant="body1" component={"p"} textAlign={"justify"}>
          Ad error maxime et excepturi excepturi aut facere reiciendis vel
          maiores fugit. Sed dolore odit ut reprehenderit amet ut numquam
          blanditiis. Ut vero doloribus aut iusto rerum aut nostrum aperiam. Est
          sunt beatae cum voluptate aperiam ut voluptatem internos hic nisi
          perspiciatis vel modi consequatur. Qui minus galisum quo iste quas qui
          rerum quibusdam et natus molestiae rem consectetur voluptates et sunt
          praesentium. Et dolorem velit aut aliquid sapiente et esse voluptatem
          est quaerat internos ut obcaecati laboriosam sit quis velit! Aut
          cupiditate quasi ut delectus inventore ex nulla tenetur quo repellat
          autem non error natus. Sit quas amet sed illo provident aut laborum
          tempora sed consequatur rerum in mollitia expedita eum voluptate quis?
          Vel alias corrupti est incidunt accusantium eos esse provident eum
          iusto inventore et harum sunt aut dignissimos enim ut alias veniam!
          Eos dolores aliquam cum eligendi voluptates et exercitationem quia. Ab
          iure rerum ut nobis reprehenderit id cupiditate perferendis.{" "}
        </Typography>
      </div>
    </>
  );
};
