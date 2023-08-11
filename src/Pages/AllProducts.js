import React, { useContext } from "react";
import { GlobalData } from "../AGlobalContext/GlobalProducts/GlobalContext";
import Products from "../Components/Products";
import Filter from "../Components/Filter";

const AllProducts = () => {
  const { allproducts } = useContext(GlobalData);

  return (
    <>
      <div className="w-[1280px] m-auto ">
        <h1 className="text-3xl font-bold mt-20 my-10">All Products</h1>

        <div className="flex">
          {/* Filters */}
          <Filter />
          {/* All Products */}
          <div className=" grid grid-cols-3 gap-4 border border-black w-[1000px]">
            {allproducts.map((item) => (
              <Products key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
