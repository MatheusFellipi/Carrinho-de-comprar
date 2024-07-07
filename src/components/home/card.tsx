import useMediaQuery from "@mui/material/useMediaQuery";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { itemCartProductType } from "@/types/products";
import { CardProductsProp } from "@/types/components/home";

export default function CardProducts({
  data,
  navigate,
  handleAddProduct,
}: CardProductsProp) {
  const matches = useMediaQuery("(max-width:600px)");

  const styCard = {
    minHeight: 340,
    width: 250,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    ...(matches && {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    }),
  };
  const styCardAction = {
    justifyContent: "space-evenly",
    ...(matches && {
      flexDirection: "column",
    }),
  };
  return (
    <Card sx={styCard}>
      <CardMedia
        component={"img"}
        sx={{ height: 100, objectFit: "cover" }}
        src={data.logo_img}
      />

      <CardContent component={"section"}>
        <Typography variant="h5" component="h5">
          {data.name}
        </Typography>
        <Rating size="small" value={data.rating} readOnly />
        <Typography variant="h6" component="p">
          {data.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
        <Typography variant="subtitle1" fontSize={"12px"} component={"p"}>
          {`10x de ${data.divide_price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}`}
        </Typography>
      </CardContent>

      <CardActions sx={styCardAction} disableSpacing={true}>
        <Button onClick={() => navigate(`/${data.id}`)}>
          <InfoOutlinedIcon />
        </Button>
        <Button onClick={() => handleAddProduct(data as itemCartProductType)}>
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
