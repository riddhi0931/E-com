import { createContext, useEffect, useReducer } from "react";
import reducer from "./CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("cartItem");
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  totalItem: "",
  totalPrice: 10,
  delivery: 100,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, stock, product) => {
    dispatch({
      type: "CART_DATA",
      payload: { id, stock, product },
    });
  };

  // dont add second time in cart
  const goToCart = (id) => {
    dispatch({ type: "GOTOCART", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    console.log("removed", id);
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  // Increment and Decrement

  // const setDecrement = (id) => {
  //   dispatch({ type: "INCREMENT", payload: id });
  // };

  // const setIncrement = (id) => {
  //   dispatch({ type: "INCREMENT", payload: id });
  // };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL" });
    localStorage.setItem("cartItem", JSON.stringify(state.cart)); //save to local storage on every change of state
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        goToCart,
        // setDecrement,
        // setIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
