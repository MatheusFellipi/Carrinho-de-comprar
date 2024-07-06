import MenuIcon from "@mui/icons-material/Menu";
import { BtnComponent } from "@/shared/components/btn";
import { Menu, MenuItem } from "@mui/material";
import { useHeaderModel } from "@/shared/components/header/model";

export const DropboxMenuComponent = () => {
  const { handleClose, handleClick, open, anchorEl } = useHeaderModel();
  return (
    <div>
      <BtnComponent
        heigh="3rem"
        width="4rem"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        custoColor="#C2B4A3"
        onClick={handleClick}
      >
        <MenuIcon />
      </BtnComponent>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Minha conta</MenuItem>
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </div>
  );
};
