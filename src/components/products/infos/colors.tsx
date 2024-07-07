import { useProductModel } from "@/components/products/model.context";
import { Box } from "@mui/material";

export const ProductsDetailsColorsComponent = () => {
  const { product } = useProductModel();
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      sx={{
        gap: 1,
      }}
    >
      {product?.colors.map((item) => (
        <Box
          sx={{
            borderRadius: 10,
            border: 1,
            borderColor: "#158A8A",
            padding: 0.5,
            boxShadow: 4,
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              width: 20,
              height: 20,
              bgcolor: item,
              borderRadius: 10,
              boxShadow: 4,
            }}
          ></Box>
        </Box>
      ))}
    </Box>
  );
};
