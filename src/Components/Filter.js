import React, { useContext } from "react";
import { FilterContext } from "../AGlobalContext/FilterData/FilterContext";

const Filter = () => {
  const {
    all_products,
    filters: { text, price, maxPrice, minPrice },
    updateFilters,
  } = useContext(FilterContext);

  const getUniqueData = (allData, prop) => {
    let newVal = allData.map((curElm) => {
      return curElm[prop];
    });

    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");

  return (
    <div>
      {/* Seatch */}
      <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilters}
            className=" text-black p-2 border border-black placeholder:text-black"
            placeholder="Search Products"
          />
        </form>
      </div>

      {/* Category */}
      <div>
        {categoryData.map((curElm, i) => (
          <div key={i} className="flex flex-cols">
            <button
              type="button"
              name="category"
              value={curElm}
              onClick={updateFilters}
            >
              {curElm}
            </button>
          </div>
        ))}
      </div>

      {/* Filter Options */}
      <div>
        <h1>All Company</h1>
        <form action="#">
          <label htmlFor="company"></label>
          <select name="company" id="company" onClick={updateFilters}>
            {companyData.map((curElm, i) => (
              <option value={curElm} name="company" key={curElm.id}>
                {curElm}
              </option>
            ))}
          </select>
        </form>
      </div>

      {/* Price range */}
      <div>
        <p>{price}</p>
        <input
          type="range"
          class="min-price"
          value={price}
          min={minPrice}
          max={maxPrice}
          step="10"
          onChange={updateFilters}
          name="price"
        ></input>
      </div>
    </div>
  );
};

export default Filter;
