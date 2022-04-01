import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import Spinner from "../Spinner/Spinner";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  // all states
  const [products, setProducts, loading, setLoading] = useProducts();
  // const [] = useProducts();
  const [cart, setCart, clearCart] = useCart(products);
  // use navigate path
  const navigate = useNavigate();

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
        <Cart cart={cart} clearCart={clearCart}>
          {cart.length > 0 && (
            <button
              onClick={() => navigate("/order")}
              className="bg-orange-500 p-2 flex w-full my-2 justify-between items-center rounded text-white"
            >
              Review Order
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </button>
          )}
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
