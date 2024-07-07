import { createContext, ReactNode, useContext, useMemo } from "react";
import { CartModelView } from "./cart.context";
import { ICartContext } from "@/shared/hook/cart/model";

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export function CartProvider({
  children,
}: Readonly<CartProviderProps>): JSX.Element {
  const {
    handleAddProduct,
    cart,
    handleRemover,
    total,
    qdtProduct,
    handleQtdRemove,
    handleQtdAdd,
  } = CartModelView();

  const contextValue = useMemo(
    () => ({
      cart,
      handleAddProduct,
      handleRemover,
      total,
      handleQtdRemove,
      qdtProduct,
      handleQtdAdd,
    }),
    [
      cart,
      handleAddProduct,
      handleRemover,
      total,
      qdtProduct,
      handleQtdRemove,
      handleQtdAdd,
    ]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart(): ICartContext {
  const context = useContext(CartContext);
  return context;
}
