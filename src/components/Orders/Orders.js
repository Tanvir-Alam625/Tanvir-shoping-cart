import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import OrderReview from "../OrderReview.js/OrderReview";
import Cart from "../Shop/Cart/Cart";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const removeItems = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    console.log(rest);
    removeFromDb(product.id);
    setCart(rest);
  };
  return (
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
