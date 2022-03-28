import React from "react";
const Cart = ({ cart }) => {
  let total = 0;
  let shippingCharge = 0;
  let newQuantity = 0;
  for (const product of cart) {
    const { price, shipping, quantity } = product;
    newQuantity = newQuantity + quantity;
    total = (total + price) * quantity;
    shippingCharge = (shippingCharge + shipping) * quantity;
  }
  const tax = parseFloat(((total * 10) / 100).toFixed(2));
  const grandTotal = total + shippingCharge + tax;
  const detailsStyle = "text-xl my-2 tracking-tight font-[Lato]";
  return (
    <div className="cart-container sm:w-full md:w-full">
      <h3 className=" text-2xl text-center mb-4 font-semibold font-[Lato]">
        Order Summary
      </h3>
      <p className={detailsStyle}>Selected items: {newQuantity}</p>
      <p className={detailsStyle}>Total Pice: $ {total}</p>
      <p className={detailsStyle}>Shipping Charge: $ {shippingCharge}</p>
      <p className={detailsStyle}>Tax: $ {tax}</p>
      <h3 className="text-xl font-semibold font-[Lato] tracking-tight">
        Grand Total: $ {grandTotal.toFixed(2)}
      </h3>
    </div>
  );
};

export default Cart;
