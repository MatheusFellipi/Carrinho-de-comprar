import { ControllerProduct } from "@/services/repository/product/controllers";
import { useCart } from "@/shared/hook/cart";
import { ProductType } from "@/types/products";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useHomeModel = () => {
  const [data, setData] = useState<ProductType[]>();
  const { handleAddProduct } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    setData(ControllerProduct.getFaker());
  }, []);

  return { data, handleAddProduct, navigate };
};
