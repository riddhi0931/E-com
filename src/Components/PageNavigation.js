import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({ title }) => {
    return (
        <div className='w-[1280px] m-auto text-2xl mt-6'>
            <NavLink to="/"><button className='bg-slate-300 p-2 w-24 rounded-lg'>Home</button></NavLink> /   {title}
        </div>


    )
}

export default PageNavigation