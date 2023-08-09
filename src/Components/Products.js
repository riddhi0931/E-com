import React from 'react'
import { NavLink } from 'react-router-dom'

const Products = ({ item }) => {
    return (
        <>
            <div className='flex flex-col gap-4'>
                <NavLink to={`/singleProduct/${item.id}`}>
                    <div>
                        <img src={item.image} alt="img" className='h-[200px]' />
                    </div>
                </NavLink>
                <div className='flex flex-col text-center justify-center gap-4'>
                    <h1 className='text-2xl font-semibold'>{item.name}</h1>
                    <button className='bg-black hover:bg-gray-800 text-white rounded px-4 py-2 '>Add to Cart</button>
                </div>

            </div>
        </>
    )
}

export default Products