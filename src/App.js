import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import SingleProduct from "./Components/SingleProduct";



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
};

export default App;
