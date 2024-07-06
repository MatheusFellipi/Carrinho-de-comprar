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
import { useNavigate } from "react-router-dom";
import { ProductType } from "@/types/products";

interface Prop {
  data: ProductType;
}

export default function CardProducts({ data }: Prop) {
  const matches = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        minHeight: 340,
        ...(matches && {
          display: "flex",
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
        <Typography variant="subtitle1">R$ {data.price}</Typography>
        <Typography variant="caption" fontSize={"9px"} component={"span"}>
          10x de R$ {data.divide_price}
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
          sx={{
            marginLeft: 0,
          }}
        >
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
