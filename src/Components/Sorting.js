import React, { useContext } from "react";
import { BsGrid } from "react-icons/bs";
import { LuLayoutList } from "react-icons/lu";
import { FilterContext } from "../AGlobalContext/FilterData/FilterContext";

const Sorting = () => {
  const { setGridView, setListView, sorting } = useContext(FilterContext);

  return (
    <div className="flex justify-between mb-10">
      {/* Gird and List View Buttons */}
      <div className="flex gap-2">
        <button onClick={setGridView}>
          <BsGrid />
        </button>
        <button onClick={setListView}>
          <LuLayoutList />
        </button>
      </div>

      {/* Heading */}
      <div>
        <p>Product number</p>
      </div>

      {/* Options */}
      <div>
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={sorting}>
            <option value="Highest">Price (highest)</option>
            <option value="Lowest">Price (lowest)</option>
            <option value="a-z">Price (a-z)</option>
            <option value="z-a">Price (z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sorting;
