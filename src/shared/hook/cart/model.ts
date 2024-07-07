import { itemCartProductType } from "@/types/products";

export interface ICartContext {
  cart: itemCartProductType[];
  total: number;
  qdtProduct: number;
  handleAddProduct: (product: itemCartProductType) => void;
  handleRemover: (item: itemCartProductType) => void;
  handleQtdRemove: (id: number) => void;
  handleQtdAdd: (id: number) => void;
}
