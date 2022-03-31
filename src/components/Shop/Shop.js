import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import Spinner from "../Spinner/Spinner";
import "./Shop.css";

const Shop = () => {
  // all states
  const [products, setProducts, loading, setLoading] = useProducts();
  // const [] = useProducts();
  const [cart, setCart] = useCart(products);

  // add to cart btn handler function
  const handleAddToCartBtn = (selectProduct) => {
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
      {loading ? (
        <Spinner />
      ) : (
        <div className="products-items mt-12 ml-12 md:m-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          {products.map((product) => (
            <Product
              product={product}
              handleBtn={handleAddToCartBtn}
              key={product.id}
            />
          ))}
        </div>
      )}

      <div className="product-cart">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
