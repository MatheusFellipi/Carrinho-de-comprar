import styles from "./styles.module.css";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useNavigate } from "react-router-dom";

interface Props {
  name?: string;
}

export const BackPageTitleComponent = ({ name }: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.back}>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosIcon />
      </IconButton>
      <Typography variant="h4" textAlign={"left"}>
        {name}
      </Typography>
    </div>
  );
};
