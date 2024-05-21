import React from 'react'

function PageCard({className="" , title,description,pageSource}) {
  return (
    <div className='flex flex-col rounded-lg bg-[#1b192c] lg:text-start text-center gap-y-6 p-10 shadow-sm shadow-gray-600'>
      <div className='text-gray-200 font-sora font-semibold'>
        <h1 className='lg:text-2xl'>
            {title}
        </h1>
      </div>
      <div>
        <p className='text-gray-300 text-md'>
            {description}
        </p>
        </div>
      <div>
        <img src={pageSource} alt='Page image' className='w-full'/>
      </div>
    </div>
  )
}

export default PageCard
