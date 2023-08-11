const reducer = (state, action) => {
  switch (action.type) {
    // Loading chalu che because data aava ma var lagi sake che
    case "LOADING_ON":
      return {
        ...state,
        isLoading: true,
      };

    // Data avi jai to top selling ne side per filterout kari ne featureProduct nam na godown ma nakho
    case "API_DATA":
      const topSelling = action.payload.filter((singleProduct) => {
        return singleProduct.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        allproducts: action.payload,
        featureProducts: topSelling,
      };

    case "SP_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SP_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
