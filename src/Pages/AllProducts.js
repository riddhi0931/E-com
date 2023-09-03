import React, { useContext } from "react";
import Filter from "../Components/Filter";
import { FilterContext } from "../AGlobalContext/FilterData/FilterContext";
import ListView from "../Components/ListView";
import GridView from "../Components/GridView";
import Sorting from "../Components/Sorting";

const AllProducts = () => {
  const { filter_products, gridView } = useContext(FilterContext);

  console.log("filter_productsssss", filter_products);

  return (
    <>
      <div className="w-[1080px] m-auto">
        <h1 className="text-3xl font-bold mt-6 my-10">All Products</h1>

        <div className="flex flex-row gap-10">
          {/* Filters */}
          <div className=" basis-1/4">
            <Filter />
          </div>

          {/* All Products */}
          <div className=" basis-full">
            {/* Sorting */}
            <div>
              <Sorting />
            </div>
            {gridView ? (
              <GridView products={filter_products} />
            ) : (
              <ListView products={filter_products} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
