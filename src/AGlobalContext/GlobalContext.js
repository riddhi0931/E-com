// Context create karvu
// Provider banavu and app ne provider na ander nakhvu
// use karvu useContext hook na help thi

// Context create karvu
import { createContext } from "react";

const GlobalData = createContext()

// Provider banavu and app ne provider na ander nakhvu
const GlobalProvider = ({ children }) => {

    function apiCall() {
        const response = fetch("https://api.pujakaitem.com/api/products")
        const format = response.json()
    }

    return <GlobalData.Provider value={{ myName: "meeru" }}>
        {children}
    </GlobalData.Provider>

}

export { GlobalProvider, GlobalData }




