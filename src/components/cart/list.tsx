import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";
import styles from "./styles.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useCart } from "@/shared/hook/cart";
import {
  Box,
  IconButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function ListProductsComponent() {
  const matches = useMediaQuery("(max-width:767px)");
  const { cart, handleRemover, handleQtdAdd, handleQtdRemove } = useCart();

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {cart?.map((item) => (
        <ListItem
          sx={{
            ...(matches && {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: 3,
              marginBottom: 5,
            }),
          }}
          key={item.id}
        >
          <ListItemAvatar>
            <Avatar>
              <img className={styles.img} src={item.logo_img} alt={item.name} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            sx={{
              ...(!matches && { width: 280 }),
            }}
          >
            {item.name}
          </ListItemText>
          <ListItemText sx={{ width: 218 }}>
            <Typography>Valor: </Typography>
            <Typography fontWeight={500}>
              {item.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Typography>
          </ListItemText>
          <ListItemText sx={{ width: 218 }}>
            <Typography>Total:</Typography>
            <Typography fontWeight={500}>
              {item.total_price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Typography>
          </ListItemText>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
        
            }}
          >
            <ListItemButton
              sx={{ justifyContent: "center" }}
              component="button"
              onClick={() => handleQtdRemove(item.id)}
            >
              <RemoveCircleIcon />
            </ListItemButton>
            <ListItemText sx={{ width: 10 }}>
              <Typography textAlign={"center"}>{item.qtd}</Typography>
            </ListItemText>

            <ListItemButton
              sx={{ justifyContent: "center" }}
              component="button"
              onClick={() => handleQtdAdd(item.id)}
            >
              <AddCircleIcon />
            </ListItemButton>

            <ListItemButton>
              <IconButton
                edge="start"
                aria-label="delete"
                onClick={() => {
                  handleRemover(item);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
