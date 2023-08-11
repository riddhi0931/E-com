// Context create karvu Done
import { createContext, useContext, useEffect, useReducer } from "react";
import { GlobalData } from "../GlobalProducts/GlobalContext";
import reducer from "../GlobalProducts/GlobalReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
};

// Provider banavu and app ne provider na ander nakhvu

const FilterProvider = ({ children }) => {
  const { allproducts } = useContext(GlobalData);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: allproducts });
  }, []);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
