import { useEffect, useState } from "react";
import { getLocalStorageCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  // saved product cart
  useEffect(() => {
    const storedCart = getLocalStorageCart();
    const savedCart = [];
    for (const id in storedCart) {
      const findProduct = products.find((product) => product.id === id);
      if (findProduct) {
        const newQuantity = storedCart[id];
        findProduct.quantity = newQuantity;
        savedCart.push(findProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  return [cart, setCart];
};

export default useCart;
