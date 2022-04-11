import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import OrderReview from "../OrderReview.js/OrderReview";
import Spinner from "../Spinner/Spinner";
import Cart from "../Shop/Cart/Cart";
import useClearItem from "../../hooks/useClearItem";

const Orders = () => {
  // get all hooks
  const [products, setProducts, loading, setLoading] = useProducts();
  const [cart, setCart, clearCart] = useCart(products);
  // navigate
  const navigate = useNavigate();
  // remove items
  const removeItems = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    removeFromDb(product.id);
    setCart(rest);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col  md:flex-row justify-center  md:justify-between   mx-4 md:mx-12 lg:mx-28 mt-8">
          <div className="order-items w-full md:w-3/5 mb-8">
            {cart.map((product) => (
              <OrderReview
                key={product.id}
                product={product}
                removeItems={removeItems}
              />
            ))}
          </div>
          <div className="order-summary w-full md:w-auto">
            <Cart cart={cart} clearCart={clearCart}>
              {cart.length > 0 && (
                <button
                  onClick={() => navigate("/shipment")}
                  className="bg-orange-500 p-2 flex w-full my-2 justify-between items-center rounded text-white"
                >
                  Proceed
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </button>
              )}
            </Cart>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
