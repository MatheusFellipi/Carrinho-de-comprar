import {
  Card,
  Typography,
  Rating,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
  CardActions,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { itemCartProductType, ProductType } from "@/types/products";
import { NavigateFunction } from "react-router-dom";

interface Prop {
  data: ProductType;
  navigate: NavigateFunction;
  handleAddProduct: (product: itemCartProductType) => void;
}

export default function CardProducts({
  data,
  navigate,
  handleAddProduct,
}: Prop) {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Card
      sx={{
        minHeight: 340,
          display: "flex",
          justifyContent: "space-between",
          flexDirection:"column",
        ...(matches && {
          flexDirection:"row",
          alignItems: "center",
          width: "100%",
        }),
      }}
    >
      <CardMedia
        component={"img"}
        sx={{ height: 90, objectFit: "contain" }}
        src={data.logo_img}
      />
      <CardContent component={"section"}>
        <Typography variant="h6" component="h6" maxWidth={120}>
          {data.name}
        </Typography>
        <Rating size="small" value={data.rating} readOnly />
        <Typography variant="subtitle1">R$ {data.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}</Typography>
        <Typography variant="caption" fontSize={"9px"} component={"span"}>
          10x de R$ {data.divide_price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          ...(matches && {
            flexDirection: "column",
          }),
        }}
        disableSpacing={true}
      >
        <Button
          onClick={() => {
            navigate(`/${data.id}`);
          }}
        >
          <InfoOutlinedIcon />
        </Button>
        <Button
          onClick={() => {
            handleAddProduct(data as itemCartProductType);
          }}
        >
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
