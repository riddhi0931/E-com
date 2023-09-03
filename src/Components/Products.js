import React from "react";
import { NavLink } from "react-router-dom";

const Products = (items) => {
  const { id, name, image, price } = items;

  console.log("Items", items);

  return (
    <>
      <div className="flex w-[250px] h-[220px] gap-2 flex-col bg-white border-green-800 justify-center items-center hover:scale-110 shadow-black hover:ease-in-out duration-300 ">
        <div>
          <NavLink to={`/singleProduct/${id}`}>
            <img src={image} alt="img" className="h-[170px] w-[220px]" />
          </NavLink>
        </div>
        <div className="flex w-full justify-around font-semibold">
          <p>{name}</p>
          <p>Rs. {price}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
