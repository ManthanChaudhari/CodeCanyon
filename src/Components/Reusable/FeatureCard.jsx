import React from 'react'

function FeatureCard({className="",imageSource="",title,description}) {
  return (
    <div className=''>
      <div className='rounded-xl flex flex-col gap-y-4 bg-[#1b192c] p-6 lg:p-10 lg:w-[400px] shadow-sm shadow-gray-600 font-sora font-semibold'>
        <div>
            <img src={imageSource} alt='feature image'/>
        </div>
        <div>
            <h1 className='text-2xl text-gray-200'>{title}</h1>
        </div>
        <div>
            <p className='text-gray-300'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
