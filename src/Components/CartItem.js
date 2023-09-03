import React, { useContext } from "react";
import IncreDecre from "./IncreDecre";
import { CartContext } from "../AGlobalContext/Cart/CartContext";

const CartItem = ({ id, image, name, price, stock }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <div className="  rounded-3xl p-4 flex gap-10 shadow-md">
        <div>
          <img src={image} alt="product" className=" h-32 rounded-3xl" />
        </div>

        <div className=" flex items-center justify-center gap-28">
          <div>
            <h3 className=" text-xl font-bold">{name}</h3>
            <br />
            <p className="text-xl semi-bold">${(price / 100).toFixed(2)}</p>
            <hr />
          </div>
          <div className=" flex flex-col items-center">
            <IncreDecre id={(id, stock)} />
            <br />
            <button
              className=" button py-1 px-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white "
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
