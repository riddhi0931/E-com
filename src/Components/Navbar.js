import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between py-5 px-10 bg-blend-color-burn w-[1280px] m-auto text-black  font-serif">
      {/* Logo */}
      <div>
        <NavLink to="/">
          <img src="./Images/Logo.png " alt="rj Photo" height={80} width={90} />
        </NavLink>
      </div>

      {/* Heading */}
      <div>
        <h1 className="text-5xl font-bold ">RJ Fashion Hub</h1>
      </div>

      {/* nav list */}
      <div className="flex ">
        <ul className="flex gap-6 text-2xl cursor-pointer ">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="AboutUs">
            <li>About</li>
          </NavLink>
          <NavLink to="ContactUs">
            <li>Conatct Us</li>
          </NavLink>

          <div className="flex justify-center w-16 h-10 rounded-lg">
            <NavLink to="/Cart">
              <div className="relative">
                <FiShoppingCart className="mt-2 " />
              </div>
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
