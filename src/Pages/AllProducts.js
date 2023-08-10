import React, { useContext } from 'react'
import { GlobalData } from '../AGlobalContext/GlobalContext';
import Products from '../Components/Products';

const AllProducts = () => {

    const { allproducts } = useContext(GlobalData)

    return (
        <>
            <div className='w-[1280px] m-auto'>
                <h1 className='text-3xl font-bold mt-20 my-10'>All Products</h1>
                <div className=' grid grid-cols-3 gap-6 '>
                    {
                        allproducts.map((item) => (
                            <Products key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>

        </>

    )
}

export default AllProducts
