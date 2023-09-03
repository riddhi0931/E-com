import React, { useContext } from "react";
import { CartContext } from "../AGlobalContext/Cart/CartContext";

const AddToCart = ({ product }) => {
  const { id, stock } = product;

  console.log("products", product);

  const { addToCart } = useContext(CartContext);

  console.log("addToCart", product);
  return (
    <div>
      <button
        onClick={() => addToCart(id, stock, product)}
        className=" bg-black black text-white px-4 py-2"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
