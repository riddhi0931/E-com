import React, { useState } from 'react'

const MyImage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0])

    return (
        <div className='flex gap-3 items-center'>
            <div className='grid grid-rows-4 gap-4'>
                {
                    imgs.map((curElm, index) => {
                        return (
                            <figure>
                                <img srcSet={curElm.url}
                                    alt={curElm.filename}
                                    key={index}
                                    className='h-[100px] w-[150px]'
                                    onClick={() => setMainImage(curElm)}
                                />
                            </figure>
                        )
                    })}
            </div>

            {/* Main Image */}
            <div className='h-[200px] w-[250px]'>
                {/* <img src={imgs[0].url} alt={imgs[0].filename} /> */}
                <img srcSet={mainImage.url} alt={mainImage.filename} />
            </div>
        </div>
    )
}

export default MyImage
// 7 to 9 10 to 12 4 to 7 8 to 9 10 to 11

