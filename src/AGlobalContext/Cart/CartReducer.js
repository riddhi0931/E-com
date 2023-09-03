const reducer = (state, action) => {
  switch (action.type) {
    case "CART_DATA":
      let { id, product, stock } = action.payload;

      let cartProduct = {
        id,
        name: product.name,
        stock,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
        product,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };

    case "REMOVE_ITEM":
      let newCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: newCart,
      };

    case "CLEAR":
      return { ...state, cart: [] };

    // increment decrement
    // case "INCREMENT": {
    //   let updatedCart = state.cart.map((curElm) => {
    //     if (curElm.id === action.payload) {
    //       let decrement = curElm.stock - 1;
    //       if (decrement <= 0) {
    //         stock = 1;
    //       }
    //       return {
    //         ...curElm,
    //         stock: decrement,
    //       };
    //     } else {
    //       return curElm;
    //     }
    //   });
    //   return {
    //     ...state,
    //     cart: updatedCart,
    //   };
    // }

    // dont add second time in cart
    case "GOTOCART": {
      let newCart = state.cart.filter((curElm) => curElm.id !== action.payload);
      return {
        ...state,
        cart: newCart,
      };
    }

    // Cart Total Price
    case "CART_TOTAL": {
      let total_Price = state.cart.reduce((initialValue, curElm) => {
        let { price } = curElm;
        return (initialValue = initialValue + price);
      }, 0);
      return {
        ...state,
        totalPrice: total_Price,
      };
    }

    default:
      return state;
  }
};

export default reducer;
