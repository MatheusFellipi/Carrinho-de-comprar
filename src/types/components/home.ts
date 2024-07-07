import { itemCartProductType, ProductType } from "@/types/products";
import { NavigateFunction } from "react-router-dom";

export interface CardProductsProp {
  data: ProductType;
  navigate: NavigateFunction ;
  handleAddProduct: (product: itemCartProductType) => void;
}
