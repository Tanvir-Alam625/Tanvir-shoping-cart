import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OrderReview = ({ product, removeItems }) => {
  const { name, price, shipping, quantity, img } = product;
  return (
    <div className="flex   p-2 shadow border rounded-lg my-4">
      <div className="order-img">
        <img src={img} className="h-28 w-32 rounded-lg" alt="order-img" />
      </div>
      <div className="order-details flex w-full justify-between items-center">
        <div className=" ml-4 order-info w-full">
          <h2 className="text-2xl" title={name}>
            {name.length > 18 ? name.slice(0, 18) + "..." : name}
          </h2>
          <h2>
            Price: <span className="text-orange-300"> ${price}</span>
          </h2>
          <h2>
            Shipping Charge:
            <span className="text-orange-300">${shipping}</span>
          </h2>
          <h2>Quantity: {quantity}</h2>
        </div>
        <div className="delete-btn  ">
          <button
            onClick={() => removeItems(product)}
            className="text-right bg-red-100 p-2 rounded-full "
          >
            <FontAwesomeIcon
              icon={faTrashAlt}
              className=" h-8 w-8 text-red-500"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
