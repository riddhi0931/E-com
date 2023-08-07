import React, { useEffect, useState } from 'react'
import SingleCartItem from '../Components/SingleCartItem'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Cart = () => {

    const { Cart } = useSelector((state) => state)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        setTotalAmount(Cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [Cart])

    return (

        <div className='text-1xl  mt-32 mb-10 mx-6'>
            {Cart.length > 0 ?
                (<div className='flex justify-center gap-32'>
                    <div className=' text-xl  mb-10 mx-6'>

                        {
                            Cart.map((cartItem, index) => (<SingleCartItem key={cartItem.id} cartItem={cartItem} index={index} />))
                        }
                    </div>

                    <div className='border border-yellow-100 p-10 h-96'>
                        <div>
                            <div className='text-2xl'>YOUR CART</div>
                            <div className='text-3xl text-green-400 font-semibold'> Summary</div>
                            <p>
                                <span className=" text-lg font-semibold">Total Items:{Cart.length}</span>
                            </p>
                            <hr className='h-6 mt-10' />
                        </div>

                        <div>
                            <p className='font-bold text-lg'>Total Amount: ${totalAmount}</p>
                            <button className='h-10 w-40 bg-lime-500 rounded-lg mt-5'>CheckOut Now</button>
                        </div>
                    </div>
                </div>) :
                (<div className='text-center flex flex-col gap-10'>
                    <h1 className='text-3xl'>Oooppss Cart is Empty !</h1>
                    <NavLink to={"/"}>
                        <button className=' text-2xl p-1 bg-amber-400 text-black w-40 hover:bg-yellow-700 rounded-lg'>
                            Shop Now
                        </button>
                    </NavLink>
                </div>)
            }


        </div>






    )
}

export default Cart

