import {
  Button,
  Card,
  Typography,
  CardActions,
  Rating,
  CardContent,
  CardMedia,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function CardProducts() {
  return (
    <Card
      sx={{ width: 185, justifyContent: "center", cursor: "pointer" }}
      onClick={() => {
        console.log("sdasd");
      }}
    >
      <CardMedia
        sx={{ height: 200, objectFit: "cover" }}
        image="./src/assets/Cadeira.png"
      />
      <CardContent>
        <Typography marginBottom={1} variant="h6" component="h1">
          Geladeira
        </Typography>
        <Rating size="small" name="read-only" value={2} readOnly />
        <Typography variant="h6">R$ 3.599</Typography>
        <Typography>10x de R$ 250</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button>
          <FavoriteBorderOutlinedIcon />
        </Button>
        <Button>
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
