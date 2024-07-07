import useMediaQuery from "@mui/material/useMediaQuery";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { itemCartProductType } from "@/types/products";
import { CardProductsProp } from "@/types/components/home";
import { Box, IconButton } from "@mui/material";

export default function CardProducts({
  data,
  navigate,
  handleAddProduct,
}: CardProductsProp) {
  const matches = useMediaQuery("(max-width:768px)");

  const styCard = {
    boxShadow: 3,
    ...(matches && {  display: "flex", flexDirection: "row", width: "100%" }),
  };

  const imgStyles = {
    ...(!matches && { height: 300,width: 300, }),
    ...(matches && { height: "100%", width: 150 }),
  };

  return (
    <Card sx={styCard}>
      <CardMedia
        component={"img"}
        sx={imgStyles}
        src={data.logo_img}
      />
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <CardContent component={"section"}>
          <Typography variant="body1" component="p">
            {data.name}
          </Typography>
          <Rating size="small" value={data.rating} readOnly />

          <Typography variant="h6" component="h6">
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

        <Box display={"flex"} justifyContent={"space-evenly"}>
          <IconButton onClick={() => navigate(`/${data.id}`)}>
            <InfoOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => handleAddProduct(data as itemCartProductType)}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
