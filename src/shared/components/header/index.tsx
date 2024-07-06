import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { useNavigate } from "react-router-dom";


export default function ButtonAppBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }} component={"header"}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Loja
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="shopping"
            onClick={()=>{
              navigate("cart/")
            }}
          >
            <ShoppingCartTwoToneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
