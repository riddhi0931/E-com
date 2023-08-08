import React, { useContext } from "react";
import { GlobalData } from "../AGlobalContext/GlobalContext";

function FeaturedProducts() {
  const { featureProducts } = useContext(GlobalData);

  console.log("state joiye", featureProducts);

  return (
    <div className="mx-auto grid  w-[1280px] justify-between max-w-7xl items-center  space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
      {featureProducts.map((item, index) => (
        <div
          key={index}
          className="rounded-md w-[350px] p-4 border border-black"
        >
          <img
            src={item.image}
            alt="Laptop"
            className="aspect-[1/9] rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="flex justify-between w-[300px] ">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {item.name}
            </h1>

            <button
              type="button"
              className="mt-4 rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProducts;
