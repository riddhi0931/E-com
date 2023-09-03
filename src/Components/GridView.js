import React from "react";
import Products from "./Products";

const GridView = ({ products }) => {
  console.log("gridView", products);
  return (
    <div className="grid grid-cols-3 gap-10 ">
      {products?.map((items) => {
        return <Products key={items.id} {...items} />;
      })}
    </div>
  );
};

export default GridView;
