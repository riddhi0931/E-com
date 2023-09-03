import React, { useContext } from "react";
import { CartContext } from "../AGlobalContext/Cart/CartContext";
import CartItem from "../Components/CartItem";

function Cart() {
  const { cart, totalPrice, delivery } = useContext(CartContext);

  console.log("cartI", cart);

  return (
    <>
      <div className="w-[1200px] m-auto ">
        <div>
          <h1 className=" text-4xl font-bold">Shopping Bag</h1>
        </div>

        {/* Cart Item */}
        <div className=" border-t-[2px] border-dashed border-black flex flex-row justify-between mt-10">
          {/* Single Item */}
          <div className=" basis-2/4 flex flex-col gap-10">
            {cart?.map((curElm) => (
              <CartItem key={curElm.id} {...curElm} />
            ))}
          </div>

          {/* Pricing and Total */}
          <div className=" basis-2/6">
            <p>SubTotal: {totalPrice}</p>
            <p>Delivery: {delivery}</p>
            <p>Total: {totalPrice + delivery}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
