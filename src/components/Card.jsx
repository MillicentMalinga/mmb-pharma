import React from 'react'


function HeadCard({title, image, description, buttonText, backgroundColor}) {
  return (
    <div className='bg-blue-100  text-center gap-6 rounded-md shadow-xl shadow-blue-100 mt-6 p-6 flex flex-col' color={backgroundColor}>
       <img className='w-full sm:mb-6' src={image} alt="" />
       <div className="text ms-8 align-middle my-auto flex flex-col">
        <h1 className='text-start  font-bold font-sans'>
            {title}
        </h1>
        
        <p className="text-start my-2 text-sm">
            {description}
        </p>
        <button className="bg-blue-700 shadow-lg uppercase text-white font-bold  mt-10 px-4 py-2 rounded-lg   w-full justify-self-end my-auto">
            {buttonText}
        </button>
        </div>
    </div>
  )

}

export default HeadCard;