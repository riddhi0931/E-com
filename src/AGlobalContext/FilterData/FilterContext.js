// Context create karvu Done
import { createContext, useContext, useEffect, useReducer } from "react";
import { GlobalData } from "../GlobalProducts/GlobalContext";
import reducer from "./FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  loading: true,
  gridView: true,
  sortingValue: "Highest",
  filters: {
    text: "",
    category: "All",
    company: "All",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
};

// Provider banavu and app ne provider na ander nakhvu

const FilterProvider = ({ children }) => {
  const { products } = useContext(GlobalData);

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    dispatch({ type: "SHOW_GRID_VIEW" });
  };
  const setListView = () => {
    dispatch({ type: "SHOW_LIST_VIEW" });
  };

  const sorting = (event) => {
    const getValue = event.target.value;
    dispatch({ type: "SORTING_VALUE", payload: getValue });
  };

  // Filter Section
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    return dispatch({ type: "FILTER_SECTION", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sortingValue, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    console.log("added to all Products");
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, FilterContext };
