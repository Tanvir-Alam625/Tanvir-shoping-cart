import { useEffect, useState } from "react";
import { deleteShoppingCart, getLocalStorageCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  // saved product cart
  const clearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };
  useEffect(() => {
    const storedCart = getLocalStorageCart();
    const savedCart = [];
    const keys = Object.keys(storedCart);
    console.log(keys);
    fetch("http://localhost:5000/productKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storedCart) {
          const findProduct = products.find((product) => product._id === id);
          if (findProduct) {
            const newQuantity = storedCart[id];
            findProduct.quantity = newQuantity;
            savedCart.push(findProduct);
          }
        }
      });
    setCart(savedCart);
  }, []);
  return [cart, setCart, clearCart];
};

export default useCart;
