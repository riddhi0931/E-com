import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct";
import AllProducts from "./Pages/AllProducts";
import Cart from "./Pages/Cart";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
