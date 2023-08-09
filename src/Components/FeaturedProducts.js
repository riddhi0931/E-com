
import React, { useContext } from 'react'
import { GlobalData } from '../AGlobalContext/GlobalContext';
import Products from './Products';
import { NavLink } from 'react-router-dom';


function FeaturedProducts() {

    const { featureProducts } = useContext(GlobalData)

    console.log("state joiye", featureProducts);

    return (
        <>
            <div className='w-[1280px] m-auto'>
                <h1 className=' text-3xl font-bold mt-20'>Top Selling Products</h1>

                <div className='flex justify-between mt-14'>
                    {
                        featureProducts.map((item) => (
                            <>
                                <NavLink to={`/singleProduct/${item.id}`}>
                                    <Products key={item.id} item={item} />
                                </NavLink>
                            </>

                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default FeaturedProducts

