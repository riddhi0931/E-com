// Context create karvu
// Provider banavu and app ne provider na ander nakhvu
// use karvu useContext hook na help thi

// Context create karvu
import { createContext, useEffect, useReducer } from "react";
import reducer from "./Reducer/ProductReducer";
import axios from "axios";

const GlobalData = createContext();

const API = "https://api.pujakaitem.com/api/products";

// initialState matlab starting ma su display thase
const initialState = {
  products: [],
  featureProducts: [],
  isLoading: false,
};

// Provider banavu and app ne provider na ander nakhvu
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Jya sudhi Data fetch thai ne na avi jay tya sudhi hu user ne loading batavis

  // API Fetching Function

  const apiCall = async (url) => {
    dispatch({ type: "LOADING_ON" });
    try {
      const response = await axios(url);
      const product = await response.data;
      dispatch({ type: "API_DATA", payload: product });
      console.log("product", product);
    } catch (error) {
      throw error;
    }
  };
  // API Calling in useEffect
  useEffect(() => {
    apiCall(API);
  }, []);

  // Have data aavi gayu che LOADING on che to off kari do and data dekhai jase

  return (
    <GlobalData.Provider value={{ ...state }}>{children}</GlobalData.Provider>
  );
};

export { GlobalProvider, GlobalData };
