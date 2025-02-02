import { ICartContext } from "@/shared/hook/cart/model";
import { itemCartProductType } from "@/types/products";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function CartModelView(): ICartContext {
  const [total, setTotal] = useState(0);
  const [qdtProduct, setQdtProduct] = useState(0);

  const [cart, setCart] = useState<itemCartProductType[]>(() => {
    if (typeof window === "undefined") return [];
    const storageCart = window.localStorage.getItem("cart");
    if (storageCart) return JSON.parse(storageCart);
    return [];
  });

  useEffect(() => {
    calculateTotal(cart);
    qtdProductTotal(cart)
  }, []);

  const handleAddProduct = (item: itemCartProductType): void => {
    const copy = [...cart];
    const exist = copy.find((i) => i.id === item.id);
    if (exist) {
      exist.qtd++;
      exist.total_price += exist.price;
    } else {
      item.qtd = 1;
      item.total_price = item.price;
      copy.push(item);
  }
    setCart(copy);
    calculateTotal(copy);
    qtdProductTotal(copy)
    addItemLocal(copy);
    toast("Produto adicionado")
  };

  const handleQtdRemove = (id: number): void => {
    const copy = [...cart];
    const index = copy.findIndex((x) => x.id === id);
    if (index === -1) return;
    copy[index].total_price -= copy[index].price;
    copy[index].qtd--;
    if (copy[index].qtd === 0) copy.splice(index, 1);
    setCart(copy);
    calculateTotal(copy);
    qtdProductTotal(copy)
    addItemLocal(copy);
  };

  const handleQtdAdd = (id: number): void => {
    const copy = [...cart];
    const index = copy.findIndex((x) => x.id === id);
    if (index === -1) return;
    copy[index].total_price += copy[index].price;
    copy[index].qtd++;
    setCart(copy);
    calculateTotal(copy);
    qtdProductTotal(copy)
    addItemLocal(copy);
  };

  const handleRemover = (item: itemCartProductType) => {
    const copy = [...cart];
    const index = copy.findIndex((x) => x.id === item.id);
    if (index !== -1) copy.splice(index, 1);
    addItemLocal(copy);
    setCart(copy);
    qtdProductTotal(copy)
    calculateTotal(copy);
    toast("Produto removido")
  };

  const calculateTotal = (data: itemCartProductType[]) => {
    const total = data.reduce((acc: number, item: itemCartProductType) => {
      return acc + item.total_price;
    }, 0);
    setTotal(total);
  };

  const qtdProductTotal = (data: itemCartProductType[]) => {
    const total = data.reduce((acc: number, item: itemCartProductType) => {
      return acc + item.qtd;
    }, 0);
    setQdtProduct(total);
  };

  const addItemLocal = (items: itemCartProductType[]) => {
    window.localStorage.removeItem("cart");
    window.localStorage.setItem("cart", JSON.stringify(items));
  };


  return {
    cart,
    handleAddProduct,
    qdtProduct,
    total,
    handleRemover,
    handleQtdRemove,
    handleQtdAdd,
  };
}
