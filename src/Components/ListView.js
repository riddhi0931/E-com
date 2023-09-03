import React from "react";

const ListView = ({ products }) => {
  console.log("ListView", products);

  return (
    <div className="flex flex-col gap-y-10 ">
      {products?.map((listItem) => (
        <div className="flex gap-x-6 p-4 rounded-lg bg-white shadow-lg shadow-gray-400/100">
          <div className="w-[450px]">
            <img src={listItem.image} alt="" className="h-[200px] " />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className=" font-semibold">{listItem.name}</h1>
            <p>{listItem.description.slice(0, 149)}</p>
            <p className=" font-semibold mt-8">${listItem.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListView;
