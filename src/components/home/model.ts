import { ControllerProduct } from "@/services/repository/product/controllers";
import { ProductType } from "@/types/products";
import { useEffect, useState } from "react";

export const useHomeModel = () => {
  const [data, setData] = useState<ProductType[]>();

  useEffect(() => {
    setData(ControllerProduct.getFaker());
  }, []);

  return { data };
};
