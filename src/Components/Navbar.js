import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between py-5 px-10 bg-blend-color-burn w-[1280px] m-auto  items-center text-lg">
      {/* Logo */}
      <div className=" text-3xl">
        <NavLink to="/">E-com</NavLink>
      </div>

      {/* nav list */}
      <div className="flex">
        <ul className="flex gap-6 cursor-pointer items-center">
          <NavLink to="AllProducts">
            <li className="hover:font-bold">Products</li>
          </NavLink>
          <NavLink to="/">
            <li className="hover:font-bold">Home</li>
          </NavLink>
          <NavLink to="AboutUs">
            <li className="hover:font-bold">About</li>
          </NavLink>
          <NavLink to="ContactUs">
            <li className="hover:font-bold">Conatct Us</li>
          </NavLink>

          <NavLink to="/Cart">
            <div className="">
              <FiShoppingCart className="hover:font-bold" />
            </div>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
