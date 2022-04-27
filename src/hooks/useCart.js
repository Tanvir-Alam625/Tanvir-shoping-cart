import { useEffect, useState } from "react";
import { deleteShoppingCart, getLocalStorageCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  // saved product cart
  const clearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };
  useEffect(() => {
    const storedCart = getLocalStorageCart();
    const savedCart = [];
    for (const id in storedCart) {
      const findProduct = products.find((product) => product._id === id);
      if (findProduct) {
        const newQuantity = storedCart[id];
        findProduct.quantity = newQuantity;
        savedCart.push(findProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  return [cart, setCart, clearCart];
};

export default useCart;
