import React, { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import { addToDb, getLocalStorageCart } from "../../utilities/fakedb";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
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
  // add to cart btn handler function
  const handleAddtoCartBtn = (selectProduct) => {
    const allReadyExists = cart.find(
      (product) => product.id === selectProduct.id
    );
    let newCart = [];
    if (!allReadyExists) {
      selectProduct.quantity = 1;
      newCart = [...cart, selectProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectProduct.id);
      allReadyExists.quantity = allReadyExists.quantity + 1;
      newCart = [...rest, allReadyExists];
    }
    setCart(newCart);
    addToDb(selectProduct.id);
  };
  return (
    <div className="shop-container ">
      <div className="products-items mt-12 ml-12 md:m-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {products.map((product) => (
          <Product
            product={product}
            handleBtn={handleAddtoCartBtn}
            key={product.id}
          />
        ))}
      </div>
      <div className="product-cart">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
