import React, { useContext } from "react";
import { GlobalData } from "../AGlobalContext/GlobalContext";

function HeroSection() {
  const { myName } = useContext(GlobalData);

  return (
    <div className="relative w-[1280px] m-auto">
      <div className="mx-auto max-w-7xl items-center lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-2xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Shop the Latest Trends Today!
          </h1>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            {myName}
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            modi blanditiis dolores quasi eaque explicabo!
          </p>
          <button className="py-3 px-4 text-2xl bg-black text-white rounded w-40 mt-6">
            Shop now
          </button>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:h-[450px] "
            src="./Images/HeroImage.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
