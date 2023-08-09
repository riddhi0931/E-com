import React from 'react'

const MyImage = ({ imgs }) => {
    return (
        <div className='grid grid-4-col'>
            {
                imgs.map((element, index) => {
                    return (
                        <figure>
                            <img src={element.url}
                                alt={element.filename}
                                className='box'
                                key={index}
                            />
                        </figure>
                    )
                })

            }

        </div>
    )
}

export default MyImage