const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let pricetag = action.payload.map((curElm) => curElm.price);

      let maxPrice = Math.max(...pricetag);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "SHOW_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };

    case "SHOW_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };

    case "SORTING_VALUE":
      return {
        ...state,
        sortingValue: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let { filter_products } = state;

      let tempProduct = [...filter_products];

      let sortData = (a, b) => {
        if (state.sortingValue === "Lowest") {
          return a.price - b.price;
        }
        if (state.sortingValue === "Highest") {
          return b.price - a.price;
        }
        if (state.sortingValue === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (state.sortingValue === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempProduct.sort(sortData);

      return {
        ...state,
        filter_products: newSortData,
      };

    // Filter Section
    case "FILTER_SECTION":
      let { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    // Filter Products
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilter = [...all_products];

      let { text, category, company, price } = state.filters;

      if (text) {
        tempFilter = tempFilter.filter((curElm) => {
          return curElm.name.toLowerCase().includes(text);
        });
      }

      if (category !== "All") {
        tempFilter = tempFilter.filter(
          (curElm) => curElm.category === category
        );
      }

      if (company !== "All") {
        tempFilter = tempFilter.filter((curElm) => curElm.company === company);
      }
      if (price) {
        tempFilter = tempFilter.filter((curElm) => curElm.price <= price);
      }

      return {
        ...state,
        filter_products: tempFilter,
      };

    default:
      return state;
  }
};

export default reducer;
