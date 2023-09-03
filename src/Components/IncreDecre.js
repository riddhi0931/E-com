import React, { useContext } from "react";
import { CartContext } from "../AGlobalContext/Cart/CartContext";

const IncreDecre = ({ id, stock }) => {
  const { setDecrement, setIncrement } = useContext(CartContext);

  return (
    <>
      <div className="flex gap-4 font-semibold text-lg items-center">
        <button onClick={() => setDecrement(id)}>-</button>
        <p className=" text-black">{stock}</p>
        <button onClick={() => setIncrement(id)}>+</button>
      </div>
    </>
  );
};

export default IncreDecre;
