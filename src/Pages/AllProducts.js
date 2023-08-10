import React, { useContext } from "react";
import { GlobalData } from "../AGlobalContext/GlobalContext";
import Products from "../Components/Products";

const AllProducts = () => {
  const { allproducts } = useContext(GlobalData);

  return (
    <>
      <h1>Hello</h1>
      <h2>Lu</h2>

      <div className="w-[1280px] m-auto">
        <h1 className="text-3xl font-bold mt-20 my-10">All Products</h1>
        <div className=" flex flex-rows gap-4 border border-black w-[1000px]">
          {allproducts.map((item) => (
            <Products key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
