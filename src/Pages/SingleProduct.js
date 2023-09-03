import React, { useEffect, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { GlobalData } from "../AGlobalContext/GlobalProducts/GlobalContext";
import PageNavigation from "../Components/PageNavigation";
import MyImage from "../Components/MyImage";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplaceFilled } from "react-icons/tb";
import { MdDeliveryDining } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import AddToCart from "../Components/AddToCart";
import { CartContext } from "../AGlobalContext/Cart/CartContext";

const APIData = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSP, singleProduct } = useContext(GlobalData);
  console.log("singleProduct", singleProduct);

  const { cart } = useContext(CartContext);

  const { id } = useParams();

  const { name, image, stars, reviews, price, description, stock, company } =
    singleProduct;

  useEffect(() => {
    getSP(`${APIData}?id=${id}`);
  }, []);

  return (
    <>
      <PageNavigation title={name} />
      <div>
        <div className="flex w-[1280px] m-auto justify-around mt-10 ">
          {/* Product Image */}
          <div className="">
            <MyImage photo={image} />
          </div>

          {/* Product data */}
          <div className=" font-semibold w-[500px]">
            <h1>{name}</h1>

            <p>{stars}</p>

            <p>{reviews}</p>

            <p>MRP:{price}</p>

            <p>{description}</p>

            <div className="grid grid-cols-4 mt-6">
              <div>
                <TbTruckDelivery className=" " />
                <p>Free Delivery</p>
              </div>

              <div>
                <TbReplaceFilled className="" />
                <p>30 Days Repalce</p>
              </div>

              <div>
                <MdDeliveryDining />
                <p>Rj Delivered</p>
              </div>

              <div>
                <VscWorkspaceTrusted />
                <p>1 years Warranty</p>
              </div>
            </div>

            <div className=" flex-row gap-4 ">
              <p>
                Available:
                <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>

              <p>
                ID : <span>{id}</span>
              </p>

              <p>
                Brand : <span>{company}</span>
              </p>
            </div>

            <div>
              <hr className=" h-1 w-auto bg-slate-400 mt-2" />
            </div>
            <div>
              {singleProduct.id !== cart.id ? (
                <AddToCart product={singleProduct} />
              ) : (
                <div>
                  <NavLink to="/cart">
                    <button>Go To Cart</button>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

// Loading nu kaam baki che video no-19 timinig-5:15
