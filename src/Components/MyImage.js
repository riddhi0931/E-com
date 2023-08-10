import React, { useState } from 'react'



const MyImage = ({ photo = [{ url: "" }] }) => {

    console.log("photo", photo);

    const [mainImage, setMainImage] = useState(photo[0])

    return (
        <>

            <div className='flex gap-3 items-center'>

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
                                        onClick={() => setMainImage(Element)}
                                    />
                                </>
                            )

                        })
                    }
                </div>

                {/* 2 nd Photo */}
                <div className=' w-[400px] h-[300px]'>
                    <img src={mainImage.url} alt={photo[0].filename} />
                </div>

            </div>



        </>






    )
}

export default MyImage