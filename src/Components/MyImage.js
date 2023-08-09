import React from 'react'



const MyImage = ({ photo }) => {
    console.log("photo", photo);
    return (
        <div className='grid grid-rows-4 gap-4 '>
            {
                photo?.map((Element, index) => {
                    return (
                        <>
                            <img
                                src={Element.url}
                                alt={Element.filename}
                                key={index}
                                className='h-[100px] w-[150px]'
                            />
                        </>
                    )

                })
            }
        </div>



    )
}

export default MyImage