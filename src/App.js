import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct";
import AllProducts from "./Pages/AllProducts";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/allproducts" element={<AllProducts />} />
      </Routes>
    </>
  );
};

export default App;
