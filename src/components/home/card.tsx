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

export default function CardProducts() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Card
      sx={{
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
        image="./src/assets/Cadeira.png"
      />
      <CardContent component={"section"}>
        <Typography variant="h6" component="h6">
          Geladeira
        </Typography>
        <Rating size="small" value={2} readOnly />

        <Typography variant="subtitle1">R$ 3.599</Typography>
        <Typography variant="caption" fontSize={"9px"} component={"span"}>
          10x de R$ 250
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
        <Button>
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
