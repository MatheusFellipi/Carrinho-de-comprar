export interface ICartContext {
  cart: ItemProductsProps[];
  handleAddProduct: (product: ItemProductsProps) => void;
  handleRemover: (item: ItemProductsProps) => void;
  total: number;
  totalItem: number
  handleOpen: () => void
  handleQtd: (key: string, item: ItemProductsProps) => void
  open: boolean
}